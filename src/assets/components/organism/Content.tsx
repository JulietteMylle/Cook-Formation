import React from "react"
import CardContent from "../mollecules/CardContent"

function Content () {
    return (
        <div className="card p-20 flex-fill container">
             <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
             <div className= "grid contentCard">
        <CardContent />
        <CardContent />
        <CardContent />
        <CardContent />
        <CardContent />
        <CardContent />
        
        </div>
</div>
    )
}

export default Content