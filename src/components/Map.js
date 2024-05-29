import React, { useEffect, useRef } from "react";

const Map = ({ center }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      mapInstance.current = new window.google.maps.Map(mapRef.current, {
        center: center,
        zoom: 12,
      });
    }
  }, [center]);

  useEffect(() => {
    if (mapInstance.current && center) {
      mapInstance.current.setCenter(center);
    }
  }, [center]);

  return <div ref={mapRef} style={{ height: "400px", width: "100%" }} />;
};

export default Map;
