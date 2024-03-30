import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./img/About";
import Main from "./main";
import Booking from "./img/Book";
import Footer from "./components/Footer";
import Contact from "./img/contact";
import Error from "./img/error";
import Header from "./components/Header";
import ProgressBar from "@badrap/bar-of-progress";
import { Offline, Online } from "react-detect-offline";
import Test from "./components/Tests";
import Login from "./img/Login";
import Register from "./img/Register";
import OpenRoute from "./components/core/Auth/OpenRoute";
// import PrivateRoute from "./components/core/Auth/PrivateRoute";
import ResetPassword from "./img/ResetPassword";
import VerifyEmail from "./img/VerifyEmail";

function App() {
  const progress = new ProgressBar();
  progress.start();
  setTimeout(() => {
    progress.finish();
  }, 300);
  setTimeout(() => {
    let location = window.location.pathname;
    let home = document.getElementById("home");
    let contact = document.getElementById("contact");
    let about = document.getElementById("about");
    if (location === "/about") {
      about.classList.remove("passive");

      home.classList.add("passive");
      contact.classList.add("passive");

      about.classList.add("active");
    } else if (location === "/contact") {
      contact.classList.remove("passive");

      home.classList.add("passive");
      about.classList.add("passive");

      contact.classList.add("active");
    } else if (location === "/book") {
      contact.classList.add("passive");
      about.classList.add("passive");
      home.classList.add("passive");
    } else {
      home.classList.remove("passive");
      about.classList.add("passive");
      contact.classList.add("passive");

      home.classList.add("active");
    }
  }, 1);
  const loadcontent = () => {
    progress.start();
    setTimeout(() => {
      progress.finish();
    }, 300);
    setTimeout(() => {
      let location = window.location.pathname;
      let home = document.getElementById("home");
      let contact = document.getElementById("contact");
      let about = document.getElementById("about");
      if (home && contact && about) {
        if (location === "/about") {
          about.classList.remove("passive");

          home.classList.add("passive");
          contact.classList.add("passive");

          about.classList.add("active");
        } else if (location === "/contact") {
          contact.classList.remove("passive");

          home.classList.add("passive");
          about.classList.add("passive");

          contact.classList.add("active");
        } else if (location === "/book") {
          contact.classList.add("passive");
          about.classList.add("passive");
          home.classList.add("passive");
        } else {
          home.classList.remove("passive");
          about.classList.add("passive");
          contact.classList.add("passive");

          home.classList.add("active");
        }
      }
    }, 1);
  };

  return (
    <>
      <Online>
        <div className="max-w-7xl  mx-auto">
          <BrowserRouter>
            <Header load={loadcontent} />
            <Routes>
              <Route exact path="/" element={<Main load={loadcontent} />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/book" element={<Booking />} />
              <Route exact path="/test" element={<Test />} />
              <Route
                path="/login"
                element={
                  <OpenRoute>
                    <Login />
                  </OpenRoute>
                }
              />
              <Route
                path="/forgot-password"
                element={
                  <OpenRoute>
                    <ResetPassword />
                  </OpenRoute>
                }
              />
              <Route
                path="/signup"
                element={
                  <OpenRoute>
                    <Register />
                  </OpenRoute>
                }
              />
              <Route
                path="/verify-email"
                element={
                  <OpenRoute>
                    <VerifyEmail />
                  </OpenRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
        <Footer />
      </Online>
      <Offline>
        <Error />
      </Offline>
    </>
  );
}

export default App;
