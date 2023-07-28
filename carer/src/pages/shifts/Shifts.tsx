/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import {
  Accordion,
  Alert,
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
} from "react-bootstrap";
import "react-calendar/dist/Calendar.css";
import ApplicationContext from "../../context/ApplicationContext";
import { ISessionData } from "../../types/ISessionData";
import { getAppointmentSessions } from "../../services/Service";
import loadingImage from "../../images/loading.gif";
import "bootstrap/dist/css/bootstrap.min.css";

export const Shifts: React.FC = (): JSX.Element => {
  const context = useContext(ApplicationContext);

  const defaultSessions: ISessionData[] = [];

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const [data, setData] = React.useState(defaultSessions);
  const [selectedDate, setSelectedDate] = useState(new Date());

  async function LoadData(date: Date) {
    setLoading(true);
    const response = await getAppointmentSessions(date);

    if (!response) {
      setError(true);
      setLoading(false);
      return;
    }

    setData(response.sessions);
    setLoading(false);
  }

  useEffect(() => {
    LoadData(new Date());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSelectedDate(date: Date) {
    setSelectedDate(date);
    LoadData(date);
  }

  function zeroPad(num: number, places: number) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
  }

  function formatSelectedDate() {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1;
    const day = selectedDate.getDate();

    const value = year + "-" + zeroPad(month, 2) + "-" + zeroPad(day, 2);

    return value;
  }

  function awaitingApproval() {
    return (
      <Alert variant="danger">
        <Alert.Heading>Account is awaiting approval</Alert.Heading>
        <p>
          Salaams, we are doing our very best to approve all account. please
          bear with us
        </p>
        <hr />
        <p className="mb-0">just remember we are all working as a volunteer</p>
      </Alert>
    );
  }

  const loadingData = (): JSX.Element => {
    return (
      <div className="loading-center">
        <img src={loadingImage} alt="Loading" />
      </div>
    );
  };

  const errorView = (): JSX.Element => {
    return (
      <div className="loading-center" style={{ padding: 100 }}>
        Error Communicating with server!
      </div>
    );
  };

  const slot = (session: ISessionData): JSX.Element => {
    return (
      <>
        <div className="col-sm-4">
          <Card>
            <Card.Header>
              <table style={{ width: "100%" }}>
                <tr>
                  <td style={{ width: "100%" }}>{session.name}</td>
                  <td>
                    <Form.Check
                      style={{
                        alignContent: "right",
                        paddingBottom: "20px",
                        paddingLeft: "10px",
                      }}
                      type="checkbox"
                    />
                  </td>
                </tr>
              </table>
            </Card.Header>
            <Card.Body>
              <table style={{ width: "100%" }}>
                <tr>
                  <td style={{ minWidth: "70px" }}>Date</td>
                  <td style={{ width: "100%" }}>
                    {session.startDateTime.toString()}
                  </td>
                </tr>
                <tr>
                  <td style={{ minWidth: "70px" }}>Start</td>
                  <td style={{ width: "100%" }}>
                    {session.startDateTime.toString()}
                  </td>
                </tr>
                <tr>
                  <td style={{ minWidth: "50px" }}>End</td>
                  <td style={{ width: "100%" }}>
                    {session.endDateTime.toString()}
                  </td>
                </tr>
                <tr>
                  <td style={{ minWidth: "50px" }}>Rate</td>
                  <td style={{ width: "100%" }}>£{session.rate}</td>
                </tr>
              </table>
              <hr />
              <div className="row">
                <div className="col">
                  <Button variant="info">Info</Button>
                </div>
                <div className="col" style={{ textAlign: "right" }}>
                  <Button variant="primary">Book</Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  };

  const bookings = (): JSX.Element => {
    return (
      <>
        <br />
        <>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Filters</Accordion.Header>
              <Accordion.Body>
                <>
                  <table style={{ width: "100%" }}>
                    <tr>
                      <td>
                        <DropdownButton
                          className={"d-grid"}
                          style={{}}
                          title="July 2023"
                        >
                          <Dropdown.Item href="#/action-1">
                            Change title
                          </Dropdown.Item>{" "}
                          <Dropdown.Item href="#/action-2">
                            Change background colour
                          </Dropdown.Item>{" "}
                          <Dropdown.Item href="#/action-3">
                            Change text colour
                          </Dropdown.Item>{" "}
                        </DropdownButton>
                      </td>
                      <td>
                        <DropdownButton
                          className={"d-grid"}
                          style={{}}
                          title="All Distance"
                        >
                          <Dropdown.Item href="#/action-1">
                            Change title
                          </Dropdown.Item>{" "}
                          <Dropdown.Item href="#/action-2">
                            Change background colour
                          </Dropdown.Item>{" "}
                          <Dropdown.Item href="#/action-3">
                            Change text colour
                          </Dropdown.Item>{" "}
                        </DropdownButton>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <DropdownButton
                          className={"d-grid"}
                          style={{}}
                          title="Company"
                        >
                          <Dropdown.Item href="#/action-1">
                            Company
                          </Dropdown.Item>{" "}
                          <Dropdown.Item href="#/action-2">
                            Change background colour
                          </Dropdown.Item>{" "}
                          <Dropdown.Item href="#/action-3">
                            Change text colour
                          </Dropdown.Item>{" "}
                        </DropdownButton>
                      </td>
                      <td>
                        <DropdownButton
                          className={"d-grid"}
                          style={{}}
                          title="All branches"
                        >
                          <Dropdown.Item href="#/action-1">
                            All branches
                          </Dropdown.Item>{" "}
                          <Dropdown.Item href="#/action-2">
                            Change background colour
                          </Dropdown.Item>{" "}
                          <Dropdown.Item href="#/action-3">
                            Change text colour
                          </Dropdown.Item>{" "}
                        </DropdownButton>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <DropdownButton
                          className={"d-grid"}
                          style={{}}
                          title="All shifts"
                        >
                          <Dropdown.Item href="#/action-1">
                            All shifts
                          </Dropdown.Item>{" "}
                          <Dropdown.Item href="#/action-2">
                            Change background colour
                          </Dropdown.Item>{" "}
                          <Dropdown.Item href="#/action-3">
                            Change text colour
                          </Dropdown.Item>{" "}
                        </DropdownButton>
                      </td>
                      <td>
                        <DropdownButton
                          className={"d-grid"}
                          style={{}}
                          title="By Location"
                        >
                          <Dropdown.Item href="#/action-1">
                            By Location
                          </Dropdown.Item>{" "}
                          <Dropdown.Item href="#/action-2">
                            Change background colour
                          </Dropdown.Item>{" "}
                          <Dropdown.Item href="#/action-3">
                            Change text colour
                          </Dropdown.Item>{" "}
                        </DropdownButton>
                      </td>
                    </tr>
                  </table>
                  <br />
                  <div>
                    <Button variant="success">Apply</Button>{" "}
                  </div>
                </>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
        <>
          <br />
        </>

        <>
          <div className="form-group">
            <input
              className="form-control"
              value={formatSelectedDate()}
              type="Date"
              onChange={(e) => handleSelectedDate(new Date(e.target.value))}
            />
          </div>
        </>

        <>
          <br />
        </>

        <div>
          <Col className="row">
            {data !== undefined ? (
              data.map((d) => (
                <>
                  {slot(d)} <br />
                </>
              ))
            ) : (
              <></>
            )}
          </Col>
        </div>
      </>
    );
  };

  function onSelectedDateChanged(value: Date) {
    setSelectedDate(value);

    const dtAsString =
      value.getFullYear() +
      "-" +
      zeroPad(value.getMonth() + 1, 2) +
      "-" +
      value.getDate() +
      "T00:00:00.000Z";

    const dt = new Date(dtAsString);
    LoadData(dt);
  }

  const shifts = (): JSX.Element => {
    return (
      <>
        <h2>Available Shifts</h2>
        <hr />
        <div>
          <div>{bookings()}</div>
        </div>
        <br />
        <br />
      </>
    );
  };

  return (
    <div>
      <div>{!loading && !error ? shifts() : <></>}</div>
      <div>{loading ? loadingData() : <></>}</div>
      <div>{error ? errorView() : <></>}</div>
    </div>
  );
};
