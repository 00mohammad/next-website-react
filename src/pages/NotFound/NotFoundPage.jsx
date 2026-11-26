import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="container">
      <h1>404 - Page Not Found</h1>
      <Link to="/">Back to Home</Link>
    </section>
  );
}

export default NotFoundPage;
