import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import UserProvider from './context/UserProvider';
import App from './App';
import { mockNotesData } from './fixtures/mockNotesData';

describe('Renders component App', () => {
  it('should render elements header, h1, main, form, div, span*2, label>input*2, button for unauthenticated users', async () => {
    render(
      <UserProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </UserProvider>
    );
    const header = screen.getByRole('banner');
    const heading = screen.getByRole('heading');
    const main = screen.getByRole('main');
    const form = screen.getByRole('form');
    const div = screen.getByLabelText(
      /container for sign in and sign up toggles/i
    );
    const toggleSignIn = screen.getByLabelText(
      /toggle sign in for existing users/i
    );
    const toggleSignUp = screen.getByLabelText(/toggle sign up for new users/i);
    const labelEmail = screen.getByText(/email/i);
    const labelPassword = screen.getByText(/password/i);
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button', {
      name: /sign in/i,
    });

    expect(header.nodeName).toBe('HEADER');
    expect(heading.nodeName).toBe('H1');
    expect(main.nodeName).toBe('MAIN');
    expect(form.nodeName).toBe('FORM');
    expect(div.nodeName).toBe('DIV');
    expect(toggleSignIn.nodeName).toBe('SPAN');
    expect(toggleSignUp.nodeName).toBe('SPAN');
    expect(labelEmail.nodeName).toBe('LABEL');
    expect(labelPassword.nodeName).toBe('LABEL');
    inputs.forEach((el) => expect(el.nodeName).toBe('INPUT'));
    expect(button.nodeName).toBe('BUTTON');
  });

  it('should render elements header, p, span, h1, button, a, section, article,h3, p*2 for authenticated users', async () => {
    render(
      <UserProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </UserProvider>
    );
    const inputs = screen.getAllByRole('textbox');
    const inputEmail = inputs[0];
    const inputPassword = inputs[1];
    const button = screen.getByRole('button', {
      name: /sign in/i,
    });

    console.log(button);
    userEvent.type(inputEmail, 'user@test.com');
    userEvent.type(inputPassword, 'password1');
    userEvent.click(button);

    // const buttonSignOut = await screen.findByRole('button', {
    //   name: /signout/i,
    // });

    // const section = screen.getByRole('region', {
    //   name: /container for list of user notes/i,
    // });
    // const articles = screen.getAllByLabelText(/container for user notes/i);
  });
});
