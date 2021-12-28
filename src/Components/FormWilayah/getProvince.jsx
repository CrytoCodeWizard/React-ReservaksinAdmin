import React, { useState, useEffect } from "react";
import axios from "axios";

function GetProvince() {
  const [prov, setProv] = useState([]);
  const [kab, setKab] = useState([]);
  const [kec, setKec] = useState([]);
  const [kel, setKel] = useState([]);

  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [wilayah, setWilayah] = useState("provinsi");
  const [urlTarget, setURLTarget] = useState("provinces");
  const URLs = `http://www.emsifa.com/api-wilayah-indonesia/api/${urlTarget}.json`;

  console.log(urlTarget);
  let errKosong = {
    alamat: "",
    kelurahan: "",
    kecamatan: "",
    kabupaten: "",
    provinsi: "",
  };
  const [formData, setFormData] = useState();
  const [errMsg, setErrMsg] = useState(errKosong);

  const handleValidation = (name, value) => {
    if (name === "provinsi" && value !== "") {
      setErrMsg({ ...errMsg, provinsi: "" });
    }

    if (name === "kabupaten" && formData.provinsi.name === "") {
      alert("silakan pilih provinsi terlebih dahulu");
    } else if (name === "kabupaten" && value !== "") {
      setErrMsg({ ...errMsg, kabupaten: "" });
    }

    //validasi kecamatan
    if (name === "kecamatan" && formData.kabupaten.name === "") {
      alert("silakan pilih kabupaten terlebih dahulu");
    } else if (name === "kecamatan" && value !== "") {
      setErrMsg({ ...errMsg, kecamatan: "" });
    }

    //validasi kelurahan
    if (name === "kelurahan" && formData.kecamatan.name === "") {
      alert("silakan pilih kecamatan terlebih dahulu");
    } else if (name === "kelurahan" && value !== "") {
      setErrMsg({ ...errMsg, kelurahan: "" });
    }
  };

  useEffect(() => {
    const handleFetch = async () => {
      let result;
      try {
        result = await axios.get(URLs);
        setIsLoaded(true);
        // console.log(result.data);
        switch (wilayah) {
          case "provinsi":
            setProv(result.data);
            break;
          case "kabupaten":
            setKab(result.data);
            break;
          case "kecamatan":
            setKec(result.data);
            break;
          default:
            setKel(result.data);
        }
      } catch (err) {
        setIsLoaded(true);
        setError(err);
      }
    };
    handleFetch();
  }, [URLs, wilayah]);

  const handleInputData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("isi value", value);
    handleValidation(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "provinsi") {
      setWilayah("kabupaten");
      setURLTarget(`regencies/${value.id}`);
    } else if (name === "kabupaten") {
      setWilayah("kecamatan");
      setURLTarget(`districts/${value.id}`);
    } else if (name === "kecamatan") {
      setWilayah("kelurahan");
      setURLTarget(`villages/${value.id}`);
    }
  };

  console.log("isi form Data", formData.provinsi);
  if (error) {
    return <div>Erorr: {error}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <form action="sumbit">
      <div className="mb-3">
        <label className="form-label">Alamat KTP *</label>
        <input
          placeholder="Masukkan Alamat KTP"
          name="alamat"
          type="text"
          value={formData.alamat}
          onChange={handleInputData}
          onBlur={handleValidation}
          className="form-control"
        />
        <p className="form-text text-danger">{errMsg.alamat}</p>
      </div>
      <div className="mb-3">
        <select
          name="provinsi"
          id="provinsi"
          defaultValue={formData.provinsi}
          className="form-select"
          aria-label="Default select example"
          onChange={handleInputData}
          onBlur={handleValidation}
        >
          <option disabled>Pilih Provinsi</option>
          {prov.map((item) => (
            <option key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <select
          name="kabupaten"
          id="kabupaten"
          defaultValue={formData.kabupaten}
          className="form-select"
          aria-label="Default select example"
          onChange={handleInputData}
          onBlur={handleValidation}
        >
          <option disabled>Pilih Kabupaten</option>
          {kab.map((item) => (
            <option key={item.id} value={item}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <select
          name="kecamatan"
          id="kecamatan"
          defaultValue={formData.kecamatan}
          className="form-select"
          aria-label="Default select example"
          onChange={handleInputData}
          onBlur={handleValidation}
        >
          <option disabled>Pilih Kecamatan</option>
          {kec.map((item) => (
            <option key={item.id} value={item}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <select
          name="kelurahan"
          id="kelurahan"
          defaultValue={formData.kelurahan}
          className="form-select"
          aria-label="Default select example"
          onChange={handleInputData}
          onBlur={handleValidation}
        >
          <option disabled>Pilih Kelurahan</option>
          {kel.map((item) => (
            <option key={item.id} value={item}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}

export default GetProvince;
