import { Link } from "react-router-dom";
import UserData from "../UserData/UserData";
import "./Dashboard.css";

const Dashboard = (props) => {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <h3 className="navbar-brand">User Details</h3>
          <div className="dropdown">
            <button
              className="btn btn-outline-light dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {props.location.state.userName}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <Link className="dropdown-item" to="/">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div>
        <UserData />
      </div>
    </div>
  );
};

export default Dashboard;
