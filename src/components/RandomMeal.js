import { useState, useEffect } from "react";

const API_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

const RandomMeal = () => {
    const [meal, setMeal]=useState({})

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
        <>
        {meal ? (
        
        <div className='meal'> 
         <div className='img-container'>
             <img src={meal.strMealThumb} alt={meal.strMeal} />
         </div>
         <div className='meal-details'>
             <h2 className='meal-title'>{strMeal}</h2>
             <p className='meal-instruction'>{strInstructions.substring(0, 150) + '...'}</p>
             <ul className='meal-info'>
                 <li>
                     Category:
                     <strong>{meal.strCategory}</strong>
                 </li>
                 <li>
                     Area:
                    <strong>{meal.strArea}</strong>
                 </li>
             </ul>
         </div>
        </div>):(
            null
        )}
        </>
        
    );
}
 
export default RandomMeal;
