const FoodForm = ({
  handleSubmit,
  handleNama,
  handleUmur,
  handleGender,
  handleFoto,
  handleShow,
}) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-3">
        <label htmlFor="nama" className="form-label">
          Nama
        </label>
        <input
          onChange={(e) => handleNama(e)}
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="umur" className="form-label">
          Umur
        </label>
        <input
          onChange={(e) => handleUmur(e)}
          type="number"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Gender</label>
        <select onChange={(e) => handleGender(e)} className="form-select">
          <option value="lk">Laki-laki</option>
          <option value="pr">Perempuan</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Foto</label>
        <input
          onChange={(e) => handleFoto(e)}
          type="file"
          className="form-control"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          onChange={(e) => handleShow(e)}
          type="checkbox"
          className="form-check-input"
        />
        <label className="form-label">Show</label>
      </div>
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default FoodForm;
