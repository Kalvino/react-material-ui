import Alert from "@mui/material/Alert";
import Stack from "@mui/system/Stack";
const ArrayErrors = (errors: []) => {
  return (
    <Stack
      sx={{ my: 2 }}
      spacing={1}
    >
      {
        errors.map((err, i) =>
          <Alert key={i} severity="error">
            {err}
          </Alert>
        )
      }
    </Stack>
  )
}

export default ArrayErrors;
