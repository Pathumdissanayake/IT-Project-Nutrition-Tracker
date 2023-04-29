import React from "react";
import { useState } from "react";
import axios from "axios";
import "./AddNewDiary.css";

function AddNewDinner() {
  const [food_name, setFdName] = useState(""); //state to save food names
  const [calories, setCalories] = useState(""); //state to save calories
  const [totalFat, setTotalFat] = useState(""); //state to save fat
  const [totalCarb, setTotalCarb] = useState(""); //state to save carbs
  const [totalProtein, setTotalProtein] = useState(""); //state to save protein

  const [status, setStatus] = useState(true);
  
  const validateForm = () => {
    let isValid = true;
  
    if (!food_name) {
      isValid = false;
      alert("Enter Food Name First!")
    }
    return isValid;
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newNutritionD = {
        food_name,
        calories,
        totalFat,
        totalCarb,
        totalProtein,
      };

      axios
        .post("http://localhost:4000/dinner/createfooddiary", newNutritionD)
        .then(() => {
          setStatus(false);
          alert("Food Item Added");
          window.location.reload();
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  return (
    <div className="add-diary-form">
      {status && (
        <div>
          <h3 className="form-title">Create Diary</h3>
          <form onSubmit={onSubmit}>
            <div className="form-heading">
              <label>Food Name </label>

              <input
                type="text"
                name="foodname"
                onChange={(e) => {
                  setFdName(e.target.value);
                }}
              />
  
            </div>
            <div className="form-heading">
              <label>Total Calories </label>

              <input
                type="text"
                name="calorie"
                onChange={(e) => {
                  setCalories(e.target.value);
                }}
              />

            </div>

            <div className="form-heading">
              <label>Carbs</label>

              <input
                type="text"
                name="carbs"
                onChange={(e) => {
                  setTotalCarb(e.target.value);
                }}
              />
            </div>

            <div className="form-heading">
              <label>Fat</label>

              <input
                type="text"
                name="fat"
                onChange={(e) => {
                  setTotalFat(e.target.value);
                }}
              />
            </div>

            <div className="form-heading">
              <label>Protein</label>

              <input
                type="text"
                className="protein"
                onChange={(e) => {
                  setTotalProtein(e.target.value);
                }}
              />
            </div>

            <div className="form-heading">
              <div className="buttons">
                <div className="btn-div">
                  <button id="btn-post" type="submit">
                    Post
                  </button>
                  <button id="btn-cancel" type="submit">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddNewDinner;
