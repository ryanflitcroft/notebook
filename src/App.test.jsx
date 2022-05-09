import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserProvider from './context/UserProvider';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { mockDataNotes } from './fixtures/mockDataNotes';
import { mockDataAuth } from './fixtures/mockDataAuth';

describe('Renders component App', () => {
  it('should render elements header, h1, main, form, div, span*2, label>input*2, button for unauthenticated users', async () => {
    render(
      <MemoryRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </MemoryRouter>
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
    const inputEmail = screen.getByPlaceholderText(/email/i);
    const inputPassword = screen.getByPlaceholderText(/password/i);
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
    expect(inputEmail.nodeName).toBe('INPUT');
    expect(inputPassword.nodeName).toBe('INPUT');
    expect(button.nodeName).toBe('BUTTON');
  });

  it('should render elements header, p, span, h1, button, a, section, article,h3, p*2 for authenticated users on signIn', async () => {
    render(
      <MemoryRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </MemoryRouter>
    );
    const inputEmail = screen.getByPlaceholderText(/email/i);
    const inputPassword = screen.getByPlaceholderText(/password/i);
    const signInButton = screen.getByRole('button', {
      name: /sign in/i,
    });

    userEvent.type(inputEmail, 'user@test.com');
    userEvent.type(inputPassword, 'password1');
    userEvent.click(signInButton);

    await waitFor(() => {
      const pHello = screen.getByText(/hello/i);
      const spanEmail = screen.getByText(/user2@test\.com/i);
      const h1 = screen.getByRole('heading', {
        name: /notebook/i,
      });
      const buttonSignOut = screen.getByRole('button', {
        name: /signout/i,
      });
      const createLink = screen.getByRole('link', {
        name: /create a note/i,
      });
      const section = screen.getByRole('region', {
        name: /container for list of user notes/i,
      });
      const articles = screen.getAllByLabelText(/container for user notes/i);
      const h3s = screen.getAllByRole('heading', {
        level: 3,
      });
      const pContent = screen.getAllByLabelText(/note content/i);
      const pDate = screen.getAllByLabelText(/note date/i);

      expect(pHello.nodeName).toBe('P');
      expect(spanEmail.nodeName).toBe('SPAN');
      expect(spanEmail).toHaveTextContent(mockDataAuth.user.email);
      expect(h1.nodeName).toBe('H1');
      expect(buttonSignOut.nodeName).toBe('BUTTON');
      expect(createLink.nodeName).toBe('A');
      expect(section.nodeName).toBe('SECTION');
      articles.forEach((el) => expect(el.nodeName).toBe('ARTICLE'));
      expect(articles.length).toBe(mockDataNotes.length);
      h3s.forEach((el) => expect(el.nodeName).toBe('H3'));
      expect(h3s[0]).toHaveTextContent(mockDataNotes[0].heading);
      pContent.forEach((el) => expect(el.nodeName).toBe('P'));
      expect(pContent[0]).toHaveTextContent(mockDataNotes[0].content);
      pDate.forEach((el) => expect(el.nodeName).toBe('P'));
      expect(pDate[0]).toHaveTextContent(
        new Date(mockDataNotes[0].created_at).toDateString()
      );

      userEvent.click(buttonSignOut);
    });
  });

  it('should render elements header, p, span, h1, button, a, section, article,h3, p*2 for authenticated users on signUp', async () => {
    render(
      <MemoryRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </MemoryRouter>
    );

    const inputEmail = screen.getByPlaceholderText(/email/i);
    const inputPassword = screen.getByPlaceholderText(/password/i);
    const toggleSignUp = screen.getByLabelText(/toggle sign up for new users/i);

    userEvent.click(toggleSignUp);

    const signUpButton = screen.getByRole('button', {
      name: /sign up/i,
    });

    userEvent.type(inputEmail, 'user@test.com');
    userEvent.type(inputPassword, 'password1');
    userEvent.click(signUpButton);

    await waitFor(() => {
      screen.getByText(/hello/i);
      screen.getByText(/user2@test\.com/i);
      screen.getByRole('heading', {
        name: /notebook/i,
      });
      const buttonSignOut = screen.getByRole('button', {
        name: /signout/i,
      });
      screen.getByRole('link', {
        name: /create a note/i,
      });
      screen.getByRole('region', {
        name: /container for list of user notes/i,
      });
      screen.getAllByLabelText(/container for user notes/i);
      screen.getAllByRole('heading', {
        level: 3,
      });
      screen.getAllByLabelText(/note content/i);
      screen.getAllByLabelText(/note date/i);

      userEvent.click(buttonSignOut);
    });
  });

  it('should navigate user back to /login onClick for buttonSignOut', async () => {
    render(
      <MemoryRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </MemoryRouter>
    );

    const inputEmail = screen.getByPlaceholderText(/email/i);
    const inputPassword = screen.getByPlaceholderText(/password/i);
    const signInButton = screen.getByRole('button', {
      name: /sign in/i,
    });

    userEvent.type(inputEmail, 'user@test.com');
    userEvent.type(inputPassword, 'password1');
    userEvent.click(signInButton);

    await waitFor(() => {
      const buttonSignOut = screen.getByRole('button', {
        name: /signout/i,
      });

      userEvent.click(buttonSignOut);
      waitForElementToBeRemoved(buttonSignOut);

      screen.getByRole('form', {
        name: /sign in or sign up to continue/i,
      });
      screen.getByPlaceholderText(/email/i);
      screen.getByPlaceholderText(/password/i);
      screen.getByRole('button', {
        name: /sign in/i,
      });
    });
  });

  it('should navigate user to /create, render elements a, section, form, div, span, input>label*2, button onClick for link createNote. onClick for submitButton, navigates user back to /', async () => {
    render(
      <MemoryRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </MemoryRouter>
    );

    userEvent.type(screen.getByPlaceholderText(/email/i), 'user@test.com');
    userEvent.type(screen.getByPlaceholderText(/password/i), 'password1');
    userEvent.click(
      screen.getByRole('button', {
        name: /sign in/i,
      })
    );

    await waitFor(() => {
      const articles = screen.getAllByLabelText(/container for user notes/i);
      expect(articles.length).toBe(mockDataNotes.length);
      userEvent.click(
        screen.getByRole('link', {
          name: /create a note/i,
        })
      );
    });

    await waitFor(() => {
      screen.getByRole('link', {
        name: /back to notes/i,
      });
      screen.getByLabelText(/container for form/i);
      screen.getByRole('form', {
        name: /submit form to create a note/i,
      });
      screen.getByText(/create a note/i);
      screen.getByText(/note heading:/i);
      screen.getByPlaceholderText(/heading/i);
      screen.getByText(/your note:/i);
      screen.getByPlaceholderText(/content/i);
      screen.getByRole('button', {
        name: /submit/i,
      });
    });

    userEvent.type(screen.getByPlaceholderText(/heading/i), 'Hello');
    userEvent.type(screen.getByPlaceholderText(/content/i), 'World');
    userEvent.click(
      screen.getByRole('button', {
        name: /submit/i,
      })
    );

    await waitFor(() => {
      const articles = screen.getAllByLabelText(/container for user notes/i);
      expect(articles.length).toBe(mockDataNotes.length);
    });
  });
});
