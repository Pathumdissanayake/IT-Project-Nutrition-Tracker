import React from "react";
import { useState } from "react";
import axios from "axios";
import "./AddNewDiary.css";

function AddNewBreakfast() {
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
    setStatus(false);
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
        .post("http://localhost:4000/breakfast/createfooddiary", newNutritionD)
        .then(() => {
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
              <label id="Card-h">Food Name </label>

              <input
              id="Card-b"
                type="text"
                name="foodname"
                onChange={(e) => {
                  setFdName(e.target.value);
                }}
              />

            </div>
            <div className="form-heading">
              <label id="Card-h">Total Calories </label>

              <input
                 id="Card-b"
                type="text"
                name="calorie"
                onChange={(e) => {
                  setCalories(e.target.value);
                }}
                onBlur={validateForm}
              />

            </div>

            <div className="form-heading">
              <label id="Card-h">Carbs</label>

              <input
                 id="Card-b"
                type="text"
                name="carbs"
                onChange={(e) => {
                  setTotalCarb(e.target.value);
                }}
                onBlur={validateForm}
              />

            </div>

            <div className="form-heading">
              <label id="Card-h">Fat</label>

              <input
                 id="Card-b"
                type="text"
                name="fat"
                onChange={(e) => {
                  setTotalFat(e.target.value);
                }}
                onBlur={validateForm}
              />

            </div>

            <div className="form-heading">
              <label id="Card-h">Protein</label>

              <input
                 id="Card-b"
                type="text"
                className="protein"
                onChange={(e) => {
                  setTotalProtein(e.target.value);
                }}
                onBlur={validateForm}
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

export default AddNewBreakfast;