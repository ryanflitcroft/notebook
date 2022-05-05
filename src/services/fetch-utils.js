import { client, checkError } from './client';
import { useHistory } from 'react-router-dom';

const history = useHistory();

export async function getUser() {
  return client.auth.session;
}

export async function signUp(email, password) {
  const response = await client.auth.signUp({ email, password });

  return response.user;
}

export async function signIn(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function signOut() {
  await auth.client.signOut();

  return history.push('/');
}
