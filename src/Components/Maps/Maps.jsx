import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapsMarker from "./MapsMarker";
import LeafletControlGeocoder from "./LeafletControlGeocode";

export default function Maps({setCurLoc, curLoc}) {

    const getCoords = async () => {
        const pos = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    
        setCurLoc({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        return {
          long: pos.coords.longitude,
          lat: pos.coords.latitude,
        };
      };
    useEffect(() => {
        getCoords();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return curLoc?.lat ? (
        <MapContainer
            center={{ lat: curLoc?.lat, lng: curLoc?.lng }}
            zoom={17}
            style={{ height: "300px", width: "480px" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            ></TileLayer>
            <MapsMarker position={curLoc} setPosition={setCurLoc}></MapsMarker>
            <LeafletControlGeocoder></LeafletControlGeocoder>
        </MapContainer>
    ) : (
        <div className="d-flex flex-column align-items-center">
            <div className="spinner-border" role="status"></div>
            <p className="mt-3">Generate maps ... </p>
        </div>
    );
}
