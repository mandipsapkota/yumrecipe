import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const Cuisine = () => {
  let params = useParams();
  const [cuisine, setCuisine] = useState([]);
  const getCuisine = async (name) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${name}`
      );
      setCuisine(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);
  return (
    <motion.div className="m-3" initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}>
      <h3 className="text-center font-semibold p-3 text-lg">{`Some popular ${params.type} recipes.`}</h3>
      <div className="flex justify-around gap-3 flex-wrap">
        {cuisine.map((recipe) => {
          return (
            <Link to={`/recipe/${recipe.id}`}>
            <div key={recipe.id} className="relative shadow-md overflow-hidden rounded-lg transform transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer group">
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-end justify-center transition-all duration-300 ease-in-out hover:bg-opacity-70">
                <p className="text-gray-100 text-sm font-semibold p-2 h-14 capitalize transform transition-transform duration-300 ease-in-out group-hover:translate-y-[-10px]">
                  {recipe.title}
                </p>
              </div>
              <img
                src={recipe.image}
                className="rounded-lg bg-contain w-[250px] object-cover transition-all duration-300 ease-in-out hover:brightness-75"
                alt={recipe.title}
              />
            </div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Cuisine;
