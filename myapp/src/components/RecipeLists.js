import React,{useEffect,useState} from 'react'
import {BsSearch} from 'react-icons/bs';
import { fetchData,fetchTabData } from '../Service';
import RecipeCard from './RecipeCard';
import {GiCheckMark} from 'react-icons/gi'
function RecipeLists(props) {
    const [searchTerm,setSearchTerm] = useState('');
    const [query,setQuery] = useState('pizza');
    const [data,setData] = useState('');
    const [tabData,setTabData]=useState('');
    const searchRecipe = (searchQuery)=>{
        fetchData(searchQuery).then((response)=>{
            setData(response);
            // console.log(response);
            // console.log(data);
            props.setLoader(false);
        })

    }
    useEffect(()=>{
        fetchData(query).then((response)=>{
            setData(response);
            // console.log(response);
            props.setLoader(false);
        })
    },[query])
  return (
    <div className='container'>
        <div className='heading-line'>
            <strong>Search Recipes</strong>
            <div className='input-wrapper' >
                <input onChange={(e)=>setSearchTerm(e.target.value)} 
                type="text"
                value={searchTerm} 
                placeholder='Search Item Recipe' />
                <button onClick={()=>(searchRecipe(searchTerm),props.setLoader(true))}><BsSearch /></button>
            </div> 
        </div>
        <div className='flexbox'>
            {
                data && data.hits.map((item,index)=>(
                    // <RecipeCard 
                    // key={index} 
                    // cuisineType={item.recipe.cuisineType[0]} 
                    // label={item.recipe.label} 
                    // image={item.recipe.image} 
                    // source={item.recipe.source} 
                    // ingredientLines={item.recipe.ingredientLines} />
                    <div key={index} className='flexItem'>
                        <div className='img-wrapper'>
                            <button className='img-button' onClick={()=>setTabData(item)}>
                            <img src={item.recipe.image} alt={item.recipe.label}/>
                            </button>
                        </div>
                        <p>{item.recipe.label}</p>
                    </div>
                ))
            }
        </div>
        <div className= { `${tabData!=='' ? 'recipe_banner':""}`}>
            {
                //'recipe_banner'
                tabData!=='' && <>
                    <div className="left-col">
                    <span className='badge'>{tabData.recipe.cuisineType[0].toUpperCase()}</span>
                    <h1>{tabData.recipe.label}</h1>
                    <p><strong>Recipe by:</strong><small>{tabData.recipe.source}</small></p>
                    <h3>Ingredients</h3>
                    <div className='ingredients'>
                        <ul>
                            {
                                tabData.recipe.ingredientLines.map((item,index)=>(
                                    <li key={index}><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>{item}</span></li>
                                ))
                            }
                            
    
                        </ul>
                    </div>
                </div>
                <div className="right-col">
                    <div className="image-wrapper">
                    <img src={tabData.recipe.image} alt={tabData.recipe.label} />
                    </div>
                </div>
                </>
            }
        </div>
    </div>
  )
}

export default RecipeLists