import "./App.css";
import { NavigationBar } from "./NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./homePage";
import Aboutus from "./aboutus";
import Contact from "./contact";
import Adduser from "./addUser";
import Page404 from "./page404";
import ViewUser from "./viewUser";
import EditUser from "./editUser";

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route exact="true" path="/" element={<Homepage />}></Route>
          <Route exact="true" path="/aboutus" element={<Aboutus />}></Route>
          <Route exact="true" path="/contact" element={<Contact />}></Route>
          <Route exact="true" path="/addUser" element={<Adduser />}></Route>
          <Route
            exact="true"
            path="/viewUser/:userId"
            element={<ViewUser />}></Route>
          <Route
            exact="true"
            path="/editUser/:userId"
            element={<EditUser />}></Route>
          <Route exact="true" path="*" element={<Page404 />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
