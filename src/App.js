import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import LicensingScreen from "./screens/LicensingScreen";
import BackupScreen from "./screens/BackupScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BackupScreen />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
