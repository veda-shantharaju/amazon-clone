import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AutoLocation = () => {
  const [location, setLocation] = useState("Fetching location...");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          const response = await axios.get(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );

          setLocation(response.data.city || "Location not available");
        },
        () => setLocation("Location access denied.")
      );
    } else {
      setLocation("Geolocation not supported.");
    }
  }, []);

  return <div className="location">Delivering to: <strong>{location}</strong></div>;
};

export default AutoLocation;
