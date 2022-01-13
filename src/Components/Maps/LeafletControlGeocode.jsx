import { useEffect } from "react";
import { useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";

export default function LeafletControlGeocoder() {
    const map = useMap();

    useEffect(() => {
        var geocoder = L.Control.Geocoder.nominatim();
        if (typeof URLSearchParams !== "undefined" && window.location.search) {
            var params = new URLSearchParams(window.location.search);
            var geocoderString = params.get("geocoder");
            if (geocoderString && L.Control.Geocoder[geocoderString]) {
                geocoder = L.Control.Geocoder[geocoderString]();
            } else if (geocoderString) {
                console.warn("Unsupported geocoder", geocoderString);
            }
        }

        L.Control.geocoder({
            query: "",
            placeholder: "Search here...",
            defaultMarkGeocode: false,
            geocoder,
        })
            .on("markgeocode", function (e) {
                map.flyTo(e.geocode.center, 15)
            })
            .addTo(map);

    }, []);

    return null;
}
