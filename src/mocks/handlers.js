// src/mocks/handlers.js
import todoHandler from './handlerTypes/todos';
import noteHandler from './handlerTypes/notes';

export const handlers = [...todoHandler, ...noteHandler];
