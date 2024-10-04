import axios from "axios";
import React, { useCallback, useEffect, useReducer, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import BerandaView from "./BerandaView";
import { data } from "autoprefixer";

const nilaiDefault = {
  data: [],
  filterData: [],
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_BERHASIL":
      return {
        ...state,
        data: action.payload,
        filterData: action.payload,
        loading: false,
      };
    case "SET_FILTER":
      return {
        ...state,
        filterData: action.payload,
      };
    default:
      throw new Error("error di case");
  }
};

const Beranda = () => {
  const [state, dispatch] = useReducer(reducer, nilaiDefault);

  // const [products, setProducts] = useState(null);
  // const [hasilCari, setHasilCari] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cari, setCari] = useSearchParams();
  const cariProduct = cari.get("cariproduct");

  const ambilProduct = async () => {
    try {
      const response = await axios.get(
        "https://restaurant-api.dicoding.dev/list"
      );
      // setProducts(response.data);
      const data = await response.data;
      dispatch({ type: "FETCH_BERHASIL", payload: data });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching the product list", error);
    }
  };

  const ambilHasilCari = async (query) => {
    try {
      const response = await axios.get(
        `https://restaurant-api.dicoding.dev/search?q=${query}`
      );
      const data = await response.data;
      // setProducts(data);
      dispatch({ type: "SET_FILTER" , payload: data });
      
      // setHasilCari(response.data);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching search results", error);
    }
  };

  const ubahCari = useCallback(
    async (input) => {
      setCari({ cariproduct: input });
     
    },
    [cariProduct]
  );


  useEffect(() => {
    if (cariProduct) {
      ambilHasilCari(cariProduct);
    } else {
      ambilProduct();
    }
  }, [cariProduct]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const hasilFilter = cariProduct ? state.filterData : state.data;

  console.log(state);

  return (
    <BerandaView
      cariProduct={cariProduct}
      hasilCari={state.filterData}
      hasilFilter={hasilFilter}
      ubahCari={ubahCari}
    />
  );
};

export default Beranda;
