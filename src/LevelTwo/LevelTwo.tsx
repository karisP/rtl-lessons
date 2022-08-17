import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  street: string;
  landmarks: string;
  color: string;
  secretPassword: string;
};

const LevelTwo = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onChange" });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="container-md mb-3">
      <h2 className="mb-4">Level Two</h2>
      <h3 className="mb-3">Castle Address</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-floating mb-3">
          <input
            id="street"
            {...(register("street"), { required: true })}
            type="text"
            className="form-control"
          />
          <label htmlFor="street" className="form-label text-dark">
            Ye Old Trail
          </label>
        </div>
        {errors?.street?.type === "required" && <p>required field</p>}
        <div className="form-group mb-3">
          <label htmlFor="landmarks" className="form-label">
            Landmarks
          </label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="moatCheckbox"
            />
            <label className="form-check-label" htmlFor="moatCheckbox">
              Moat
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="drawbridgeCheckbox"
            />
            <label className="form-check-label" htmlFor="drawbridgeCheckbox">
              Drawbridge
            </label>
          </div>
        </div>
        <div className="mt-1">
          {errors.landmarks?.type === "required" && <span>required field</span>}
        </div>
        <div className="form-floating mb-3">
          <select id="color" className="form-select" {...register("color")}>
            <option value="gray">Gray</option>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="rainbow">Rainbow</option>
          </select>
          <label htmlFor="color" className="form-label text-dark">
            Castle Color:
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            {...register("secretPassword", { required: true })}
            type="password"
            className="form-control"
            id="secretPassword"
          />
          <label htmlFor="secretPassword" className="form-label text-dark">
            Secret Password
          </label>
        </div>
        <div className="mt-1">
          {errors.secretPassword?.type === "required" && (
            <span>required field</span>
          )}
          {errors?.secretPassword?.type === "minLength" && (
            <p>the secret password must be a minimum of 8 characters</p>
          )}
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <input type="submit" className="btn btn-primary" disabled={true} />
        </div>
      </form>
    </div>
  );
};

export default LevelTwo;
