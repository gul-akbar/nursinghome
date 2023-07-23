import React, { useContext, useEffect, useState } from "react";
import { IManagerProps } from "./IManagerProps";
import { Home } from "../home";
import "./Style.css";
import { Login } from "../login";
import { Register } from "../register";
import { RecoverPassword } from "../recoverPassword";
import ApplicationContext from "../../context/ApplicationContext";
import { ViewPage } from "../../types/ViewPage";

export const Manager: React.FC<IManagerProps> = (
  props: IManagerProps
): JSX.Element => {
  const context = useContext(ApplicationContext);
  const [loginView, setLoginView] = useState(true);
  const [regView, setRegView] = useState(false);
  const [homeView, setHomeView] = useState(false);
  const [recoverPasswordView, setRecoverPasswordView] = useState(false);

  const handleLoginSuccess = () => {
    clearViews();
    setHomeView(true);
    context.ViewPage.setView(ViewPage.home);
  };
  const handleRegister = () => {
    clearViews();
    setRegView(true);
  };
  const handleForgotPassword = () => {
    clearViews();
    setRecoverPasswordView(true);
  };
  const handleRegisterSuccess = () => {
    clearViews();
    setLoginView(true);
  };
  const handleRegisterCancel = () => {
    clearViews();
    setLoginView(true);
  };
  const showLogin = () => {
    clearViews();
    context.ViewPage.setView(ViewPage.Login);
    setLoginView(true);
  };
  const showRegister = () => {
    clearViews();
    setRegView(true);
  };

  function clearViews() {
    setLoginView(false);
    setRegView(false);
    setHomeView(false);
    setRecoverPasswordView(false);
  }

  useEffect(() => {
    const view = context.ViewPage.getView();

    if (view === ViewPage.home) {
      clearViews();
      setHomeView(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dashboard = (): JSX.Element => (
    <div>
      <div>
        {loginView ? (
          <Login
            successful={handleLoginSuccess}
            register={handleRegister}
            forgotPassword={handleForgotPassword}
          />
        ) : (
          <></>
        )}
      </div>
      <div>{homeView ? <Home logout={showLogin} /> : <></>}</div>
      <div>
        {regView ? (
          <Register
            success={handleRegisterSuccess}
            cancel={handleRegisterCancel}
          />
        ) : (
          <></>
        )}
      </div>
      <div>
        {recoverPasswordView ? (
          <RecoverPassword success={showLogin} register={showRegister} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );

  return <div>{dashboard()}</div>;
};
