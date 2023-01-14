import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import LicensingScreen from "./screens/LicensingScreen";
import BackupScreen from "./screens/BackupScreen";
import InterfacesScreen from "./screens/InterfacesScreen";
import ClusterScreen from "./screens/ClusterScreen";
import ServicesScreen from "./screens/ServicesScreen";
import SyslogScreen from "./screens/SyslogScreen";
import SNMPScreen from "./screens/SNMPScreen";
import LDAPScreens from "./screens/LDAPScreens";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<LDAPScreens />} exact /> */}
          {/* <Route path="/" element={<LicensingScreen />} exact /> */}
          {/* <Route path="/" element={<BackupScreen />} exact /> */}
          {/* <Route path="/" element={<InterfacesScreen />} exact /> */}
          {/* <Route path="/" element={<ClusterScreen />} exact /> */}
          {/* <Route path="/" element={<ServicesScreen />} exact /> */}
          {/* <Route path="/" element={<SyslogScreen />} exact /> */}
          {/* <Route path="/" element={<SNMPScreen />} exact /> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
