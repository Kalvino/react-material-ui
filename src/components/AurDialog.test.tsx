import { render, screen, fireEvent, act } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import AurDialog from './AurDialog';

let container: any = null;
let closeButton: any;
let handleClick: any;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);

  handleClick = jest.fn();

  render(<AurDialog openState={true}
    onClose={handleClick}
    title="Sign Up"
    content="Dialog Content" />, container);

  closeButton = screen.getByRole("button");
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe(AurDialog, () => {
  it('renders correctly without crashing', () => {
    expect(closeButton).toBeInTheDocument();

    const dialogTitle = screen.getByText("Sign Up");
    expect(dialogTitle).toBeInTheDocument();

    const dialogContent = screen.getByText("Dialog Content");
    expect(dialogContent).toBeInTheDocument();
  });

  it('toggles openState on clicking close button', async () => {

    act(() => {
      fireEvent.click(closeButton);
    })

    expect(handleClick).toHaveBeenCalledTimes(1);
  })
});