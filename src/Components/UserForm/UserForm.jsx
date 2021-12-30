import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Form.css";
import { MdDateRange } from "react-icons/md";
import { GetAge } from "../../Utilities/FormValidation/GetAge";

function UserForm() {
  const errMsgInit = {
    NoKK: "",
    NIK: "",
    NamaLengkap: "",
    JenisKelamin: "",
    TglLahir: "",
    StatusHubungan: "",
    StatusPerkawinan: "",
  };
  const formKosong = {
    NoKK: "",
    NIK: "",
    NamaLengkap: "",
    JenisKelamin: "Pria",
    TglLahir: "",
    StatusHubungan: "",
    StatusPerkawinan: "",
  };

  //regex
  const isNIK =
    /^(1[1-9]|21|[37][1-6]|5[1-3]|6[1-5]|[89][12])\d{2}\d{2}([04][1-9]|[1256][0-9]|[37][01])(0[1-9]|1[0-2])\d{2}\d{4}$/;
  const isAlpha = /^[A-Za-z ]*$/;

  //init state
  const [formData, setFormData] = useState(formKosong);
  const [errMsg, setErrMsg] = useState(errMsgInit);

  const validateFormValue = (name, value) => {
    //validate NO KK
    if (name === "NoKK" && value !== "") {
      setErrMsg({ ...errMsg, NoKK: "" });
    }

    //validate NIK
    if (name === "NIK" && !isNIK.test(value)) {
      setErrMsg({ ...errMsg, NIK: "Harap masukkan NIK yang valid" });
    } else if (isNIK.test(value)) {
      setErrMsg({ ...errMsg, NIK: "" });
    }

    //validate name
    if (name === "NamaLengkap" && !isAlpha.test(value)) {
      setErrMsg({ ...errMsg, NamaLengkap: "nama harus berupa huruf" });
    } else if (isAlpha.test(value)) {
      setErrMsg({ ...errMsg, NamaLengkap: "" });
    }

    //validate jenis kelamin
    if (name === "JenisKelamin" && value !== "") {
      setErrMsg({ ...errMsg, JenisKelamin: "" });
    } else {
      setErrMsg({ ...errMsg, JenisKelamin: "silakan pilih salah satu" });
    }

    //validate tgl lahir
    if (name === "TanggalLahir" && value !== "") {
      setErrMsg({ ...errMsg, TglLahir: "silakan masukkan tanggal lahir anda" });
    } else if (GetAge(value) <= 12) {
      setErrMsg({
        ...errMsg,
        TglLahir: "usia anda tidak memenuhi syarat penerima vaksin",
      });
    } else {
      setErrMsg({ ...errMsg, TglLahir: "" });
    }

    //validate Status Hubungan
    if (name === "StatusHubungan" && value !== "") {
      setErrMsg({ ...errMsg, StatusHubungan: "" });
    }

    //validate status perkawinan
    if (name === "StatusPerkawinan" && value !== "") {
      setErrMsg({ ...errMsg, StatusPerkawinan: "" });
    }
  };

  const validateOnSubmit = () => {
    setErrMsg(() => {
      const errorMessageArr = Object.keys(formData).map((key) => {
        if (formData[key] === "") {
          const err = `${
            key.charAt(0).toUpperCase() + key.slice(1)
          } tidak boleh kosong`;

          return { [key]: err };
        }
        return { [key]: "" };
      });
      const updatedErrorMessage = errorMessageArr.reduce(
        (previousValue, currentValue) => {
          return { ...previousValue, ...currentValue };
        },
        {}
      );
      return updatedErrorMessage;
    });
  };

  const handleInputData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    validateFormValue(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validForm = Object.keys(formData).filter(
      (key) => formData[key] !== ""
    );
    
    if (validForm.length >=6) {
      const newData = {
        noKK:formData.NoKK,
        nik: formData.NIK,
        nama: formData.NamaLengkap,
        jk: formData.JenisKelamin,
        ttl: formData.TglLahir,
        statusHubungan: formData.StatusHubungan,
        statusPerkawinan: formData.StatusPerkawinan
      };
      console.log("data masuk:", newData);
    } else {
      validateOnSubmit();
    }
  };
  return (
    <div className="px-3 mt-3">
      <form className="form" onSubmit={handleSubmit}>
        <div className="mb-2 ctr-input ">
          <label className="form-label">No. KK *</label>
          <input
            placeholder="Masukkan no. KK"
            name="NoKK"
            type="text"
            value={formData?.NoKK}
            onChange={handleInputData}
            className="form-control"
          />
          <p className="form-text text-danger mb-0">{errMsg.NoKK}</p>
        </div>
        <div className="mb-2 ctr-input">
          <label className="form-label">NIK *</label>
          <input
            placeholder="Masukkan NIK"
            name="NIK"
            value={formData?.NIK}
            onChange={handleInputData}
            type="text"
            className="form-control"
          />
          <p className="form-text text-danger mb-0">{errMsg.NIK}</p>
        </div>
        <div className="mb-2 ctr-input">
          <label className="form-label">Nama Lengkap *</label>
          <input
            placeholder="Masukkan nama lengkap"
            type="text"
            value={formData?.NamaLengkap}
            onChange={handleInputData}
            name="NamaLengkap"
            className="form-control"
          />
          <p className="form-text text-danger mb-0">{errMsg.NamaLengkap}</p>
        </div>
        <div className="mb-2 ctr-input">
          <label className="col-form-label">Jenis Kelamin *</label>
          <div className="d-flex">
            <div className="form-check form-check-inline me-5">
              <input
                className="form-check-input"
                type="radio"
                name="JenisKelamin"
                value="Pria"
                // checked={formData.JenisKelamin === "Pria"}
                onChange={handleInputData}
                checked
              />
              <label className="form-check-label">Pria</label>
            </div>
            <div className="form-check form-check-inline ms-5">
              <input
                className="form-check-input"
                type="radio"
                name="JenisKelamin"
                value="Wanita"
                // checked={formData?.JenisKelamin === "Wanita"}
                onChange={handleInputData}
              />
              <label className="form-check-label">Wanita</label>
            </div>
          </div>
          <p className="form-text text-danger mb-0">{errMsg.JenisKelamin}</p>
        </div>
        <div className="mb-2 ctr-input date-input">
          <label className="form-label">Tanggal Lahir *</label>
          <MdDateRange />
          <DatePicker
            name="TanggalLahir"
            dateFormat="dd-MM-yyyy"
            selected={formData?.TglLahir}
            onChange={(date) => {
              setFormData({...formData, 'TglLahir': date });
              console.log(date);
            }}
          />
          <p className="form-text text-danger mb-0 p-date">{errMsg.TglLahir}</p>
        </div>
        <div className="mb-2 ctr-input">
          <label className="form-label">
            Status Hubungan dalam Kartu Keluarga *
          </label>
          <select
            className="form-select ctr-input"
            name="StatusHubungan"
            defaultValue={formData?.StatusHubungan}
            onChange={handleInputData}
          >
            <option value="" disabled>
              Hubungan keluarga
            </option>
            <option value="anak">Anak</option>
            <option value="suami">Suami</option>
            <option value="istri">Istri</option>
            <option value="mertua">Mertua</option>
          </select>
          <p className="form-text text-danger">{errMsg.StatusHubungan}</p>
        </div>
        <div className="mb-4 ctr-input">
          <label className="form-label">Status Perkawinan *</label>
          <select
            className="form-select"
            name="StatusPerkawinan"
            defaultValue={formData?.StatusPerkawinan}
            onChange={handleInputData}
          >
            <option value="" disabled>
              Status perkawinan
            </option>
            <option value="belumKawin">Belum Kawin</option>
            <option value="kawin">Kawin</option>
            <option value="cerai">Cerai</option>
            <option value="ceraiMati">Cerai Mati</option>
          </select>
          <p className="form-text text-danger">{errMsg.StatusPerkawinan}</p>
        </div>
        <button className="btn btn-primary w-100 my-3" type="submit">
          Simpan
        </button>
      </form>
    </div>
  );
}

export default UserForm;