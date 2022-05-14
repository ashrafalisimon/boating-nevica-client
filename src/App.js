import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddService from "./components/AddService/AddService";
import BoatsBooking from "./components/BoatsBooking/BoatsBooking";
import BoatServiceDetails from "./components/BoatSerivce/BoatServiceDetails";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/LoginRegister/Login";
import Register from "./components/LoginRegister/Register";
import NotFound from "./components/NotFound/NotFound";
import RequireAuth from "./components/RequirAuth/RequireAuth";

function App() {
  return (
    <>
      {/* ------------------
      header components 
      -------------------*/}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/boats" element={<BoatsBooking/>}></Route>
        <Route
          path="/boatService/:serviceId"
          element={
            <RequireAuth>
              <BoatServiceDetails />
             </RequireAuth>
          }
        ></Route>
        <Route
          path="/addService"
          element={
            <RequireAuth>
              <AddService/>
             </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      {/* ------------------
        footer components 
        -------------------*/}
      <Footer />
    </>
  );
}

export default App;
