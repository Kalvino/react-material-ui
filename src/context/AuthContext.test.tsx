// AuthContext.test.tsx
import React, { useContext } from 'react';
import { render, screen, fireEvent, cleanup, renderHook, act } from '@testing-library/react';
import { AuthContext, AuthProvider } from './AuthContext';

let authenticatedText: HTMLElement | null;
let notAuthenticatedText: HTMLElement | null;

let authButton: HTMLElement;
let logoutButton: HTMLElement;

beforeEach(async () => {
  const TestComponent: React.FC = () => {
    const { user, setUser } = useContext(AuthContext);

    let aUser: typeof user = {
      user: {
        id: 1,
        username: "calvin",
        email: "calvin@muireact.com",
        role: "admin"
      },
      authToken: "my authtoken"
    }

    return (
      <div>
        <span>{!!user ? 'Authenticated' : 'Not Authenticated'}</span>
        <button onClick={() => setUser(aUser)}>Authenticate</button>
        <button onClick={() => setUser(null)}>Logout</button>
      </div>
    );
  };

  render(
    <AuthProvider>
      <TestComponent />
    </AuthProvider>
  );

  authenticatedText = screen.queryByText("Authenticated");
  notAuthenticatedText = screen.queryByText("Not Authenticated");

  authButton = screen.getByText('Authenticate');
  logoutButton = screen.getByText('Logout');
})

afterEach(cleanup);

describe('Not Authenticated AuthContext', () => {
  it('Updates user state correctly on authentication', () => {

    // not authenticated
    expect(authenticatedText).toBeNull();
    expect(notAuthenticatedText).toBeVisible();

  });
});

describe('Authenticated AuthContext', () => {
  it('Passes user state correctly to the children on authentication', () => {
    // Authenticate
    act(() => {
      fireEvent.click(authButton);
    })

    authenticatedText = screen.queryByText("Authenticated");
    notAuthenticatedText = screen.queryByText("Not Authenticated");

    // Authenticated
    expect(authenticatedText).toBeVisible();
    expect(notAuthenticatedText).toBeNull();
  })

  it('Removes the authenticated user on logout', () => {
    // Authenticate
    act(() => {
      fireEvent.click(authButton);
    })
    // Logout
    act(() => {
      fireEvent.click(logoutButton);
    });

    // Not authenticated again
    expect(authenticatedText).toBeNull();
    expect(notAuthenticatedText).toBeVisible();
  })
})
