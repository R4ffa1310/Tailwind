import React from "react";
import { Link } from "react-router-dom";

export default function ProductView({ product }) {
  return (
    <div className="">
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          name="pencarian_id"
          className="grow"
          placeholder="Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      <div className="grid grid-cols-3">
        {product?.map((data) => (
          <div className="" key={data.id}>
            <div className="card bg-base-100 w-96 shadow-xl">
              <figure>
                <img src={data.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <p className="line-clamp-3">{data.description}</p>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <Link to={"/Detail/" + data.id} className="btn btn-primary">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
