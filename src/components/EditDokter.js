/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditDokter = () => {
  const [nama, setNama] = useState("");
  const [lulusan, setLulusan] = useState("");
  const [harga, setHarga] = useState();

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getDokterById();
  }, []);

  const updateDokter = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/dokter/${id}`, {
        nama,
        lulusan,
        harga,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getDokterById = async () => {
    const response = await axios.get(`http://localhost:5000/dokter/${id}`);
    console.log(response)
    setNama(response.data.nama);
    setLulusan(response.data.lulusan);
    setHarga(response.data.harga_layanan);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateDokter}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">lulusan</label>
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
            <label className="label">Harga Layanan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
                placeholder="harga"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDokter;
