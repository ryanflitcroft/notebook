import { setupServer } from 'msw/node';
import { rest } from 'msw';
import fetch from 'cross-fetch';
import { mockNotesData } from './fixtures/mockNotesData';
import { mockDataSignIn } from './fixtures/mockDataSignIn';

global.fetch = fetch;

const server = setupServer();
rest.post(
  'https://qlcmsurgxwdzogqksjxz.supabase.co/auth/v1/token',
  (req, res, ctx) => res.send(ctx.json(mockDataSignIn))
),
  rest.get(
    'https://qlcmsurgxwdzogqksjxz.supabase.co/rest/v1/notes',
    (req, res, ctx) => res.send(ctx.json(mockNotesData))
  );

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
