import React, { useState, useEffect } from "react";

export const useLocation = () => {
  const [location, setLocation] = useState(null);

  

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.log("Error getting location: ", error);
        },
      );
    } else {
      console.log("Geolocation not supported.");
    }
  },[]);


  return location;
};
