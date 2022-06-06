import { v4 as uuidv4 } from 'uuid';
import { rest } from 'msw';

const initialTodos = [
  {
    id: 'asdfasdfsdf3234234234d',
    title: 'Work out',
    description: '',
    createdOn: '1653950197434',
    lastUpdated: '1653950197434',
    isCompleted: false,
  },
];

export default [
  rest.get('/todos', (req, res, ctx) => {
    let miniAppTodos = localStorage.getItem('mini-app-todos');
    let existingTodos = miniAppTodos ? JSON.parse(miniAppTodos) : [];
    if (!Boolean(existingTodos)) {
      localStorage.setItem('mini-app-todos', JSON.stringify(initialTodos));
      existingTodos = initialTodos;
    }

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({ data: existingTodos })
    );
  }),

  rest.get('/todo:id', (req, res, ctx) => {
    const todoId = req.url.searchParams.get('id');

    let miniAppTodos = localStorage.getItem('mini-app-todos');
    let existingTodos = miniAppTodos ? JSON.parse(miniAppTodos) : [];
    const matchingTodo = existingTodos.find(todo => todo.id === todoId);
    if (!Boolean(existingTodos) || !Boolean(matchingTodo)) {
      return res(
        // Respond with a 200 status code
        ctx.status(404)
      );
    } else {
      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json({ data: matchingTodo })
      );
    }
  }),

  rest.post('/create/todo', (req, res, ctx) => {
    let miniAppTodos = localStorage.getItem('mini-app-todos');
    let existingTodos = miniAppTodos ? JSON.parse(miniAppTodos) : [];

    const newTodo = {
      isCompleted: false,
      description: '',
      ...req.body,
      id: uuidv4(),
      createdOn: new Date().getTime(),
      lastUpdated: new Date().getTime(),
    };

    if (!req.body.title) {
      return res(
        // Respond with a 200 status code
        ctx.status(400),
        ctx.json({
          message: 'You need to add a title to your todo.',
        })
      );
    }
    localStorage.setItem('mini-app-todos', JSON.stringify([...existingTodos, newTodo]));

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({ data: newTodo })
    );
  }),

  rest.patch('/update/todo:id', (req, res, ctx) => {
    const todoId = req.url.searchParams.get('id');
    let miniAppTodos = localStorage.getItem('mini-app-todos');
    let existingTodos = miniAppTodos ? JSON.parse(miniAppTodos) : [];
    const matchingTodo = existingTodos.find(todo => todo.id === todoId);

    if (!Boolean(existingTodos) || !matchingTodo) {
      return res(
        ctx.status(400),
        ctx.json({
          message: 'Existing todo not found.',
        })
      );
    } else {
      const updatedTodos = existingTodos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            ...req.body,
            lastUpdated: new Date().getTime(),
          };
        }
        return todo;
      });
      localStorage.setItem('mini-app-todos', JSON.stringify(updatedTodos));
      const updatedTodo = {
        ...matchingTodo,
        ...req.body,
        lastUpdated: new Date().getTime(),
      };

      return res(
        ctx.status(200),
        ctx.json({
          data: updatedTodo,
        })
      );
    }
  }),

  rest.delete('/delete/todo:id', (req, res, ctx) => {
    const todoId = req.url.searchParams.get('id');
    let miniAppTodos = localStorage.getItem('mini-app-todos');
    let existingTodos = miniAppTodos ? JSON.parse(miniAppTodos) : [];
    const remainingTodos = existingTodos.filter(todo => todo.id !== todoId);

    if (!Boolean(existingTodos) || !matchingTodo) {
      return res(
        ctx.status(400),
        ctx.json({
          message: 'Existing todo not found.',
        })
      );
    } else {
      localStorage.setItem('mini-app-todos', JSON.stringify(remainingTodos));
      return res(ctx.status(203));
    }
  }),
];
