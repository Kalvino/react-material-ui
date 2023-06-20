import { render, screen, fireEvent, act, cleanup } from '@testing-library/react';
import AuthButton from './AuthButton';

let container: any = null;
const buttonName: string = "Button Name";
let authButton: HTMLButtonElement;

beforeEach(() => {
  render(<AuthButton authType={buttonName} />);

  authButton = screen.getByRole("button");
});

afterEach(cleanup);

describe(AuthButton, () => {
  it('displays the correct auth-type', () => {
    expect(authButton.textContent).toEqual(buttonName);
  });

  it('toggles dialog opening on-click', async () => {

    let authDialog = screen.queryByTestId('aur-dialog');
    expect(authDialog).toBeNull();

    let authForm = screen.queryByTestId('auth-form');
    expect(authForm).toBeNull();

    act(() => {
      fireEvent.click(authButton);
    })

    authDialog = screen.getByTestId('aur-dialog');
    expect(authDialog).toBeInTheDocument();

    authForm = screen.getByTestId('auth-form');
    expect(authForm).toBeInTheDocument();
  })
});