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
  Modal,
  Navbar,
} from "react-bootstrap";
import "react-calendar/dist/Calendar.css";
import ApplicationContext from "../../context/ApplicationContext";
import { ISessionData } from "../../types/ISessionData";
import { getAppointmentSessions } from "../../services/Service";
import loadingImage from "../../images/loading.gif";
import "bootstrap/dist/css/bootstrap.min.css";
import { MobileView } from "react-device-detect";

export const Shifts: React.FC = (): JSX.Element => {
  const context = useContext(ApplicationContext);

  const defaultSessions: ISessionData[] = [];
  const defaultSlotId: number[] = [];

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const [showInfo, setShowInfo] = React.useState(false);
  const [infoId, setInfoId] = React.useState(0);

  const [data, setData] = React.useState(defaultSessions);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [showBookModal, setShowBookModal] = React.useState(false);
  const [slotIds, setSlotIds] = React.useState(defaultSlotId);

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

  function hideInfoModal() {
    setShowInfo(false);
  }
  function setShowInfoDialog(id: number) {
    setInfoId(id);
    setShowInfo(true);
  }

  function showShiftModal(id: number) {
    setShowBookModal(true);
  }
  function hideShiftModal() {
    setShowBookModal(false);
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

  function addSlotForBooking(id: number) {
    let idx = -1;

    for (var i = slotIds.length - 1; i >= 0; i--) {
      if (slotIds[i] === id) {
        idx = i;
      }
    }

    let ids = slotIds;

    if (idx > -1) {
      ids.splice(idx, 1);
    } else {
      ids.push(id);
    }

    setSlotIds(ids);
  }

  const slot = (session: ISessionData): JSX.Element => {
    return (
      <>
        <div className="col-sm-4">
          <Card>
            <Card.Header>
              <table style={{ width: "100%" }}>
                <tr>
                  <td style={{ width: "100%" }}>
                    Killinghall : nursing home id {session.nursingHomeId} :{" "}
                    {session.name}
                  </td>
                  <td>
                    <Form.Check
                      style={{
                        alignContent: "right",
                        paddingBottom: "20px",
                        paddingLeft: "10px",
                      }}
                      type="checkbox"
                      defaultChecked={slotIds.includes(
                        session.appointmentSessionId
                      )}
                      onClick={() =>
                        addSlotForBooking(session.appointmentSessionId)
                      }
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
                    {context.Formatter.formatDate(session.startDateTime)}
                  </td>
                </tr>
                <tr>
                  <td style={{ minWidth: "70px" }}>Start</td>
                  <td style={{ width: "100%" }}>
                    {context.Formatter.formatTime(session.startDateTime)}
                  </td>
                </tr>
                <tr>
                  <td style={{ minWidth: "50px" }}>End</td>
                  <td style={{ width: "100%" }}>
                    {context.Formatter.formatTime(session.endDateTime)}
                  </td>
                </tr>
                <tr>
                  <td style={{ minWidth: "50px" }}>Rate</td>
                  <td style={{ width: "100%" }}> £{session.rate}</td>
                </tr>
              </table>
              <hr />
              <div className="row">
                <div className="col">
                  <Button
                    variant="info"
                    onClick={() =>
                      setShowInfoDialog(session.appointmentSessionId)
                    }
                  >
                    Info
                  </Button>
                </div>
                <div className="col" style={{ textAlign: "right" }}>
                  <Button
                    variant="primary"
                    onClick={() => showShiftModal(session.appointmentSessionId)}
                  >
                    Book
                  </Button>
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
                          title={context.Formatter.formatMonthAndYear(
                            new Date()
                          )}
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

  function bookSelectedSessions() {
    return (
      <>
        <MobileView>
          <Navbar className="bg-body-tertiary" fixed="bottom">
            <Container>
              <Button variant="primary">Book all selected</Button>
            </Container>
          </Navbar>
        </MobileView>
      </>
    );
  }

  const showInfoModal = (): JSX.Element => {
    return (
      <>
        <Modal show={showInfo} onHide={hideInfoModal}>
          <Modal.Header closeButton>
            <Modal.Title>selected booking id : {infoId}</Modal.Title>
          </Modal.Header>
          <Modal.Body>body and infor</Modal.Body>
          <Modal.Footer className="modal-footer justify-content-between">
            <div className="mr-auto">
              {/* <Button
              variant="danger"
              onClick={(e) => removeItem(selectedItemId)}
            >
              Remove
            </Button> */}
            </div>
            <div>
              {/* <Button variant="secondary">Cancel</Button> */}
              <> </>
              <Button
                variant="success"
                className="modal-padding"
                onClick={hideInfoModal}
              >
                Close
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  const showBookShifts = (): JSX.Element => {
    return (
      <>
        <Modal show={showBookModal} onHide={hideShiftModal}>
          <Modal.Header closeButton>
            <Modal.Title>selected booking id : {infoId}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {slotIds.length > 0 ? (
              slotIds.map((d) => (
                <>
                  {d} <br />
                </>
              ))
            ) : (
              <></>
            )}
          </Modal.Body>
          <Modal.Footer className="modal-footer justify-content-between">
            <div className="mr-auto">
              {/* <Button
              variant="danger"
              onClick={(e) => removeItem(selectedItemId)}
            >
              Remove
            </Button> */}
            </div>
            <div>
              {/* <Button variant="secondary">Cancel</Button> */}
              <> </>
              <Button
                variant="success"
                className="modal-padding"
                onClick={hideShiftModal}
              >
                Book
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  return (
    <div>
      <div>{!loading && !error ? shifts() : <></>}</div>
      <div>{loading ? loadingData() : <></>}</div>
      <div>{error ? errorView() : <></>}</div>
      <div>{bookSelectedSessions()}</div>
      <div>{showInfo ? showInfoModal() : <></>}</div>
      <div>{showBookModal ? showBookShifts() : <></>}</div>
    </div>
  );
};
