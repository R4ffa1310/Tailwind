import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const ambilProduct = async () => {
    try {
      const response = await axios.get(
        `https://restaurant-api.dicoding.dev/detail/${id}`
      );
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching the product data", error);
    }
  };

  useEffect(() => {
    if (id) {
      ambilProduct();
    }
  }, [id]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {product ? (
        <>
          <img
            src={`https://restaurant-api.dicoding.dev/images/small/${product.restaurant.pictureId}`}
            alt={product.restaurant.name}
          ></img>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
