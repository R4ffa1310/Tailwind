import React from 'react'
import { Link } from 'react-router-dom';

const BerandaView = ({ubahCari, cariProduct, hasilCari, hasilFilter}) => {
    return (
        <div className="beranda bg-pink-300 dark:bg-slate-500 ">
          <label className="input input-bordered flex items-center gap-2">
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
    
          {cariProduct && (
            <p>
              Hasil dari: {cariProduct}, ditemukan: {hasilCari?.founded || 0}
            </p>
          )}
    
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {hasilFilter?.restaurants?.map((data) => (
              <div className="" key={data?.name}>
                <div className="card bg-pink-200 dark:bg-black dark:text-white w-96 shadow-xl">
                  <figure>
                    <img
                      src={
                        "https://restaurant-api.dicoding.dev/images/small/" +
                        data.pictureId
                      }
                      alt={data.name}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{data.name}</h2>
                    <p className="line-clamp-3">{data.description}</p>
                    <div className="card-actions justify-end">
                      <Link to={"/Detail/" + data.id} className="btn btn-primary">
                        View Details
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

export default BerandaView
