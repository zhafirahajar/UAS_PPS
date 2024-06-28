import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const DokterList = () => {
  const [dokters, setDokter] = useState([]);
  
  useEffect(() => {
    getDokters();
  }, []);
  
  const getDokters = async () => {
    const response = await axios.get("http://localhost:5000/dokter");
    console.log(response.data)
    setDokter(response.data.dokter);
  };

  const deleteDokter = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/dokter/${id}`);
      getDokters();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`add`} className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Lulusan</th>
              <th>Harga Layanan</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dokters.map((dokter, index) => (
              <tr key={dokter.id}>
                <td>{index + 1}</td>
                <td>{dokter.nama}</td>
                <td>{dokter.lulusan}</td>
                <td>{dokter.harga}</td>
                <td>
                  <Link
                    to={`edit/${dokter.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteDokter(dokter.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DokterList;
