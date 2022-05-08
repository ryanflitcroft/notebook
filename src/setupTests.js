import { setupServer } from 'msw/node';
import { rest } from 'msw';

import fetch from 'cross-fetch';
global.fetch = fetch;

const server = setupServer(
  rest.post('', (req, res, ctx) => res.send(ctx.json(''))),
  rest.get('', (req, res, ctx) => res.send(ctx.json('')))
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
