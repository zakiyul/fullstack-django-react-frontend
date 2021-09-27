import { useState, useEffect } from "react";
import axios from "axios";

const FoodForm = ({
  handleChef,
  handleGambar,
  handleHarga,
  handleNama,
  handleSubmit,
}) => {
  const [chefs, setChef] = useState([]);

  const getChefs = async () => {
    const res = await axios.get("http://localhost:8000/api/chef/");
    setChef(res.data);
  };
  useEffect(() => {
    getChefs();
  }, []);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-3">
        <label className="form-label">Nama</label>
        <input
          onChange={(e) => handleNama(e)}
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Harga</label>
        <input
          onChange={(e) => handleHarga(e)}
          type="number"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Chef</label>
        <select onChange={(e) => handleChef(e)} className="form-select">
          {chefs &&
            chefs.map((chef) => {
              return (
                <option key={chef.id} value={chef.id}>
                  {chef.nama}
                </option>
              );
            })}
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">gambar</label>
        <input
          onChange={(e) => handleGambar(e)}
          type="file"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default FoodForm;
