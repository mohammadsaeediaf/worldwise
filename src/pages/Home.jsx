import { Link, NavLink } from "react-router-dom";

function homePage() {
  return (
    <div>
      <h1>WorldWise!</h1>
      <ul>
        <li>
          <NavLink to="/"> Home</NavLink>
        </li>

        <li>
          <NavLink to="/product">Product</NavLink>
        </li>

        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default homePage;
