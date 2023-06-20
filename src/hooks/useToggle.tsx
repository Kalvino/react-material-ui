import { Dispatch, SetStateAction, useCallback, useState } from "react"

function useToggle(
  defaultOpen: boolean
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] {
  const [open, setOpen] = useState(defaultOpen)

  const toggle = useCallback(() => setOpen(x => !x), [])

  return [open, toggle, setOpen]
}

export default useToggle