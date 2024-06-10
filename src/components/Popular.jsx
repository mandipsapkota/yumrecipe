import axios from "axios";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { Link } from "react-router-dom";
// import '@splidejs/splide/css';

const Popular = () => {
    const [dishes, setDishes] = useState([]);

    const popularDishes = async () => {
        const check = localStorage.getItem('popular');
            const apiKey = import.meta.env.VITE_API_KEY;
            try {
                const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9`);
                localStorage.setItem('popular', JSON.stringify(response.data.recipes));
                setDishes(response.data.recipes);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
    };

    useEffect(() => {
        popularDishes();
    }, []);

    return (
        <div className="m-3">
            <h3 className="p-4 font-bold text-2xl md:text-3xl text-center">Popular picks</h3>
            <Splide 
                options={{
                    arrows: false,
                    pagination: false,
                    gap: "3rem",
                    type: "loop",
                    drag:"free",
                    perPage: 5,
                    breakpoints: {
                        640: {
                            perPage: 2,
                        },
                        400: {
                            perPage:1,
                        }
                  },
                    autoplay:true,
                    rewind:true,
                    
                }}
            >
                {dishes.map((recipe) => (
                    <SplideSlide key={recipe.id} className="relative shadow-md rounded-xl overflow-hidden">
                        <Link to={`/recipe/${recipe.id}`}>
                        <div className="relative shadow-md">
                            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md flex items-end justify-center">
                                <p className="text-gray-100 text-sm font-semibold p-2 h-14 capitalize">{recipe.title}</p>
                            </div>
                            <img
                                src={recipe.image}
                                className="rounded-md bg-contain h-[250px] object-cover"
                                alt={recipe.title}
                            />
                        </div>
                    </Link>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default Popular;
