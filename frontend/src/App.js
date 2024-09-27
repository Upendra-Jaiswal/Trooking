import HomeContainer from "./components/HomePage/HomeContainer";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignUp from "./components/HomePage/Authentication/SignUp";
import SignIn from "./components/HomePage/Authentication/SignIn";
import { AuthProvider, useAuth } from "./contexts/authContext";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "./components/NavBar/MyProfile";
import BookingbyId from "./components/Bookingbyid/BookingbyId";
import MyBookings from "./components/NavBar/MyBookings";
import Payment from "./components/Bookingbyid/Payment";
import TaxiBooking from "./components/HomePage/TaxiBooking";
import Navbar from "./components/NavBar/NavBar";
import BookingForm from "./components/Trips/BookingForm";
import TripList from "./components/Trips/TripList";
import UserBookings from "./components/NavBar/UserBokings";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Simulating an authentication check
    const checkAuth = async () => {
      // Fetch or check authentication status here
      // This is just a placeholder for demonstration
      const user = await fetch("http://localhost:3001/api/verifyauth", {
        method: "GET",
        credentials: "include",
      });

      if (user.ok) {
        setIsAuthenticated(true);
        setUserName("John Doe"); // Replace with actual user name from the response
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, [userName]);

  return (
    <AuthProvider>
      <Router>
        {/* <Navbar /> */}

        <Navbar isAuthenticated={isAuthenticated} userName={userName} />
        <Routes>
          {/* <PrivateRoute path="/profile" component={Profile} /> */}

          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<HomeContainer />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/my-profile" element={<MyProfile />} />

            <Route path="/bookingbyid" element={<BookingbyId />} />

            <Route path="/mybookings" element={<MyBookings />} />

            <Route path="/payment" element={<Payment />} />
            <Route path="/taxi-booking" element={<TaxiBooking />} />

            <Route path="/bookingform" element={<BookingForm />} />
            <Route path="/triplist" element={<TripList />} />
            <Route path="/getuserbookings" element={<UserBookings />} />
          </Route>

          {/* <Route
            path="/my-profile"
            element={
              <PrivateRoute>
                <MyProfile />
              </PrivateRoute>
            }
          /> */}
          {/* 
          <Route
            path="/my-profile"
            element={<PrivateRoute element={<MyProfile />} />}
          /> */}
          {/* <Route
            path="/bookingbyid"
            element={<PrivateRoute element={<BookingbyId />} />}
          />
          <Route
            path="/mybookings"
            element={<PrivateRoute element={<MyBookings />} />}
          />
          <Route
            path="/payment"
            element={<PrivateRoute element={<Payment />} />}
          /> */}

          {/* <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/bookingbyid" element={<BookingbyId />} />
          <Route path="/mybookings" element={<MyBookings />} />
          <Route path="/payment" element={<Payments />} /> */}

          {/* <Route
            path="/"
            element={<PrivateRoute element={<HomeContainer />} />}
          /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
