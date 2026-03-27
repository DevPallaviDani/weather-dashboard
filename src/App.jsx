import { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";


function App() {
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
  }, []);
  return (
    <>
     
        {location ? (
          <div>
            <Dashboard location={location} />
          </div>
        ) : (
          <p>Fetching location....</p>
        )}
     
    </>
  );
}

export default App;
