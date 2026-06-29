import axios from "axios"
import React, { useEffect, useState } from "react"
import "./Recipes.css"

const Recipes = () => {
  const [recipes, setRecipes] = useState([])

  async function fetchData() {
    const res = await axios.get("https://dummyjson.com/recipes?limit=20");
    setRecipes(res.data.recipes)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h1 className="text-center my-4">Recipes</h1>

      <div className="container">
        <div className="row">
          {recipes.map((rec) => (
            <div className="col-md-6 mb-4" key={rec.id}>
              <div className="card">
                <img
                  src={rec.image}
                  className="card-img-top customImg"
                  alt={rec.name}
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />

                <div className="card-body">
                  <h3 className="card-title">{rec.name}</h3>

                  <div className="row">
                    <div className="col-md-6 custom1">
                      <h5>Ingredients</h5>
                      <ul>
                        {rec.ingredients.map((ing, index) => (
                          <li key={index}>{ing}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-md-6 custom1">
                      <h5>Instructions</h5>
                      <ol>
                        {rec.instructions.map((ins, index) => (
                          <li key={index}>{ins}</li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <p className="mt-3 custom1">
                    <strong>PrepTimeMinutes:</strong> {rec.prepTimeMinutes}
                  </p>

                  <p className="mt-3 custom1">
                    <strong>CookTimeMinutes:</strong> {rec.cookTimeMinutes}
                  </p>
                  
                  <p className="mt-3 custom1">
                    <strong>Servings:</strong> {rec.servings}
                  </p>
                  
                  <p className="mt-3 custom1">
                    <strong>Difficulty:</strong> {rec.difficulty}
                  </p>

                  <p className="mt-3 custom1">
                    <strong>Cuisine:</strong> {rec.cuisine}
                  </p>
                  
                  <p className="mt-3 custom1">
                    <strong>CaloriesPerServing:</strong> {rec.caloriesPerServing}
                  </p>

                  <p className="mt-3 custom1">
                    <strong>Tags:</strong> [{rec.tags?.join(", ")}]
                  </p>

                  <p className="mt-3 custom1">
                    <strong>User ID:</strong> {rec.userId}
                  </p>

                  <p className="mt-3 custom1">
                    <strong>Rating:</strong> {rec.rating}
                  </p>

                  <p className="mt-3 custom1">
                    <strong>ReviewCount:</strong> {rec.reviewCount}
                  </p>
                  
                   <p className="mt-3 custom1">
                    <strong>MealType:</strong> [{rec.mealType?.join(", ")}]
                  </p>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Recipes;