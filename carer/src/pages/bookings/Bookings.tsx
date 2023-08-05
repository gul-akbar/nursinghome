/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { Alert, Card } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ApplicationContext from "../../context/ApplicationContext";
import { ISessionData } from "../../types/ISessionData";
import { getAppointmentSessions } from "../../services/Service";
import loadingImage from "../../images/loading.gif";

export const Bookings: React.FC = (): JSX.Element => {
  const context = useContext(ApplicationContext);

  type ValuePiece = Date | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];

  const defaultSessions: ISessionData[] = [];

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const [data, setData] = React.useState(defaultSessions);
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());

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
        <Card>
          <Card.Header>
            <div className="container">
              <div className="row">
                <div className="col-sm">{session.name}</div>
                <div className="col-sm"></div>
                <div className="col-sm" style={{ textAlign: "right" }}>
                  -
                </div>
              </div>
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              <h3>
                {session.status === 0 ? (
                  <div style={{ color: "green" }}>Booking : Confirmed</div>
                ) : (
                  <></>
                )}
                {session.status === 3 ? (
                  <div style={{ color: "red" }}>Booking :</div>
                ) : (
                  <></>
                )}
              </h3>
            </Card.Text>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Carer</label>
              <div className="col-sm-10 col-form-label">
                <label>Jasmin Eva</label>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Contact</label>
              <div className="col-sm-10 col-form-label">
                <label>John Smith</label>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Address</label>
              <div className="col-sm-10 col-form-label">
                <label>Leeds road, postcode</label>
              </div>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  };

  const bookings = (): JSX.Element => {
    return (
      <>
        <br />
        <div>
          {data !== undefined ? (
            data.map((d) => (
              <>
                {slot(d)} <br />
              </>
            ))
          ) : (
            <></>
          )}
        </div>
      </>
    );
  };

  function zeroPad(num: number, places: number) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
  }

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

  const dashboard = (): JSX.Element => {
    return (
      <div className="row">
        <div className="col-md-8 mb-5">
          <h2>Bookings</h2>
          <hr />
          <div>
            <div>
              <h5>Today</h5>
            </div>
            <div>{bookings()}</div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <Calendar
            onChange={(e) => onSelectedDateChanged(e as Date)}
            value={selectedDate}
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>{!loading && !error ? dashboard() : <></>}</div>
      <div>{loading ? loadingData() : <></>}</div>
      <div>{error ? errorView() : <></>}</div>
    </div>
  );
};
