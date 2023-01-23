import Alert from "@mui/material/Alert";
const StringError = (error: string) => {
  return (
    <Alert
      severity="error"
      aria-live="assertive"
      sx={{ my: 2 }}
    >
      {error}
    </Alert>
  )
}

export default StringError;
