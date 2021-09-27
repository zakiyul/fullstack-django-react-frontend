import { useState } from "react";

import Food from "./Food";
import FoodForm from "./FoodForm";
import Chef from "./Chef";
import ChefForm from "./ChefForm";

const App = () => {
  const [food, setDataFood] = useState({});
  const [chef, setChef] = useState({});
  const [activeTab, setActiveTab] = useState(true);

  let payload = new FormData();
  let chefPayload = new FormData();
  const handleNama = (e) => {
    setDataFood({ ...food, nama: e.target.value });
  };
  const handleHarga = (e) => {
    setDataFood({ ...food, harga: e.target.value });
  };
  const handleChef = (e) => {
    const chefId = e.target.value;
    setDataFood({ ...food, chef: chefId });
  };
  const handleGambar = (e) => {
    let gambar = e.target.files[0];
    setDataFood({ ...food, gambar: gambar });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    payload.append("nama", food.nama);
    payload.append("harga", food.harga);
    payload.append("chef", food.chef);
    payload.append("gambar", food.gambar);
    fetch("http://localhost:8000/api/food/", {
      method: "POST",
      body: payload,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleChefNama = (e) => {
    setChef({ ...chef, nama: e.target.value });
  };
  const handleChefUmur = (e) => {
    setChef({ ...chef, umur: e.target.value });
  };
  const handleChefGender = (e) => {
    console.log(e.target.value);
    setChef({ ...chef, gender: e.target.value });
  };
  const handleChefFoto = (e) => {
    let foto = e.target.files[0];
    setChef({ ...chef, foto: foto });
  };
  const handleChefShow = (e) => {
    if (e.target.value === "on") {
      setChef({ ...chef, show: true });
    } else {
      setChef({ ...chef, show: false });
    }
  };
  const handleChefSubmit = (e) => {
    e.preventDefault();
    chefPayload.append("nama", chef.nama);
    chefPayload.append("umur", chef.umur);
    chefPayload.append("gender", chef.gender);
    chefPayload.append("foto", chef.foto);
    chefPayload.append("show", chef.show);
    fetch("http://localhost:8000/api/chef/", {
      method: "POST",
      body: chefPayload,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  return (
    <div className="container">
      <ul className="nav nav-pills nav-fill mt-3">
        <li className="nav-item">
          <a
            style={{ cursor: "pointer" }}
            onClick={() => setActiveTab(true)}
            className={`nav-link ${activeTab ? "active" : ""}`}
          >
            Chefs
          </a>
        </li>
        <li className="nav-item">
          <a
            style={{ cursor: "pointer" }}
            onClick={() => setActiveTab(false)}
            className={`nav-link ${activeTab ? "" : "active"}`}
          >
            Foods
          </a>
        </li>
      </ul>
      <hr />
      <div className="row">
        <div className="col-md-8">{activeTab ? <Chef /> : <Food />}</div>
        <div className="col-md-4">
          {activeTab ? (
            <ChefForm
              handleSubmit={handleChefSubmit}
              handleNama={handleChefNama}
              handleFoto={handleChefFoto}
              handleGender={handleChefGender}
              handleShow={handleChefShow}
              handleUmur={handleChefUmur}
            />
          ) : (
            <FoodForm
              handleChef={handleChef}
              handleGambar={handleGambar}
              handleHarga={handleHarga}
              handleNama={handleNama}
              handleSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
