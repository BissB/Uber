import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";

const Map = () => {
  useEffect(() => {
    const map = L.map("map").setView([37.5665, 126.9780], 13); // 서울 중심 좌표

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // 마커 추가
    L.marker([37.5665, 126.9780])
      .addTo(map)
      .bindPopup("서울 중심입니다.")
      .openPopup();
  }, []);

  return <div id="map" className={styles.map}></div>;
};

export default Map;