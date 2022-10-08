import { render, screen, fireEvent, act } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import AuthButton from './AuthButton';

let container: any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe(AuthButton, () => {
  it('displays the correct auth-type', () => {
    render(<AuthButton authType="Sign Up" />, container);
    const authButton = screen.getByRole("button");
    expect(authButton.textContent).toEqual('Sign Up');
  });

  it('toggles dialog opening on-click', async () => {

    render(<AuthButton authType='Login' />, container);

    const authButton = screen.getByRole('button');
    expect(authButton.textContent).toBe('Login');

    let authDialog = screen.queryByTestId('aur-dialog');
    expect(authDialog).toBeNull();

    let authForm = screen.queryByTestId('auth-form');
    expect(authForm).toBeNull();

    // const handleClick = jest.fn();

    // act(() => {
    //   act(() => {
    //     for (let i = 0; i < 5; i++) {
    //       fireEvent.click(button, { bubbles: true });
    //     }
    //   });
    // })

    // expect(handleClick).toHaveBeenCalledTimes(5)

    act(() => {
      fireEvent.click(authButton);
    })

    authDialog = await screen.getByTestId('aur-dialog');
    expect(authDialog).toBeInTheDocument();

    authForm = await screen.getByTestId('auth-form');
    expect(authForm).toBeInTheDocument();
  })
});