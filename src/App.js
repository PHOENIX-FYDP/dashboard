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
import Header from "./components/Header";
import Home from "./components/Home";
import ColumnChartwithIndexlabel from "../src/views/overview/Column Chart with Index label";
import DoughnutChart from "../src/views/pie & funnel charts/Doughnut Chart";
import BarChart from "../src/views/column charts/Bar Chart";
import MultiSeriesAreaChart from "../src/views/area charts/Multi Series Area Chart";
import PieChartWithCustomization from "../src/views/pie & funnel charts/Pie Chart with Customization";

function App() {
  return (
    <div className="App">
      <BrowserRouter>



        <Routes>
          {/* <Route path="/" element={<ColumnChartwithIndexlabel />} exact /> */}
          {/* <Route path="/" element={<DoughnutChart />} exact /> */}
          {/* <Route path="/" element={<BarChart />} exact /> */}
          {/* <Route path="/" element={<MultiSeriesAreaChart />} exact /> */}
          {/* <Route path="/" element={<PieChartWithCustomization />} exact /> */}
          <Route path="/" element={<Home />} />




          <Route path="/LdapScreen" element={<LDAPScreens />} exact /> //have some work
          <Route path="/licensing" element={<LicensingScreen />} />
          <Route path="/backup" element={<BackupScreen />} />
          <Route path="/interfaces" element={<InterfacesScreen />} />
          <Route path="/cluster" element={<ClusterScreen />} />
          <Route path="/services" element={<ServicesScreen />} />
          {/* <Route path="/" element={<SyslogScreen />} exact /> */}
          {/* <Route path="/" element={<SNMPScreen />} exact /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
