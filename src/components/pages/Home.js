import { API } from "../config/Api";
import { useState, useEffect } from "react";
import Logo from "../assets/logo-small.png";
import { Button, Table } from "react-bootstrap";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import youtubeGetID from "../../utils/youtube";

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
              <div
                className="header"
                // style={{ backgroundImage: `url(${meal.strMealThumb})` }}
              >
                <p>Food Name : {meal.strMeal}</p>
                <p>Food Origin : {meal.strArea}</p>
                <p>Food Category : {meal.strCategory}</p>
                {/* <img src={meal.strMealThumb} className="img-dono"></img> */}
              </div>
              <Table
                striped
                bordered
                hover
                style={{
                  backgroundImage: `url(${meal.strMealThumb})`,
                  opacity: "0.75",
                }}
              >
                <thead>
                  <tr>
                    <th>Ingridients</th>
                    <th>Measure</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{meal.strIngredient1}</td>
                    <td>{meal.strMeasure1}</td>
                  </tr>
                  <tr>
                    <td>{meal.strIngredient2}</td>
                    <td>{meal.strMeasure2}</td>
                  </tr>{" "}
                  <tr>
                    <td>{meal.strIngredient3}</td>
                    <td>{meal.strMeasure3}</td>
                  </tr>{" "}
                  <tr>
                    <td>{meal.strIngredient4}</td>
                    <td>{meal.strMeasure4}</td>
                  </tr>{" "}
                  <tr>
                    <td>{meal.strIngredient5}</td>
                    <td>{meal.strMeasure5}</td>
                  </tr>{" "}
                  <tr>
                    <td>{meal.strIngredient6}</td>
                    <td>{meal.strMeasure6}</td>
                  </tr>
                  <tr>
                    <td>{meal.strIngredient7}</td>
                    <td>{meal.strMeasure7}</td>
                  </tr>
                  <tr>
                    <td>{meal.strIngredient8}</td>
                    <td>{meal.strMeasure8}</td>
                  </tr>{" "}
                  <tr>
                    <td>{meal.strIngredient9}</td>
                    <td>{meal.strMeasure9}</td>
                  </tr>{" "}
                  <tr>
                    <td>{meal.strIngredient10}</td>
                    <td>{meal.strMeasure10}</td>
                  </tr>
                </tbody>
              </Table>
              <p>How to Make it : {meal.strInstructions}</p>
              <p>
                Food Web Source : <a href={meal.strSource}>{meal.strSource}</a>
              </p>
              <p>Food Video:</p>{" "}
              <div>
                <LiteYouTubeEmbed
                  id={youtubeGetID(meal.strYoutube)}
                  title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
