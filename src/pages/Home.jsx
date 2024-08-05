import { Link, NavLink } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppLayout from "./AppLayout";

function homePage() {
  return (
    <div>
      <PageNav />
      <h1>WorldWise!</h1>
      <Link to="/app" element={<AppLayout />}>
        Go to the app
      </Link>
    </div>
  );
}

export default homePage;
