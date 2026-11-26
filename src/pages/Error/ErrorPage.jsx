import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <section className="container">
      <h1>Something went wrong</h1>
      <Link to="/">Back to Home</Link>
    </section>
  );
}

export default ErrorPage;
