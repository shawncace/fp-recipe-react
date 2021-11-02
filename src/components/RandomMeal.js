import { useState, useEffect } from "react";

const API_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

const RandomMeal = () => {
    const [meal, setMeal]=useState(undefined)

    const getMealRequest = async()=>{
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

    useEffect(()=>{
        getMealRequest()
    },[]);

    const{
        strMeal,
        strMealThumb,
        strInstructions,
        strArea,
        strCategory
    } = meal;
    

    return (  
        <div className='meal'> 
         <div className='img-container'>
             <img src={strMealThumb} alt={strMeal} />
         </div>
         <div>
             <h2>{strMeal}</h2>
             <p>{strInstructions}</p>
             <ul>
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
        </div>
        
    );
}
 
export default RandomMeal;
