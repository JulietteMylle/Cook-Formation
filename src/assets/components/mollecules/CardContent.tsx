
import React from "react"
function CardContent() {
    return(
        <div className="recipe">
            <div className="imageContainer">
            <img className="card-content-img" src="src\assets\images\placeholder.jpg" alt="" />
            </div>
            <h3 className="recipeTitle d-flex flex-flow justify-content-center align-items-center">Nom de la recette</h3>
        </div>
    )
    
}
export default CardContent;