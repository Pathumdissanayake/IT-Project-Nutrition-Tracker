import React, { useState } from "react";
import "./search.css";
import nutritionix from "nutritionix-api";
function Search() {
  const YOUR_APP_ID = "436f9151"; //APP ID
  const YOUR_API_KEY = "5835401ca329013154367f0576490742"; //KEY
  nutritionix.init(YOUR_APP_ID, YOUR_API_KEY);

  const [search, setSearch] = useState(""); //state to save search quary
  const [food_name, setFdName] = useState(""); //state to save food names
  const [qty, setQty] = useState(""); //state to save food quantity
  const [calories, setCalories] = useState(""); //state to save calories
  const [totalFat, setTotalFat] = useState(""); //state to save fat
  const [totalCarb, setTotalCarb] = useState(""); //state to save carbs
  const [totalProtein, setTotalProtein] = useState(""); //state to save protein

  const [status, setStatus] = useState(false);

  function setStatusRes() {
    setStatus(true);
  }
  function sendSearchQuery(e) {
    e.preventDefault();
    nutritionix.natural
      .search(search)
      .then((result) => {
        setFdName(result.foods[0].food_name);
        setQty(result.foods[0].serving_qty);
        setCalories(result.foods[0].nf_calories);
        setTotalFat(result.foods[0].nf_total_fat);
        setTotalCarb(result.foods[0].nf_total_carbohydrate);
        setTotalProtein(result.foods[0].nf_protein);
      })
      .catch((err) => alert(err));
  }

  return (
    <div className="search-body-div">
      
      <form className="form-inline" onSubmit={sendSearchQuery}>
      <div className="search-div">
        <div className="search-body-secondary-div">
          <div className="form-group mx-sm-3 mb-2">
            <input
              type="text"
              id="inputfood"
              placeholder="        Search For Foods"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="search-body-secondary-div">
          <button type="submit" className="confirm-btn" onClick={setStatusRes}>
            {" "}
            Search{" "}
          </button>
        </div>
        </div>
      </form>
      

      <div className="result-div">
        <div className="search-results">
        <div className="fetch-data-body">
          {status && (
            
              <ul className="ul">
              <li className="li"><l className='item-name'>Food Item : </l>{food_name}</li>
              <li className="li"><l className='item-name'>Quantity : </l>{qty}</li>
              <li className="li"><l className='item-name'>Calories : </l>{calories}</li>
              <li className="li"><l className='item-name'>Carbs : </l>{totalCarb}</li>
              <li className="li"><l className='item-name'>Fat : </l>{totalFat}</li>
              <li className="li"><l className='item-name'>Protein : </l>{totalProtein}</li>
            </ul>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
