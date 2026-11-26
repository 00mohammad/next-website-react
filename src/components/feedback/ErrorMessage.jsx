function ErrorMessage({ message = "Something went wrong." }) {
  return <p role="alert" className="error-message">{message}</p>;
}

export default ErrorMessage;
