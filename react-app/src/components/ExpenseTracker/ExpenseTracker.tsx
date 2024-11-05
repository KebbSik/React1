import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import React, { useEffect, useState } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least3 characters." }),
  amount: z.number({ invalid_type_error: "Amount field is required." }),
  // category: z.string().nonempty({ message: "Category is required." }),
  category: z.string().min(1, { message: "Category is required." }),
});

type FormData = z.infer<typeof schema>;

const ExpenseTracker = () => {
  const [expensesList, setExpensesList] = useState<FormData[]>([]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
    console.log(selectedCategory);
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    setExpensesList((prevList) => [...prevList, data]);

    // console.log(expensesList);
  };

  const removeElement = (el: {
    description: string;
    amount: number;
    category: string;
  }) => {
    setExpensesList((prevList) => prevList.filter((item) => item !== el));
  };

  useEffect(() => {
    setExpensesList([
      {
        description: "milk",
        amount: 5,
        category: "groceries",
      },
      {
        description: "eggs",
        amount: 10,
        category: "groceries",
      },
      {
        description: "electricity",
        amount: 100,
        category: "utilities",
      },
      {
        description: "movies",
        amount: 15,
        category: "entertainment",
      },
      {
        description: "milk",
        amount: 5,
        category: "groceries",
      },
    ]);
  }, []);

  const filteredExpenses = selectedCategory
    ? expensesList.filter((expense) => expense.category === selectedCategory)
    : expensesList;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Decription</label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="input-group">
          <label className="input-group mb-3">Category</label>
          <select
            {...register("category")}
            id="category"
            className="form-select"
          >
            <option value="">All categories</option>
            <option value="groceries">Groceries</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
          </select>
        </div>
        {errors.category && (
          <p className="text-danger mb-0">{errors.category.message}</p>
        )}
        <button
          // disabled={!isValid}
          type="submit"
          className="btn btn-primary mt-3 mb-3"
        >
          Submit
        </button>
      </form>
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        id="category2"
        className="form-select mb-3"
      >
        <option value="">All categories</option>
        <option value="groceries">Groceries</option>
        <option value="utilities">Utilities</option>
        <option value="entertainment">Entertainment</option>
      </select>

      <table className="table">
        <tr>
          <th className="border p-2">Description</th>
          <th className="border p-2">Amount</th>
          <th className="border p-2">Category</th>
          <th className="border p-2"></th>
        </tr>
        {filteredExpenses.map((el) => (
          <tr className="">
            <th className="border p-2">
              {el.description.charAt(0).toUpperCase() + el.description.slice(1)}
            </th>
            <th className="border p-2">${el.amount.toFixed(2)}</th>
            <th className="border p-2">
              {el.category.charAt(0).toUpperCase() + el.category.slice(1)}
            </th>
            <th className="border p-2">
              <button
                onClick={() => removeElement(el)}
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </th>
          </tr>
        ))}
        <tr className=" text-success">
          <th className="border p-2">Total</th>
          <th className="border p-2">
            $
            {filteredExpenses.reduce((sum, current) => sum + current.amount, 0)}
          </th>
        </tr>
      </table>
    </div>
  );
};

export default ExpenseTracker;
