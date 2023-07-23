/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import { Alert, Button, Card, Dropdown, Form, Modal } from "react-bootstrap";
import { IMember } from "../../../../types/IMember";
import ApplicationContext from "../../../../context/ApplicationContext";
//import { getfamilyinformation } from "../../../../services/Service";
//import { IFamilyInformation } from "../../../../types/IFamilyInformation";
import { IFamily } from "../../../../types/IFamily";
import loadingImage from "../../../../images/loading.gif";
import { IRecurrence } from "../../../../types/IRecurrence";
import { ISession } from "../../../../types/ISession";
import { newSession } from "../../../../services/Service";

export const Sessions: React.FC = (): JSX.Element => {
  const context = useContext(ApplicationContext);

  const defaultFamily: IFamily = {
    familyId: 0,
    guid: "",
    lastUpdateDateTime: new Date(),
    systemOrganisationId: 0,
    name: "",
    houseNumber: "",
    addressLine: "",
    postcode: "",
    mobile: "",
    emailAddress: "",
    username: "",
    reference: "",
    approved: false,
    ignore: false,
  };

  const [family, setFamily] = React.useState(defaultFamily);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [showModalNewSession, setShowModalNewSession] = React.useState(false);

  const [sessionName, setSessionName] = React.useState("");
  const [sessionDate, setSessionDate] = React.useState("");
  const [sessionStartTime, setSessionStartTime] = React.useState("");
  const [sessionEndTime, setSessionEndTime] = React.useState("");
  const [sessionNotes, setSessionNotes] = React.useState("");
  const [sessionRate, setSessionRate] = React.useState(0);

  const [recurrenceRuleEndDate, setRecurrenceRuleEndDate] = React.useState("");
  const [recurrenceRuleWeek, setRecurrenceRuleWeek] = React.useState(1);
  const [recurrenceRuleDays, setRecurrenceRuleDays] = React.useState([1]);
  const [recurrenceInclude, setRecurrenceInclude] = React.useState(false);
  const [showSessionNotification, setShowSessionNotification] =
    React.useState(false);

  const user = context.AuthenticatedUser.getUser();

  async function LoadData() {
    // setLoading(true);
    // const response = await getfamilyinformation(
    //   user.sessionGuid,
    //   user.familyGuid
    // );

    // if (!response) {
    //   setError(true);
    //   setLoading(false);
    //   return;
    // }

    // context.FamilyData.setFamily(response);
    setLoading(false);
  }

  useEffect(() => {
    //viewUpdate();
  }, [loading]);
  useEffect(() => {
    LoadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function showModelNewSessionView() {
    setShowModalNewSession(true);
  }

  function hideModelNewSessionView() {
    setShowModalNewSession(false);
  }

  function splitTime(time: string) {
    return time.split(":");
  }

  function createSession() {
    const sst = splitTime(sessionStartTime);
    const est = splitTime(sessionEndTime);

    const newStartDateTime = new Date(
      new Date("01-01-1970 " + sst[0] + ":" + sst[1] + ":00 GMT")
    );
    const newEndDateTime = new Date(
      new Date("01-01-1970 " + est[0] + ":" + est[1] + ":00 GMT")
    );

    const recurrence: IRecurrence = {
      days: recurrenceRuleDays,
      recurEveryWeek: recurrenceRuleWeek,
      endDate: new Date(recurrenceRuleEndDate),
    };

    const sessionToCreate: ISession = {
      name: sessionName,
      startDate: new Date(sessionDate),
      startTime: newStartDateTime,
      endTime: newEndDateTime,
      rate: sessionRate,
      notes: sessionNotes,
      includeRecurrence: recurrenceInclude,
      recurrence: recurrence,
      status: 0,
    };

    const created = newSession(sessionToCreate);

    if (!created) {
      setError(true);
      return;
    }

    setShowModalNewSession(false);
    setShowSessionNotification(true);
  }

  function handleIncludeReoccurrence() {
    if (recurrenceInclude) {
      setRecurrenceInclude(false);
      return;
    }

    setRecurrenceInclude(true);
  }

  function addDay(day: number) {
    let days = recurrenceRuleDays;
    days.push(day);
    setRecurrenceRuleDays(days);
  }

  function hideSessionNotification() {
    setShowSessionNotification(false);
  }
  const modalSessionNotification = (): JSX.Element => {
    return (
      <Modal show={showSessionNotification} onHide={hideSessionNotification}>
        <Modal.Header closeButton>
          <Modal.Title>Session</Modal.Title>
        </Modal.Header>
        <Modal.Body>Session has been created!</Modal.Body>
        <Modal.Footer className="modal-footer">
          <div>
            <> </>
            <Button
              variant="success"
              className="modal-padding"
              onClick={hideSessionNotification}
            >
              Ok
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    );
  };

  const modalNewSession = (): JSX.Element => {
    return (
      <Modal show={showModalNewSession} onHide={hideModelNewSessionView}>
        <Modal.Header closeButton>
          <Modal.Title>New Session</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="input-group input-group-lg">
              <Form.Label className="input-group input-group-lg">
                Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                required={true}
                value={sessionName}
                onChange={(e) => setSessionName(e.target.value)}
                //isInvalid={!sessionName}
                autoFocus={true}
              />
            </Form.Group>
            <Form.Group className="input-group input-group-lg">
              <Form.Label className="input-group input-group-lg">
                Date
              </Form.Label>
              <Form.Control
                type="Date"
                required={true}
                value={sessionDate}
                onChange={(e) => setSessionDate(e.target.value)}
                //isInvalid={!sessionDate}
                autoFocus={true}
              />
            </Form.Group>
            <Form.Group className="input-group input-group-lg">
              <Form.Label className="input-group input-group-lg">
                Start time
              </Form.Label>
              <Form.Control
                type="Time"
                required={true}
                value={sessionStartTime}
                onChange={(e) => setSessionStartTime(e.target.value)}
                //isInvalid={!sessionDate}
                autoFocus={true}
              />
            </Form.Group>
            <Form.Group className="input-group input-group-lg">
              <Form.Label className="input-group input-group-lg">
                End time
              </Form.Label>
              <Form.Control
                type="Time"
                required={true}
                value={sessionEndTime}
                onChange={(e) => setSessionEndTime(e.target.value)}
                //isInvalid={!sessionDate}
                autoFocus={true}
              />
            </Form.Group>
            <Form.Group className="input-group input-group-lg">
              <Form.Label className="input-group input-group-lg">
                Notes
              </Form.Label>
              <Form.Control
                type="text"
                required={true}
                value={sessionNotes}
                onChange={(e) => setSessionNotes(e.target.value)}
                //isInvalid={!sessionDate}
                autoFocus={true}
              />
            </Form.Group>
            <Form.Group className="input-group input-group-lg">
              <Form.Label className="input-group input-group-lg">
                Rate
              </Form.Label>
              <Form.Control
                type="number"
                required={true}
                value={sessionRate}
                onChange={(e) => setSessionRate(parseInt(e.target.value))}
                //isInvalid={!sessionDate}
                autoFocus={true}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label className="input-group input-group-lg">
                Include recurrence
              </Form.Label>
              <Form.Label className="input-group input-group-lg">On</Form.Label>
              <Form.Check
                type="checkbox"
                checked={recurrenceInclude}
                onClick={handleIncludeReoccurrence}
                label="Include recurrence"
              />
              <br></br>
              <Form.Label className="input-group input-group-lg">
                Recurrence Rule
              </Form.Label>
              <Form.Label className="input-group input-group-lg">On</Form.Label>
              <Form.Check
                type="checkbox"
                onClick={() => addDay(1)}
                label="Monday"
              />
              <Form.Check
                type="checkbox"
                onClick={() => addDay(2)}
                label="Tuesday"
              />
              <Form.Check
                type="checkbox"
                onClick={() => addDay(3)}
                label="Wednesday"
              />
              <Form.Check
                type="checkbox"
                onClick={() => addDay(4)}
                label="Thursday"
              />
              <Form.Check
                type="checkbox"
                onClick={() => addDay(5)}
                label="Friday"
              />
              <Form.Check
                type="checkbox"
                onClick={() => addDay(6)}
                label="Saturday"
              />
              <Form.Check
                type="checkbox"
                onClick={() => addDay(7)}
                label="Sunday"
              />
              <Form.Label className="input-group input-group-lg">
                Every
              </Form.Label>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {recurrenceRuleWeek} week(s)
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={() => setRecurrenceRuleWeek(1)}
                  >
                    1 week
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    onClick={() => setRecurrenceRuleWeek(2)}
                  >
                    2 weeks
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    onClick={() => setRecurrenceRuleWeek(3)}
                  >
                    3 weeks
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-4"
                    onClick={() => setRecurrenceRuleWeek(4)}
                  >
                    4 weeks
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
            <Form.Label className="input-group input-group-lg">
              Until
            </Form.Label>
            <Form.Control
              type="Date"
              required={true}
              value={recurrenceRuleEndDate}
              onChange={(e) => setRecurrenceRuleEndDate(e.target.value)}
              //isInvalid={!sessionDate}
              autoFocus={true}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          {/* <Button
            className="mr-auto"
            variant="danger"
            //onClick={(e) => removeItem(selectedReceiptItemId)}
          >
            Remove
          </Button> */}

          <div>
            <Button variant="secondary" onClick={hideModelNewSessionView}>
              Cancel
            </Button>
            <> </>
            <Button
              variant="success"
              className="modal-padding"
              onClick={createSession}
            >
              Create Session
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    );
  };

  // function awaitingApproval() {
  //   return (
  //     <Alert variant="danger">
  //       <Alert.Heading>Account is awaiting approval</Alert.Heading>
  //       <p>
  //         Salaams, we are doing our very best to approve all account. please
  //         bear with us
  //       </p>
  //       <hr />
  //       <p className="mb-0">just remember we are all working as a volunteer</p>
  //     </Alert>
  //   );
  // }

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

  function sessions() {
    return (
      <>Session view page</>
      // <Card>
      //   <Card.Header>
      //     Date: 22.07.2023 <br /> Time: 9.00 - 12.00{" "}
      //   </Card.Header>
      //   <Card.Body>
      //     <Card.Title>{family.name}</Card.Title>
      //     <Card.Text>Booking Views</Card.Text>
      //     <div className="form-group row">
      //       <label className="col-sm-2 col-form-label">Name</label>
      //       <div className="col-sm-10 col-form-label">
      //         <label>{family.name}</label>
      //       </div>
      //     </div>
      //     <div className="form-group row">
      //       <label className="col-sm-2 col-form-label">House number</label>
      //       <div className="col-sm-10 col-form-label">
      //         <label>{family.houseNumber}</label>
      //       </div>
      //     </div>
      //     <div className="form-group row">
      //       <label className="col-sm-2 col-form-label">Address</label>
      //       <div className="col-sm-10 col-form-label">
      //         <label>{family.addressLine}</label>
      //       </div>
      //     </div>
      //     <div className="form-group row">
      //       <label className="col-sm-2 col-form-label">Postcode</label>
      //       <div className="col-sm-10 col-form-label">
      //         <label>{family.postcode}</label>
      //       </div>
      //     </div>
      //     <div className="form-group row">
      //       <label className="col-sm-2 col-form-label">Mobile</label>
      //       <div className="col-sm-10 col-form-label">
      //         <label>{family.username}</label>
      //       </div>
      //     </div>
      //     <div className="form-group row">
      //       <label className="col-sm-2 col-form-label">Email</label>
      //       <div className="col-sm-10 col-form-label">
      //         <label>{family.emailAddress}</label>
      //       </div>
      //     </div>
      //   </Card.Body>
      // </Card>
    );
  }

  const dashboard = (): JSX.Element => {
    return (
      <div className="row">
        <div className="col-md-8 mb-5">
          <h2>Sessions</h2>
          <hr />
          <div>
            <div>{sessions()}</div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <h2>Missing session</h2>
          <hr />
          <Button variant="primary" onClick={() => showModelNewSessionView()}>
            New
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>{!loading && !error ? dashboard() : <></>}</div>
      <div>{loading ? loadingData() : <></>}</div>
      <div>{error ? errorView() : <></>}</div>
      <div>{showModalNewSession ? modalNewSession() : <></>}</div>
      <div>{showSessionNotification ? modalSessionNotification() : <></>}</div>
    </div>
  );
};
