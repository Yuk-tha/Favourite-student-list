import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Favourite Students</h2>

      <div>
        <Link to="/">Students</Link>
        <Link to="/favourites">Favourites</Link>
      </div>
    </nav>
  );
}

export default Navbar;