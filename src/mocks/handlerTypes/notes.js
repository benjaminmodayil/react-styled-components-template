import { v4 as uuidv4 } from 'uuid';
import { rest } from 'msw';

const initialNotes = [
  {
    id: 'asdfasdfsdf3234234234d',
    title: 'Work out',
    content: 'Do something to get fit',
    createdOn: '1653950197434',
    lastUpdated: '1653950197434',
  },
];

export default [
  rest.get('/notes', (req, res, ctx) => {
    let miniAppNotes = localStorage.getItem('mini-app-notes');
    let existingNotes = miniAppNotes ? JSON.parse(miniAppNotes) : null;
    if (!Boolean(existingNotes)) {
      localStorage.setItem('mini-app-notes', JSON.stringify(initialNotes));
      existingNotes = initialNotes;
    }

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({ data: existingNotes })
    );
  }),

  rest.get('/note:id', (req, res, ctx) => {
    const noteId = req.url.searchParams.get('id');

    let miniAppNotes = localStorage.getItem('mini-app-notes');
    let existingNotes = miniAppNotes ? JSON.parse(miniAppNotes) : null;
    const matchingNote = existingNotes.find(note => note.id === noteId);
    if (!Boolean(existingNotes) || !Boolean(matchingNote)) {
      return res(
        // Respond with a 200 status code
        ctx.status(404)
      );
    } else {
      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json({ data: matchingNote })
      );
    }
  }),

  rest.post('/create/note', (req, res, ctx) => {
    const newNote = {
      content: '',
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
          message: 'You need to add a title to your note.',
        })
      );
    }

    if (!req.body.content) {
      return res(
        // Respond with a 200 status code
        ctx.status(400),
        ctx.json({
          message: 'You need to add a title to your note.',
        })
      );
    }

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({ data: newNote })
    );
  }),

  rest.patch('/update/note:id', (req, res, ctx) => {
    const noteId = req.url.searchParams.get('id');
    let miniAppNotes = localStorage.getItem('mini-app-notes');
    let existingNotes = miniAppNotes ? JSON.parse(miniAppNotes) : null;
    const matchingNote = existingNotes.find(note => note.id === noteId);

    if (!Boolean(existingNotes) || !matchingNote) {
      return res(
        ctx.status(400),
        ctx.json({
          message: 'Existing note not found.',
        })
      );
    } else {
      const updatedNote = {
        ...matchingNote,
        ...req.body,
        lastUpdated: new Date().getTime(),
      };

      return res(
        ctx.status(200),
        ctx.json({
          data: updatedNote,
        })
      );
    }
  }),
];
