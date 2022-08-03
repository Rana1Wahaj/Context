import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { useCreateAuthStateContext } from "../ContextApi/AuthProvider";
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState();
  const isAuthenticated = useCreateAuthStateContext();
  const navigate = useNavigate();

  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    if (isAuthenticated) {
      return navigate("/cart");
    }
    return navigate("/signin");
  };

  return (
    <>
      <h1>Products</h1>
      <div className="body">
        {data &&
          data.map((value, id) => {
            return (
              <div className="data" key={id}>
                <img className="img" src={value.image} alt="imagee" />
                <p>{value.title}</p>
                <h2>Price: {value.price}</h2>
                <button className="btn-add-to-cart" onClick={handleClick}>
                  Add to cart
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Home;
