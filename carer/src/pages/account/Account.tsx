/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import { Alert, Card } from "react-bootstrap";
import loadingImage from "../../../../images/loading.gif";
import ApplicationContext from "../../context/ApplicationContext";

export const Account: React.FC = (): JSX.Element => {
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

  function registeredAccount() {
    return (
      <>
        <div></div>
      </>
    );
  }

  const account = (): JSX.Element => {
    return (
      <div className="row">
        <div className="col-md-8 mb-5">
          <h2>Account</h2>
          <hr />
          <div>
            <div>{registeredAccount()}</div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <h2>Confirmed </h2>
          <hr />
          approved on 22/21/2222
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>{!loading && !error ? account() : <></>}</div>
      <div>{loading ? loadingData() : <></>}</div>
      <div>{error ? errorView() : <></>}</div>
    </div>
  );
};
