import React from "react";
import "./pages/home";
import { Manager, IManagerProps } from "./pages/manager";
import ApplicationContext, { defaults } from "./context/ApplicationContext";

function App() {
  const dashboardProps: IManagerProps = {
    dateTime: new Date(),
  };

  return (
    <div>
      <ApplicationContext.Provider value={defaults}>
        <Manager {...dashboardProps} />
      </ApplicationContext.Provider>
    </div>
  );
}

export default App;
