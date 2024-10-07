import axios from "axios";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailResto } from "../store/action/detailRestoAction";

const DetailRestaurant = () => {
  const selectedResto = useSelector((state) => state.detailResto.resto);

  const dispatchRedux = useDispatch();
  const { id } = useParams();
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://restaurant-api.dicoding.dev/detail/${id}`
      );
      dispatchRedux(detailResto(response.data.restaurant));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="hero bg-base-200 min-h-screen flex flex-col pb-16">
      <div className="hero-content flex flex-col">
        <div className="w-[750px] py-8">
          {selectedResto && (
            <img
              src={`https://restaurant-api.dicoding.dev/images/large/${selectedResto?.pictureId}`}
              alt={selectedResto?.name}
              className="w-full rounded-lg shadow-2xl"
            />
          )}
        </div>
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
  );
};

export default DetailRestaurant;
