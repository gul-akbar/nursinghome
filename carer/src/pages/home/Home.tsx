/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Style.css";
import { IHomeProps } from "./IHomeProps";
import { Button } from "react-bootstrap";
import { Dashboard } from "../dashboard/Dashboard";
import { Bookings } from "..//bookings/Bookings";
import { Templates } from "../templates/Templates";
import { Sessions } from "../sessions/Sessions";
import { Shifts } from "../shifts/Shifts";

export const Home: React.FC<IHomeProps> = (props: IHomeProps): JSX.Element => {
  const [templatesView, setTemplatesView] = useState(false);
  const [sessionView, setSessionView] = useState(false);
  const [dashboardView, setDashboardView] = useState(true);
  const [bookingsView, setBookingsView] = useState(false);
  const [shiftsView, setShiftsView] = useState(false);

  function clearViews() {
    setTemplatesView(false);
    setSessionView(false);
    setDashboardView(false);
    setBookingsView(false);
  }

  function logout() {
    props.logout();
  }

  function showDashboard() {
    clearViews();
    setDashboardView(true);
  }

  function showBooking() {
    clearViews();
    setBookingsView(true);
  }

  function showTemplates() {
    clearViews();
    setTemplatesView(true);
  }

  function showSessions() {
    clearViews();
    setSessionView(true);
  }

  function showShifts() {
    clearViews();
    setShiftsView(true);
  }

  const menuSwitcher = (): JSX.Element => {
    return (
      <>
        {dashboardView ? <Dashboard /> : <></>}
        {templatesView ? <Templates /> : <></>}
        {sessionView ? <Sessions /> : <></>}
        {bookingsView ? <Bookings /> : <></>}
        {shiftsView ? <Shifts /> : <></>}
      </>
    );
  };

  const template = (): JSX.Element => {
    return (
      <body>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <Button
              variant="link"
              className="navbar-brand"
              onClick={showDashboard}
            >
              Dashboard
            </Button>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Button
                    variant="link"
                    className="nav-link"
                    onClick={showShifts}
                    data-toggle="collapse"
                    data-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    Shifts
                  </Button>
                </li>
                <li className="nav-item active">
                  <Button
                    variant="link"
                    className="nav-link"
                    onClick={showSessions}
                    data-toggle="collapse"
                    data-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    My Shifts
                  </Button>
                </li>
                <li className="nav-item active">
                  <Button
                    variant="link"
                    className="nav-link"
                    onClick={showTemplates}
                    data-toggle="collapse"
                    data-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    Calendar
                  </Button>
                </li>
                <li className="nav-item active">
                  <Button
                    variant="link"
                    className="nav-link"
                    onClick={showTemplates}
                    data-toggle="collapse"
                    data-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    Invoices
                  </Button>
                </li>
                <li className="nav-item active">
                  <Button
                    variant="link"
                    className="nav-link"
                    onClick={showTemplates}
                    data-toggle="collapse"
                    data-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    Offers
                  </Button>
                </li>
                <li className="nav-item dropdown active">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Account
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item">Profile</a>
                    <a className="dropdown-item">Settings</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" onClick={logout}>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="bg-success py-5 mb-5">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-lg-12">
                <h1 className="display-4 text-white mt-5 mb-2">Carer</h1>
                <p className="lead mb-5 text-white-50">
                  advanced caring system by GW
                </p>
              </div>
            </div>
          </div>
        </header>
        <div className="container">{menuSwitcher()}</div>

        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright &copy; admin@gw.com
            </p>
          </div>
        </footer>
      </body>
    );
  };

  return <div>{template()}</div>;
};
