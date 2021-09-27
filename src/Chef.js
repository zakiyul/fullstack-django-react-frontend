import { useState, useEffect } from "react";
import axios from "axios";

const Chef = () => {
  const [chefs, setChefs] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:8000/api/chef/");
    const data = res.data;
    setChefs(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="row">
      {chefs &&
        chefs.map((chef) => {
          return (
            <div className="col-md-4 my-3" key={chef.id}>
              <div className="card">
                <img
                  src={chef.foto}
                  className="card-img-top"
                  alt={chef.nama}
                  style={{ height: 244 }}
                />
                <div className="card-body">
                  <h5 className="card-title">{chef.nama}</h5>
                  <p className="card-text">Umur : {chef.umur} Tahun</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Chef;
