import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="logo">My Website</Link>
      <nav aria-label="Main navigation">
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}

export default Header;
