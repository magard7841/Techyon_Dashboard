import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from './components/Dashboard/Dashboard';


const App = () => {
  return (
    <Router>
      <div className={styles.app}>
        <Sidebar />
        <div className={styles.mainContent}>
          <Navbar />
          <div className={styles.pageContent}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;