import React, { createContext, useState, useEffect } from "react";


export const TripContext = createContext();

export const TripProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const [trips, setTrips] = useState([]);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  // Simulating an authentication check
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/trips`, {
          method: "GET",
          credentials: "include", // This is crucial to send cookies
        });
        const data = await response.json();
        if (data.success) {
          setTrips(data.data);
        }
      } catch (error) {
        console.error("Error fetching trip data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, [backendUrl]);

  return (
    <TripContext.Provider
      value={{
        trips,
        loading,
      }}
    >
      {children}
    </TripContext.Provider>
  );
};
