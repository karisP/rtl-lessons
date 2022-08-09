import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  street: string;
  landmarks: string;
  exampleRequired: string;
  color: string;
};

const LevelTwo = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="container-md">
      <h2>Level Two</h2>
      <p>Castle Address</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-floating mb-3">
          <input
            id="street"
            {...(register("street"), { required: true, maxLength: 20 })}
            type="text"
            className="form-control"
          />
          <label htmlFor="street" className="form-label text-dark">
            Ye Old Trail
          </label>
        </div>
        {errors?.street?.type === "required" && <p>This field is required</p>}
        {errors?.street?.type === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
        <div className="form-floating mb-3">
          <input
            id="landmarks"
            {...register("landmarks")}
            type="text"
            className="form-control"
          />
          <label htmlFor="landmarks" className="form-label text-dark">
            Landmarks
          </label>
        </div>
        <div className="form-floating mb-3">
          <select
            id="color"
            className="form-select"
            {...register("color", { required: true })}
          >
            <option value="gray">Gray</option>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="rainbow">Rainbow</option>
          </select>
          <label htmlFor="color" className="form-label text-dark">
            Castle Color:
          </label>
        </div>
        <div className="mb-3">
          <input
            {...register("exampleRequired", { required: true })}
            type="text"
            className="form-control"
          />
          <div className="mt-1">
            {errors.exampleRequired && <span>This field is required</span>}
          </div>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <input type="submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default LevelTwo;
