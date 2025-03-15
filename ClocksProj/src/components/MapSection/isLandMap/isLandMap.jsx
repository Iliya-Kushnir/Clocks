import React from "react";
import styles from "./isLandMap.module.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const position = [49.98761491943315, 36.21672317791318];

// Фиксим стандартный маркер Leaflet
const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const IslandMap = () => {
  return (
    <div className={styles.mapContainer}>
      <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%", borderRadius: "12px" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon}>
          <Popup>Здесь находится наша мастерская!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default IslandMap;
