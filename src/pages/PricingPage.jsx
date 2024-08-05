import { Link } from "react-router-dom";

function pricingPage() {
  return (
    <div>
      <h1>Pricing!</h1>

      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>

        <li>
          <Link to="/product">Product</Link>
        </li>

        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
      </ul>
    </div>
  );
}

export default pricingPage;
