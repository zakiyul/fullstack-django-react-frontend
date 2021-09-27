import { useState, useEffect } from "react";
import axios from "axios";

const Food = () => {
  const [foods, setFood] = useState([]);
  function formatNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  const getFoods = async () => {
    const res = await axios.get("http://localhost:8000/api/food/");
    setFood(res.data);
  };
  useEffect(() => {
    getFoods();
  }, []);
  return (
    <div className="row">
      {foods &&
        foods.map((food) => {
          return (
            <div className="col-md-4 my-3" key={food.id}>
              <div className="card">
                <img
                  src={food.gambar}
                  className="card-img-top"
                  alt={food.nama}
                  style={{ height: 244 }}
                />
                <div className="card-body">
                  <h5 className="card-title">{food.nama}</h5>
                  <div className="card-text">
                    <span>Chef : {food.chef.nama}</span>
                    <br />
                    <strong>Harga : Rp {formatNumber(food.harga)}</strong>{" "}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Food;
