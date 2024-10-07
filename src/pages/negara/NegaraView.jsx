import React from "react";
import { Link } from "react-router-dom";

const NegaraView = ({ ubahCari, cariProduct, hasilCari, hasilFilter }) => {
  return (
    <div className="beranda bg-pink-300 dark:bg-gray-500 ">
      <div className="flex justify-center py-4">
        <label className="input w-full mx-12 input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            onChange={(input) => ubahCari(input.target.value)}
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
      </div>

      {cariProduct && (
        <p>
          Hasil dari: {cariProduct}, ditemukan: {hasilCari?.founded || 0}
        </p>
      )}

      <div className="flex justify-center pb-16">
        <div className="grid grid-cols-3 pt-4 gap-4">
          {hasilFilter?.map((data) => (
              <div className="card bg-pink-200 dark:bg-black dark:text-white w-96 shadow-xl">
                <figure>
                  <img src={data.flag} alt={data.name} />
                </figure>
                <div className="card-body">
                  <h1 className="card-title">{data.name}</h1>
                  <h2 className="card-title">{data.currency}</h2>
                  <p className="line-clamp-3">{data.description}</p>
                  <div className="card-actions justify-end">
                    <Link to={"/Rincian/" + data.id} className="btn btn-primary">
                      View Rincian
                    </Link>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NegaraView;
