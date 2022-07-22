const LevelOne = () => {
  return (
    <div className="container-md">
      <h2>Level One</h2>
      <p>Bewildered tiaras in Fairy God Mothers daily ran an Aladdin.</p>
      <p>A tiny Ginger Bread Man soon ran the beanstalk.</p>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="input1" />
        <label htmlFor="input1" className="form-label text-dark">
          Your Princess Name
        </label>
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" id="input2" />
      </div>
      <div className="mb-3">
        <input id="input2" className="form-control" placeholder="FaIRy TaleS" />
      </div>
      <div className="mb-3">
        <input
          id="input3"
          className="form-control"
          defaultValue="The Brothers Grimm"
        />
      </div>
      <div className="form-floating mb-3">
        <select
          name="knights"
          id="knights"
          className="form-select"
          aria-label="Default select example"
        >
          <option value="white">White</option>
          <option value="round-table">Of The Round Table</option>
        </select>
        <label htmlFor="knights" className="form-label text-dark">
          Choose a Knight:
        </label>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="button" className="btn btn-primary">
          Click Me!
        </button>
        <button type="button" className="btn btn-secondary" disabled>
          Can't touch this!
        </button>
      </div>
    </div>
  );
};

export default LevelOne;
