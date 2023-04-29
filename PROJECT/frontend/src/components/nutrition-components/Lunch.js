import React from "react";
import "./Category.css";
import Search from "./Search";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AddNewDiary from "./AddNewLunch";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Table } from "react-bootstrap";

function Lunch() {
  const [nutrition, setNutrition] = useState([]);
  const [status, setStatus] = useState(false);
  const [statusAdd, setStatusAdd] = useState(true);

  function setFormStatus() {
    setStatus(true);
    setStatusAdd(false);
  }

  //Read operation
  useEffect(() => {
    function GetNutrition() {
      //JWT use krnna methna
      axios
        .get("http://localhost:4000/lunch/counter")
        .then((res) => {
          setNutrition(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    GetNutrition();
  }, []);

  //update functions
  //calorie count update
  const updateCalorie = (id) => {
    const newCalories = prompt("Enter new calorie value : ");
    const updateData = { id: id, calories: newCalories };

    axios
      .put(`http://localhost:4000/lunch/counterupdate/${id}`, updateData)
      .then((res) => {
        console.log(res.data);
        // refresh the nutrition data to reflect changes
        axios
          .get("http://localhost:4000/lunch/counter")
          .then((res) => {
            setNutrition(res.data);
          })
          .catch((err) => {
            alert(err.message);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //carbs count update
  const updateCarb = (id) => {
    const newCarb = prompt("Enter new carb value : ");
    const updateData = { id: id, totalCarb: newCarb };

    axios
      .put(`http://localhost:4000/lunch/counterupdate/${id}`, updateData)
      .then((res) => {
        console.log(res.data);
        // refresh the nutrition data to reflect changes
        axios
          .get("http://localhost:4000/lunch/counter")
          .then((res) => {
            setNutrition(res.data);
          })
          .catch((err) => {
            alert(err.message);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //fat count update
  const updateFat = (id) => {
    const newFat = prompt("Enter new fat value : ");
    const updateData = { id: id, totalFat: newFat };

    axios
      .put(`http://localhost:4000/lunch/counterupdate/${id}`, updateData)
      .then((res) => {
        console.log(res.data);
        // refresh the nutrition data to reflect changes
        axios
          .get("http://localhost:4000/lunch/counter")
          .then((res) => {
            setNutrition(res.data);
          })
          .catch((err) => {
            alert(err.message);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //protein count update
  const updateProtein = (id) => {
    const newProtein = prompt("Enter new protein value : ");
    const updateData = { id: id, totalProtein: newProtein };

    axios
      .put(`http://localhost:4000/lunch/counterupdate/${id}`, updateData)
      .then((res) => {
        console.log(res.data);
        // refresh the nutrition data to reflect changes
        axios
          .get("http://localhost:4000/lunch/counter")
          .then((res) => {
            setNutrition(res.data);
          })
          .catch((err) => {
            alert(err.message);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //delete function
  const DeleteFood = async (foodId) => {
    try {
      await axios.delete(`http://localhost:4000/lunch/delete/${foodId}`);
      const updatedNutrition = nutrition.filter(
        (nutri) => nutri._id !== foodId
      );
      setNutrition(updatedNutrition);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="category-body">
      <div className="heading-div">
        <h1 className="heading-txt">Lunch Diary</h1>
      </div>

      <div className="this-needs-to-devide-into-two">
        <div className="first-one-for-read-table">
          <Table>
            <thead class="bg-warning">
              <tr>
                <th>Food Item</th>
                <th>Calories</th>
                <th>Carbs</th>
                <th>Fat</th>
                <th>Protein</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {nutrition.map((nutri) => (
                <tr>
                  <td>{nutri.food_name}</td>
                  <td>
                    <button
                      className="btn-edit"
                      onClick={() => {
                        updateCalorie(nutri._id);
                      }}
                    >
                      <EditIcon />
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {nutri.calories}
                  </td>
                  <td>
                    <button
                      className="btn-edit"
                      onClick={() => {
                        updateFat(nutri._id);
                      }}
                    >
                      <EditIcon />
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {nutri.totalFat}
                  </td>
                  <td>
                    <button
                      className="btn-edit"
                      onClick={() => {
                        updateCarb(nutri._id);
                      }}
                    >
                      <EditIcon />
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {nutri.totalCarb}
                  </td>
                  <td>
                    <button
                      className="btn-edit"
                      onClick={() => {
                        updateProtein(nutri._id);
                      }}
                    >
                      <EditIcon />
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {nutri.totalProtein}
                  </td>
                  <td>
                    <div className="btn-div">
                      <button
                        className="btn-delete"
                        onClick={() => {
                          DeleteFood(nutri._id);
                        }}
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="second-one-for-calorie-search-bar">
          <div className="calorie-search-heading-div">
            <h4 className="heading-calorie-search-txt">Calorie Calculator</h4>
          </div>
          <div className="search-bar-div">
            <Search />
          </div>
        </div>
      </div>

      <div className="add-diary-btn-div">
        {statusAdd && (
          <button className="Add-diary" onClick={setFormStatus}>
            Add Diary
          </button>
        )}
      </div>

      <div className="Add-form-div">{status && <AddNewDiary />}</div>

      <div className="view-analysis-btn-div">
        <Button
          as={Link}
          to="/lunch/viewanalysis"
        >
          View Analysis
        </Button>
      </div>
    </div>
  );
}

export default Lunch;
