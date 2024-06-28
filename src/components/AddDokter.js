import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddDokter = () => {
  const [nama, setNama] = useState("");
  const [lulusan, setLulusan] = useState("");
  const [harga, setHarga] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/dokter", {
        nama,
        lulusan,
        harga,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Nama</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Nama"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Lulusan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={lulusan}
                onChange={(e) => setLulusan(e.target.value)}
                placeholder="lulusan"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Harga</label>
            <div className="control">
                <input
                  type="text"
                  className="input"
                  value={harga}
                  onChange={(e) => setHarga(e.target.value)}
                  placeholder="Harga Layanan"
                />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDokter;
