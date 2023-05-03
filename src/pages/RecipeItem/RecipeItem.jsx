import React from 'react'
import { BsStar,BsHeart } from "react-icons/bs";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RecipeItem = ({recipe}) => {
    const {name,recipe_img,ingredients,cooking_method,rating}=recipe
    
    const handleFav=(e)=>{
        toast("The recipe is your favorite")
        e.target.setAttribute("disabled", true)
    }
    return (
        <div className="card mb-3 text-dark px-2">
            <div className="row g-0 d-flex align-items-top">
                <div className="col-md-4 mt-3">
                    <img src={recipe_img} className="img-fluid rounded" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6>Cooking Method</h6>
                        <p>{cooking_method}</p>
                        <h6>List of Ingredients</h6>
                        <ul>
                            {
                                ingredients.map((ingredient,i)=><li key={i}>{ingredient}</li>)
                            }
                        </ul>
                        <div className="card-footer d-flex justify-content-around align-items-center gap-5">
                        <button className="btn btn-small text-body-secondary d-flex align-items-center gap-1"><BsStar></BsStar>{rating}</button>
                        <button onClick={handleFav} className="btn btn-primary btn-small rounded d-flex align-items-center gap-1"><BsHeart title='Favorite'></BsHeart>15</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeItem