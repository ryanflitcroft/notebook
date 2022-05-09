import { client, checkError } from './client';

export function getUser() {
  return client.auth.user();
}

export async function signUp(email, password) {
  const { user, error } = await client.auth.signUp({ email, password });
  if (error) throw error;

  return user;
}

export async function signIn(email, password) {
  const { user, error } = await client.auth.signIn({ email, password });
  if (error) throw error;

  return user;
}

export async function signOut() {
  await client.auth.signOut();
}

export async function createNote(note) {
  const response = await client.from('notes').insert(note);

  return checkError(response);
}

export async function getNotes(id) {
  const response = await client
    .from('notes')
    .select()
    .match({ user_id: id })
    .order('created_at', { ascending: true });

  return checkError(response);
}
