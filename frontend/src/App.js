import HomeContainer from "./components/HomePage/HomeContainer";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import SignUp from "./components/HomePage/Authentication/SignUp";
import SignIn from "./components/HomePage/Authentication/SignIn";
import { AuthProvider } from "./context/AuthContext";
import { TripProvider } from "./context/TripContext";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "./components/NavBar/MyProfile";
import BookingbyId from "./components/Bookingbyid/BookingbyId";
import MyBookings from "./components/NavBar/MyBookings";
import Payment from "./components/Bookingbyid/Payment";
import TaxiBooking from "./components/MyProfile/TaxiBooking";
import Navbar from "./components/NavBar/NavBar";
import BookingForm from "./components/Trips/GetAllBookings";
import TripList from "./components/Trips/TripList";

import Bookings from "./components/NavBar/Bookings";
import AllBookings from "./components/Trips/AllBookings";
import CreateBooking from "./components/Trips/CreateBooking";
import FetchTrip from "./components/Trips/FetchTrip";
import GetAllBookings from "./components/Trips/GetAllBookings";
import GetUserBookings from "./components/Trips/GetUserBookings";
import Finalbooking from "./components/Bookingbyid/Finalbooking";



import {  createContext } from "react";
import PaymentSuccessPage from "./PaymentSuccessPage";
import PaymentFailed from "./PaymentFailed";

export const AuthContextApp = createContext();

function App() {


  return (
    <AuthProvider>
      <TripProvider>
        <Router>
          <Navbar className="mb-36" />

          {/* <Navbar isAuthenticated={isAuthenticated} userName={userName} /> */}
          <div style={{ marginTop: "6rem" }}>
            {" "}
            {/* Adjust based on your Navbar height */}
            <Routes>
              {/* <PrivateRoute path="/profile" component={Profile} /> */}

              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<HomeContainer />} />
              <Route path="/bookingbyid" element={<BookingbyId />} />
              {/* <Route path="/" element={<PrivateRoute />}> */}

              <Route element={<PrivateRoute />}>

              <Route path="/my-profile" element={<MyProfile />} />

              <Route path="/mybookings" element={<MyBookings />} />

              <Route path="/payment" element={<Payment />} />
              <Route path="/payment-success" element={<PaymentSuccessPage />} />
              <Route path="/payment-fail" element={<PaymentFailed />} />

              <Route path="/taxi-booking" element={<TaxiBooking />} />

              <Route path="/bookingform" element={<BookingForm />} />
              <Route path="/triplist" element={<TripList />} />
              {/* <Route path="/getuserbookings" element={<UserBookings />} /> */}
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/allbookings" element={<AllBookings />} />
              <Route path="/createbooking" element={<CreateBooking />} />
              <Route path="/fetchtrip" element={<FetchTrip />} />
              <Route path="/getallbookings" element={<GetAllBookings />} />
              <Route path="/getuserbookings" element={<GetUserBookings />} />
              <Route path="/finalbooking" element={<Finalbooking />} />
              </Route>
            </Routes>
          </div>
        </Router>
      </TripProvider>
    </AuthProvider>
  );
}

export default App;
