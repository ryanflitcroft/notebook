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
