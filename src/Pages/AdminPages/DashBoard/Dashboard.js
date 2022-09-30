import React from "react";
import Button from "../../../Shared/Button/Button";
import "./Dashboard.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  withRouter,
  Switch,
} from 'react-router-dom'

function Dashboard() {
  return (
    <div className="col-sm-12 text-center padding_dashboard">
      <div className="col-sm-12 text-center">
        <span>
          {" "}
          <Link to="/login">
          <Button
            size={"sm"}
            className="button_landing1 px-4"
            variant="outline"
          >
            Login
          </Button></Link>
        </span>
        <span className="px-4">
          {" "}
          <Button size={"sm"} className="button_landing px-3" variant="outline">
            Join Us
          </Button>
        </span>
      </div>
      <div className="col-sm-12 text-center">
        <span>
          {" "}
          <Button size={"sm"} className="button_landing px-4" variant="outline">
            Buyer
          </Button>
        </span>
        <span className="px-4">
          {" "}
          <Button size={"sm"} className="button_landing px-4" variant="outline">
            Seller
          </Button>
        </span>
      </div>
      <div className="col-sm-12 text-center">
        <p className="landing_dashboard">Landing Page</p>
      </div>
    </div>
  );
}

export default Dashboard;
