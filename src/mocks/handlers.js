// src/mocks/handlers.js
import { rest } from 'msw';

// localStorage.getItem('myCat');
// localStorage.setItem('myCat', 'Tom');
// localStorage.removeItem('myCat');
// localStorage.clear();

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

export const handlers = [
  rest.get('/todos', (req, res, ctx) => {
    let miniAppTodos = localStorage.getItem('mini-app-todos');
    let existingTodos = miniAppTodos ? JSON.parse(miniAppTodos) : null;
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

  rest.get('/todo', (req, res, ctx) => {
    const todoId = req.url.searchParams.get('id');

    let miniAppTodos = localStorage.getItem('mini-app-todos');
    let existingTodos = miniAppTodos ? JSON.parse(miniAppTodos) : null;
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

  rest.get('/user', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem('is-authenticated');

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        })
      );
    }

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      })
    );
  }),
];
