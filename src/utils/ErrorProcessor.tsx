import ArrayErrors from "./ArrayErrors";
import StringError from "./StringError";

const ErrorProcessor = (error: string[] | string) => {
  return Array.isArray(error) ? ArrayErrors(error) : StringError(error);
}

export default ErrorProcessor;

// tododoi gwaka maodo = sababu huskiangi mananeno