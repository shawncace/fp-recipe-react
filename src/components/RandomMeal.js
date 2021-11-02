import { useState, useEffect } from "react";



const RandomMeal = () => {
    const [meal, setMeal]=useState(undefined)
    const[searchValue, setSearchValue]=useState('')
    

    const getMealRequest = async(searchValue)=>{
        const API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
        console.log(API_URL)
        try{
        const response = await fetch(API_URL)
        const data = await response.json()
            console.log(data)
            console.log(data.meals[0].strMeal)
            setMeal(data.meals[0])
        } catch(error){
            console.log(error)
        }
        
    };

    

    function handleClick(){
        getMealRequest(searchValue)
        
    }

    

    

    
    

    return (  
        <div>
            <input onChange={(event)=>setSearchValue(event.target.value)}/>

            <button onClick={handleClick}>Go</button>
        </div>
        
    );
}
 
export default RandomMeal;

{/* <div className='meal'> 
         <div className='img-container'>
             <img src={strMealThumb} alt={strMeal} />
         </div>
         <div>
             <h2 className='meal-title'>{strMeal}</h2>
             <p className='meal-instruction'>{strInstructions}</p>
             <ul className='meal-info'>
                 <li>
                     Category:
                     <strong>{strCategory}</strong>
                 </li>
                 <li>
                     Area:
                    <strong>{strArea}</strong>
                 </li>
             </ul>
         </div>
        </div> */}