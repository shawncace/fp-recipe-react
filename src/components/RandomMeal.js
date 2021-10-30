import { useState } from "react";

const API_URL = 'www.themealdb.com/api/json/v1/1/random.php';

const RandomMeal = () => {
    const [meal, setMeal]=useState(undefined)

    return (  
        <div>Random Meal</div>
    );
}
 
export default RandomMeal;
