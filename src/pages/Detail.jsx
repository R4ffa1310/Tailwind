import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailresto } from "../store/action/detailRestoAction";
import { data } from "autoprefixer";

const DetailRestaurant = () => {
  const selectedResto = useSelector((state) => state.detailresto);
  useEffect(() => {
    console.log(selectedResto);
  }, [selectedResto]);
  
  const dispatchRedux = useDispatch();
  const { id } = useParams();
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://restaurant-api.dicoding.dev/detail/${id}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [id]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      dispatchRedux(detailresto(data));
    };

    getData();
  }, [dispatchRedux, fetchData, id]);

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen flex flex-col">
        <div className="hero-content flex-col lg:flex-row">
          {selectedResto && (
            <img
              src={`https://restaurant-api.dicoding.dev/images/small/${product?.restaurant?.pictureId}`}
              alt={product.restaurant.name}
              className="max-w-xl rounded-lg shadow-2xl"
            />
          )}
          <div>
            <h1 className="text-5xl font-bold">{selectedResto?.name}</h1>
            <p className="py-6">{selectedResto?.description}</p>
          </div>
        </div>

        <div className="w-4/5 grid grid-cols-2">
          <div>
            <p>
              <strong>Alamat:</strong> {selectedResto?.address}
            </p>
            <p>
              <strong>Kota:</strong> {selectedResto?.city}
            </p>
            <p>
              <strong>Rating:</strong> {selectedResto?.rating}
            </p>
            <div className="mt-4 justify-content-left">
              <h3 className="text-lg font-semibold mb-2">Category</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside">
                  {selectedResto?.categories?.map((category, index) => (
                    <li key={index}>{category.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Menu</h3>
            <div className="listMenu grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold">Makanan</h4>
                <ul className="list-disc list-inside">
                  {selectedResto?.menus?.foods?.map((food, index) => (
                    <li key={index}>{food.name}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Minuman</h4>
                <ul className="list-disc list-inside">
                  {selectedResto?.menus?.drinks?.map((drink, index) => (
                    <li key={index}>{drink.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRestaurant;
