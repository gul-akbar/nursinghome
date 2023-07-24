/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import { Alert } from "react-bootstrap";
import ApplicationContext from "../../context/ApplicationContext";

export const Dashboard: React.FC = (): JSX.Element => {
  const context = useContext(ApplicationContext);

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

  function viewUpdate() {}
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
        {/* <img src={loadingImage} alt="Loading" /> */}
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

  function registeredAccount() {
    return (
      <>I am dashboard welcome!</>
      // <Card>
      //   <Card.Header>
      //     Date: 22.07.2023 <br /> Time: 9.00 - 12.00{" "}
      //   </Card.Header>
      //   <Card.Body>
      //     <Card.Title>{family.name}</Card.Title>
      //     <Card.Text>
      //       This account has been approved. Communication will be sent to this
      //       number in the future
      //     </Card.Text>
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
          <h2>Dashboard</h2>
          <hr />
          <div>
            <div>{registeredAccount()}</div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <h2>Events </h2>
          <hr />
          Booking Akbar at 9.00 to 12.00 - approved on 22/21/2222
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
