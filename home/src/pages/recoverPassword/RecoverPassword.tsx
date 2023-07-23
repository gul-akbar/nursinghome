import React from "react";
import { IRecoverPasswordProps } from "./index";
import { Button, Modal } from "react-bootstrap";

export const RecoverPassword: React.FC<IRecoverPasswordProps> = (
  props: IRecoverPasswordProps
): JSX.Element => {
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [confirmMessage, setConfirmMessage] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("mobile number required");

  function handleRequestPassword(e: any) {
    if (mobileNumber === "") {
      setShowError(true);
      return;
    }

    console.log("send this number to api! at the moment there is not one");
    console.log(mobileNumber);

    setShowError(false);
    setConfirmMessage(true);
  }
  function handleClose(e: any) {
    props.success();
  }

  const modalConfirm = (): JSX.Element => {
    return (
      <div>
        <Modal show={confirmMessage}>
          <Modal.Header closeButton>
            <Modal.Title>PBS confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            A member of PBS will contact you. Please be patient
            <br />
            something like that
          </Modal.Body>
          <Modal.Footer className="modal-footer justify-content-between">
            <div className="rightButtons">
              <Button
                variant="success"
                className="modal-padding"
                onClick={handleClose}
              >
                Ok I will wait
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  };

  const recovery1 = (): JSX.Element => {
    return (
      <form>
        <div className="d-flex align-items-center justify-content-center bg-br-primary ht-100v">
          <div className="login-wrapper wd-300 wd-xs-350 pd-25 pd-xs-40 bg-white rounded shadow-base">
            <div className="signin-logo tx-center tx-28 tx-bold tx-inverse">
              PBS
            </div>
            <div className="tx-center mg-b-60">Pashto Burial Society</div>
            <div className="form-group">
              {showError ? (
                <div className="alert alert-danger" role="alert">
                  {errorMsg}
                </div>
              ) : (
                <></>
              )}
            </div>

            <div>
              Enter your mobile number and we will send you details to reset
              your password.
            </div>

            <div className="form-group">
              <input
                className="form-control"
                id="inputMobileNumber"
                type="text"
                placeholder="Mobile number"
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <Button
                variant="link"
                className="tx-info tx-12 d-block mg-t-10"
                onClick={props.success}
              >
                Return to login
              </Button>
            </div>
            <Button
              variant="primary"
              className="btn btn-primary btn-block"
              onClick={handleRequestPassword}
            >
              Reset Password
            </Button>
            <div className="mg-t-60 tx-center">
              Not yet a member?
              <Button
                variant="link"
                style={{ paddingBottom: 11, paddingLeft: 5 }}
                onClick={props.register}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  };

  return (
    <div>
      <div>{modalConfirm()}</div>
      <div>{recovery1()}</div>
    </div>
  );
};
