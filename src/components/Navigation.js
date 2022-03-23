import { NavLink } from "react-router-dom";

const Navigation = () => {

  return (
  <>
    <header className="bg-white border mb-16 w-full px-6 p-3">
      <nav className="w-full">
        <ul className="flex gap-4">
          <li>
            <NavLink  to="/Movies">Movies</NavLink>
          </li>
          <li>
              <NavLink  to="/Actor">Actors</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
    )
}

export default Navigation;