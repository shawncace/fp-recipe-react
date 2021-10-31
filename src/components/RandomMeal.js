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
        }catch(error){
            console.log(error)
        }

    
    }
    useEffect(()=>{
        getMealRequest()
    },[])

    return (  
        <> 
         <div>Random Meal</div>
         <h1>meal.strMeal</h1>
        </>
        
    );
}
 
export default RandomMeal;
