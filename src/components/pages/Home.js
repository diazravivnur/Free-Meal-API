import { API } from "../config/Api";
import { useState, useEffect } from "react";
import Logo from "../assets/logo-small.png";
import { Button, Table } from "react-bootstrap";

const Home = () => {
  const [Meals, setMeals] = useState("");

  const handleMeal = async () => {
    try {
      const response = await API.get("");
      setMeals(response.data.meals);
      //   console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleMeal();
  }, []);
  console.log("data meal kepanggil", Meals);

  return (
    <div>
      <img className="logo" src={Logo} alt="#" />
      <br></br>
      <Button
        onClick={() => {
          handleMeal();
        }}
        variant="outline-danger"
      >
        Are You Hungry? Click Me
      </Button>

      <div className="container">
        {Meals &&
          Meals.map((meal, index) => (
            <div key={meal.idMeal + index}>
              <div />
              <p>Food Name : {meal.strMeal}</p>
              <p>Food Origin : {meal.strArea}</p>
              <p>Food Category : {meal.strCategory}</p>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Ingridients</th>
                    <th>Measure</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
