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
  Row,
} from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ApplicationContext from "../../context/ApplicationContext";
import { ISessionData } from "../../types/ISessionData";
import { getAppointmentSessions } from "../../services/Service";
import loadingImage from "../../images/loading.gif";
import "bootstrap/dist/css/bootstrap.min.css";

export const Shifts: React.FC = (): JSX.Element => {
  const context = useContext(ApplicationContext);

  type ValuePiece = Date | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];

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
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
              <table style={{ width: "100%" }}>
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

              {/* <div className="row justify-content-md-center">
                <div className="col col-sm-1">Start</div>
                <div className="col-md-auto">09:00</div>
              </div>

              <div className="row">
                <div className="col">Start</div>
                <div className="col">"session.start"</div>
              </div>

              <div className="row">
                <div className="col">End</div>
                <div className="col">{"session.endDateTime.getDate()"}</div>
              </div>

              <div className="row">
                <div className="col">Location</div>
                <div className="col">{session.name}</div>
              </div>
              <div className="row">
                <div className="col">Rate</div>
                <div className="col">{session.rate}</div>
              </div> */}

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
                  {[
                    "Primary",
                    "Secondary",
                    "Success",
                    "Info",
                    "Warning",
                    "Danger",
                  ].map((variant) => (
                    <DropdownButton
                      id={`dropdown-variants-${variant}`}
                      variant={variant.toLowerCase()}
                      title={variant}
                    >
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3" active>
                        Active Item
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                  ))}
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
        <h2>Bookings</h2>
        <hr />
        <div>
          <div>
            <h5>Today</h5>
          </div>
          <div>{bookings()}</div>
        </div>
        <br />
        <br />
      </>
      // <div className="row">
      //   <div className="col-md-8 mb-5">
      //     <h2>Bookings</h2>
      //     <hr />
      //     <div>
      //       <div>
      //         <h5>Today</h5>
      //       </div>
      //       <div>{bookings()}</div>
      //     </div>
      //   </div>
      //   <div className="col-md-4 mb-5">
      //     <Calendar
      //       onChange={(e) => onSelectedDateChanged(e as Date)}
      //       value={selectedDate}
      //     />
      //   </div>
      // </div>
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
