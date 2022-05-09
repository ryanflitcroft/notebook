import { setupServer } from 'msw/node';
import { rest } from 'msw';
import fetch from 'cross-fetch';
import { mockDataNotes } from './fixtures/mockDataNotes';
import { mockDataAuth } from './fixtures/mockDataAuth';

global.fetch = fetch;

const server = setupServer(
  rest.post(
    'https://qlcmsurgxwdzogqksjxz.supabase.co/auth/v1/token',
    (req, res, ctx) => res(ctx.json(mockDataAuth))
  ),
  rest.post(
    'https://qlcmsurgxwdzogqksjxz.supabase.co/auth/v1/signup',
    (req, res, ctx) => res(ctx.json(mockDataAuth))
  ),
  rest.get(
    'https://qlcmsurgxwdzogqksjxz.supabase.co/rest/v1/notes',
    (req, res, ctx) => res(ctx.json(mockDataNotes))
  ),
  rest.post(
    'https://qlcmsurgxwdzogqksjxz.supabase.co/rest/v1/notes',
    (req, res, ctx) => res(ctx.json(mockDataNotes))
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
