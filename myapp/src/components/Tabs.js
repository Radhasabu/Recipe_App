import React,{useState,useEffect} from 'react'
import {CiPizza} from 'react-icons/ci'
import {GiFruitBowl , GiNoodles,GiCheckMark} from 'react-icons/gi'
import {MdOutlineIcecream} from 'react-icons/md'
import { fetchTabData } from '../Service';

function Tabs(props) {
    const [active,setActive]=useState('Pizza');
    const [tabData, setTabData]=useState('');
    const [tabLabel,setTabLabel]=useState([{
        name: 'Pizza',
        icons: <CiPizza/>,
        id: 'e42c4256f3678f7327d13ec4f7a43c0f',
    },
    {
        name: 'Noodles',
        icons: <GiNoodles/>,
        id: '8ef9df56fb092bf9f50855b0053073a5',
    },
    {
        name: 'Desert',
        icons: <GiFruitBowl />,
        id: 'b58bf856b60b367a867ff115a605f28d',
    },
    {
        name: 'IceCream',
        icons: <MdOutlineIcecream/>,
        id: '4ac7df68e8bf110002b83c2169c772d6',
    },
])
const handleClick = (name,id)=>{
    setActive(name);
    fetchTabData(id).then((response)=>{
        setTabData(response);
        props.setLoader(false);
        }
    )
}
useEffect(()=>{
    fetchTabData(tabLabel[0].id).then((response)=>{
        setTabData(response);
        // console.log(response);
        props.setLoader(false);
    })
},[]);
    return (
        <div className="container">
        <h1 className='recipeHeading'>What would you like to have!</h1>
        <div className="tabs">
            {
                tabLabel.map((item,index)=>(
                    <div key={index} onClick={()=>(handleClick(item.name,item.id), props.setLoader(true))} className= {`tablist ${active===item.name ? 'active':""}`}>
                        {item.icons}
                        <span>{item.name}</span>
                </div>
                ))
            }
            
        </div>
        <div className='recipe_banner'>
            {
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

export default Tabs