import React from "react";
import styles from "./isLandMap.module.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const position = [49.98761491943315, 36.21672317791318]; // Задай координаты островкаF329+42 Днепр, Днепропетровская область

const IslandMap = () => {
  return (
    <div className={styles.mapContainer}>
     <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%", borderRadius: "12px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Здесь находится наша мастерская!</Popup>
      </Marker>
     </MapContainer>
    </div>
  );
};

export default IslandMap;
