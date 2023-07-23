import React from "react";
import { IRegisterProps } from "./index";
import { Button, Form, Modal } from "react-bootstrap";
//import { newMember } from "../../services/Service";
import { IMember } from "../../types/IMember";

export const Register: React.FC<IRegisterProps> = (
  props: IRegisterProps
): JSX.Element => {
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [houseNumber, setHouseNumber] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [postcode, setPostcode] = React.useState("");

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordTwo, setPasswordTwo] = React.useState("");

  const [confirmMessage, setConfirmMessage] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("Register failed");

  async function registerMember() {
    const member: IMember = {
      Name: firstName + " " + lastName,
      HouseNumber: houseNumber,
      AddressLine: address,
      Postcode: postcode,
      Mobile: mobileNumber,
      EmailAddress: email,
      Password: password,
    };

    // var registered = await newMember(member);

    // if (!registered) {
    //   setErrorMsg("Cannot connect to server!");
    //   setShowError(true);
    //   return;
    // }

    // if (registered.success) {
    //   setConfirmMessage(true);
    //   return;
    // }
  }

  function handleRegister(e: any) {
    e.preventDefault();
    registerMember();
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
            A member of PBS will contact you once your account has been
            approved!
            <br />
            something like that
          </Modal.Body>
          <Modal.Footer className="modal-footer justify-content-between">
            <div>
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

  const register = (): JSX.Element => {
    return (
      <form>
        <div className="d-flex align-items-center justify-content-center bg-br-primary ht-100v">
          <div className="login-wrapper wd-300 wd-xs-350 pd-25 pd-xs-40 bg-white rounded shadow-base">
            <div className="signin-logo tx-center tx-28 tx-bold tx-inverse">
              PBS
            </div>
            <div className="tx-center mg-b-60">Create account</div>
            <div className="form-group">
              {showError ? (
                <div className="alert alert-danger" role="alert">
                  {errorMsg}
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="form-group">
              <input
                className="form-control"
                id="inputNumber"
                type="text"
                placeholder="Mobile number"
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>

            <div className="row mb-3">
              <div className="form-floating mb-3"></div>
              <div className="col-md-6">
                <div className="form-floating mb-3 mb-md-0">
                  <input
                    className="form-control"
                    id="inputFirstName"
                    type="text"
                    placeholder="First name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    className="form-control"
                    id="inputLastName"
                    type="text"
                    placeholder="Last name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <input
                className="form-control"
                id="inputHouseNumber"
                type="text"
                placeholder="House number"
                onChange={(e) => setHouseNumber(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                className="form-control"
                id="inputAddress"
                type="text"
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                className="form-control"
                id="inputPostcode"
                type="text"
                placeholder="Postcode"
                onChange={(e) => setPostcode(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                className="form-control"
                id="inputEmail"
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                className="form-control"
                id="inputPassword"
                type="password"
                placeholder="Create a password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                className="form-control"
                id="inputPasswordConfirm"
                type="password"
                placeholder="Confirm password"
                onChange={(e) => setPasswordTwo(e.target.value)}
              />
            </div>

            <Button
              variant="primary"
              className="btn btn-primary btn-block"
              onClick={handleRegister}
            >
              Create account
            </Button>
            <div className="mg-t-60 tx-center">
              <Button
                variant="link"
                style={{ paddingBottom: 11, paddingLeft: 5 }}
                onClick={props.cancel}
              >
                Have an account? Go to login
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
      <div>{register()}</div>
    </div>
  );
};
