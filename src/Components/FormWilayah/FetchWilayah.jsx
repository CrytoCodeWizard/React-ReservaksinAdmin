import React, {useEffect, useState} from 'react';

function FetchWilayah(props) {
    const URL = "http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
    const dataWilayah = {
        Provinsi: "",
        Kabupaten:"",
        Kecamatan:"",
        Kelurahan:""
    }

    const errDataWilayah = {
        Provinsi: "",
        Kabupaten:"",
        Kecamatan:"",
        Kelurahan:""
    }
    
    return (
        <div>
            
        </div>
    );
}

export default FetchWilayah;