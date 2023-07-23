/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { authenticate } from "../../services/Authenticate";
import ApplicationContext from "../../context/ApplicationContext";

import "./styles/bootstrap.css";
import "./styles/utility.css";
import "./styles/typography.css";
import { Button } from "react-bootstrap";

interface IProps {
  successful: () => void;
  register: () => void;
  forgotPassword: () => void;
}

export const Login: React.FC<IProps> = (props: IProps): JSX.Element => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showError, setShowError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("Username/Password incorrect");

  const context = useContext(ApplicationContext);

  async function handleLogin(e: any) {
    e.preventDefault();
    props.successful();

    // var auth = await authenticate(username, password);

    // if (!auth) {
    //   setErrorMsg("Cannot connect to server!");
    //   setShowError(true);
    //   return;
    // }

    // if (auth.awaitingApproval) {
    //   setErrorMsg(auth.information);
    //   setShowError(true);
    //   return;
    // }

    // if (auth.success) {
    //   context.AuthenticatedUser.setUser(auth);
    //   props.successful();
    //   return;
    // }
    // setShowError(true);
  }

  function handleRegister() {
    props.register();
  }

  function handleForgotPassword() {
    props.forgotPassword();
  }

  function onEnterHit(e: any) {
    if (e.key === "Enter") {
      handleLogin(e);
    }
  }

  const login = (): JSX.Element => {
    return (
      <form onKeyUp={onEnterHit}>
        <div className="d-flex align-items-center justify-content-center bg-br-primary ht-100v">
          <div className="login-wrapper wd-300 wd-xs-350 pd-25 pd-xs-40 bg-white rounded shadow-base">
            <div className="signin-logo tx-center tx-28 tx-bold tx-inverse">
              Nursing Home
            </div>
            <div className="tx-center mg-b-60">Portal Login</div>
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
                id="inputMobileNumber"
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                id="inputPassword"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant="link"
                className="tx-info tx-12 d-block mg-t-10"
                onClick={handleForgotPassword}
              >
                Forgot password?
              </Button>
            </div>
            <Button
              variant="primary"
              className="btn btn-primary btn-block"
              onClick={handleLogin}
            >
              Login
            </Button>
            <div className="mg-t-60 tx-center">
              Not yet a member?
              <Button
                variant="link"
                style={{ paddingBottom: 11, paddingLeft: 5 }}
                onClick={handleRegister}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  };

  return <div>{login()}</div>;
};
