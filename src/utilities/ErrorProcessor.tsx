import ArrayErrors from "./ArrayErrors";
import StringError from "./StringError";

const ErrorProcessor = (error: [] | string) => {
  return Array.isArray(error) ? ArrayErrors(error) : StringError(error);
}

export default ErrorProcessor;