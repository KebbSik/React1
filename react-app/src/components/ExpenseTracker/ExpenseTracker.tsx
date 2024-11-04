import React, { useState } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  description: z.string(),
  amount: z.number(),
  category: z.string(),
});

type FormData = z.infer<typeof schema>;

const ExpenseTracker = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label className="form-label">Decription</label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Amount</label>
        <input
          {...register("amount")}
          id="amount"
          type="text"
          className="form-control"
        />
      </div>
      <div className="input-group mb-3">
        <label className="input-group mb-3">Category</label>
        <select {...register("category")} id="category" className="form-select">
          <option value="">All categories</option>
          <option value="groceries">Groceries</option>
          <option value="utilities">Utilities</option>
          <option value="entertaiment">Entertaiment</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ExpenseTracker;
