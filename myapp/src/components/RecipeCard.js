import React from 'react';
import {GiCheckMark} from 'react-icons/gi'
const RecipeCard = ({cuisineType,label,image,source,ingredientLines}) => (
<>
<div className="recipe-banner left-col">
        <span className='badge'>{cuisineType.toUpperCase()}</span>
        <h1>{label}</h1>
        <p><strong>Recipe by:</strong><small>{source}</small></p>
        <h3>Ingredients</h3>
        <div className='ingredients'>
               <ul>
               {
                ingredientLines.map((item,index)=>(
                <li key={index}><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>{item}</span></li>
                ))
                }
                </ul>
            </div>
            </div>
                <div className="recipe-banner right-col">
                    <div className="image-wrapper">
                    <img src={image} alt={label} />
                    </div>
            </div>
        </>
    
);
export default RecipeCard
