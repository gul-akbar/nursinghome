/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import { Alert, Card } from "react-bootstrap";
import { IMember } from "../../../../types/IMember";
import ApplicationContext from "../../../../context/ApplicationContext";
//import { getfamilyinformation } from "../../../../services/Service";
//import { IFamilyInformation } from "../../../../types/IFamilyInformation";
import { IFamily } from "../../../../types/IFamily";
import loadingImage from "../../../../images/loading.gif";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const Bookings: React.FC = (): JSX.Element => {
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

  function viewUpdate() {
    const d1 = context.FamilyData;

    if (d1 === undefined) {
      return;
    }

    const d2 = context.FamilyData.getFamily();

    if (d2 === undefined) {
      return;
    }

    const d3 = context.FamilyData.getFamily().familyComplete;

    if (d3 === undefined) {
      return;
    }

    const data = context.FamilyData.getFamily().familyComplete.family;

    if (data === undefined) {
      return;
    }

    setFamily(data);
  }
  useEffect(() => {
    viewUpdate();
  }, [loading]);

  useEffect(() => {
    LoadData();
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

  function bookings() {
    return (
      <>
        <Card>
          <Card.Header>
            <div className="container">
              <div className="row">
                <div className="col-sm">9.00 - 12.00</div>
                <div className="col-sm"></div>
                <div className="col-sm" style={{ textAlign: "right" }}>
                  22/07/2023
                </div>
              </div>
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Title>{family.name}</Card.Title>
            <Card.Text>
              <h3>
                <div style={{ color: "green" }}>Booking : Confirmed</div>
              </h3>
            </Card.Text>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Carer</label>
              <div className="col-sm-10 col-form-label">
                <label>Jasmin Eva</label>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Name</label>
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
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Contact</label>
              <div className="col-sm-10 col-form-label">
                <label>0113 113113</label>
              </div>
            </div>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Header>
            <div className="container">
              <div className="row">
                <div className="col-sm">12.00 - 3.00</div>
                <div className="col-sm"></div>
                <div className="col-sm" style={{ textAlign: "right" }}>
                  22/07/2023
                </div>
              </div>
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Title>{family.name}</Card.Title>
            <Card.Text>
              <h3>
                <div style={{ color: "red" }}>Booking : </div>
              </h3>
            </Card.Text>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Carer</label>
              <div className="col-sm-10 col-form-label">
                <label></label>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10 col-form-label">
                <label>Sara Jones</label>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Address</label>
              <div className="col-sm-10 col-form-label">
                <label>Bradford road, postcode</label>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Contact</label>
              <div className="col-sm-10 col-form-label">
                <label>01274 0127401274</label>
              </div>
            </div>
          </Card.Body>
        </Card>
      </>
    );
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
          <Calendar />
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
