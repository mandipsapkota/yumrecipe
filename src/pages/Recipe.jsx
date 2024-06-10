import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(); 

  const [activeTab, setActiveTab] = useState("instructions");

  const recipeFunction = async (value) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${value}/information?apiKey=${apiKey}`
      );
      setRecipe(response.data); // Set the actual data to the state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (id) {
      recipeFunction(id);
    }
  }, [id]);

  return (
    <div>
      {recipe ? (
        <main className="p-5">
            {/* Nav div  */}
          <div className="flex flex-wrap justify-between items-center mb-2">
            <h3 className="text-xl font-semibold">{recipe.title}</h3>
            <div className="info flex gap-2">
              <button
                onClick={() => setActiveTab("instructions")}
                className={`p-3 rounded-md border-2 border-gray-900 ${
                  activeTab === "instructions" ? "bg-gray-900 text-white" : "text-gray-900"
                }`}
              >
                Instructions
              </button>
              <button
                onClick={() => setActiveTab("ingredients")}
                className={`p-3 rounded-md border-2 border-gray-900 ${
                  activeTab === "ingredients" ? "bg-gray-900 text-white" : "text-gray-900"
                }`}
              >
                Ingredients
              </button>
            </div>
          </div>
          {/* Info div  */}
          <div className="flex justify-center items-center md:items-start gap-3 md:gap-5 flex-col md:flex-row md:justify-start">
            
            <img src={recipe.image} alt={recipe.title} className="rounded-md shadow-sm max-w-[400px] "/>
            
            <div className="w-full p-8 md:px-3 md:py-0 rounded-sm">
                {/* Ingredients  */}
                {activeTab === "ingredients" && 
                <div>
                    <ul className="ml-3">
                        {recipe.extendedIngredients.map((ingredient)=>{
                            return(
                                <li className="list-disc" key={ingredient.id}>{ingredient.original}</li>
                            )
                        })}
                    </ul>
                </div>
                }

                {/* Instructions  */}
                {activeTab === "instructions" && 
                <div>
                    <h2 dangerouslySetInnerHTML={{__html:recipe.summary}}></h2>
                    <h2 className="mt-2 text-xl font-bold">Instructions</h2>
                    <h2 dangerouslySetInnerHTML={{__html:recipe.instructions}}></h2>
                    
                </div>
                }
            </div>
          </div>
        </main>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Recipe;
