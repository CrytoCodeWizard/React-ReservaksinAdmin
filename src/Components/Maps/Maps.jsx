import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Geocode from "react-geocode";

import useGeolocation from "react-hook-geolocation";
import MapsMarker from "./MapsMarker";
import LeafletControlGeocoder from "./LeafletControlGeocode";

export default function Maps() {
    const geolocation = useGeolocation({
        enableHighAccuracy: true,
        timeout: 0,
        maximumAge: 0,
    });

    const [curLoc, setCurLoc] = useState(null);

    useEffect(() => {
        if (geolocation) {
            setCurLoc({ lat: geolocation.latitude, lng: geolocation.longitude });
        }
    }, [geolocation]);
    // Geocode.setLanguage("en");
    // Geocode.setRegion("id");
    // Geocode.setLocationType("ROOFTOP");
    // Geocode.fromLatLng(curLoc?.lat, curLoc?.lng).then(
    //     (response) => {
    //         const address = response.results[0].formatted_address;
    //         console.log(address);
    //     },
    //     (error) => {
    //         console.error(error);
    //     }
    // );
    // console.log(curLoc?.lat)
    // console.log(curLoc?.lng)


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
            <MapsMarker position={curLoc}></MapsMarker>
            <LeafletControlGeocoder></LeafletControlGeocoder>
        </MapContainer>
    ) : (
        <div className="d-flex flex-column align-items-center">
            <div className="spinner-border" role="status"></div>
            <p className="mt-3">Generate maps ... </p>
        </div>
    );
}
