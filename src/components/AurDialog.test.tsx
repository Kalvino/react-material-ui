import { render, screen, fireEvent, cleanup, renderHook, act } from '@testing-library/react';
import AurDialog from './AurDialog';
import useToggle from '../hooks/useToggle';

const { result } = renderHook(() => useToggle(true));
let [open, toggle, setOpen] = result.current;
let closeButton: HTMLButtonElement;

beforeEach(() => {
  setOpen = jest.fn((x) => x)

  render(<AurDialog
    title="Sign Up"
    open={open}
    toggle={toggle}
    setOpen={() => setOpen(false)}
    content="Dialog Content"
  />);

  closeButton = screen.getByRole("button");

});

afterEach(cleanup);

describe(AurDialog, () => {
  it('renders correctly without crashing', () => {
    expect(closeButton).toBeInTheDocument();

    // Get the dialog title
    const dialogTitle = screen.getByText("Sign Up");
    expect(dialogTitle).toBeInTheDocument();

    // Get the dialog content title
    const dialogContent = screen.getByText("Dialog Content");
    expect(dialogContent).toBeInTheDocument();
  });

  it('toggles openState on clicking close button', async () => {

    // Click the button to close the modal
    act(() => {
      fireEvent.click(closeButton);
    });

    expect(setOpen).toHaveBeenCalledTimes(1);
  })
});