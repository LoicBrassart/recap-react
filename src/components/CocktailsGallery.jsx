import { useEffect, useState } from 'react';
import axios from 'axios';
import Cocktail from './Cocktail';

function CocktailsGallery() {
  const [cocktails, setCocktails] = useState([]);
  const [choiceAlcohol, setChoiceAlcohol] = useState('Non_Alcoholic');

  const handleChangeAlcohol = (event) => {
    setChoiceAlcohol(event.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${choiceAlcohol}`
      )
      .then(({ data }) => {
        setCocktails(data.drinks);
      });
  }, [choiceAlcohol]);

  return (
    <>
      <h2>Cocktails</h2>
      <select onChange={handleChangeAlcohol}>
        <option value="Non_Alcoholic">Sans alcool</option>
        <option value="Alcoholic">Avec alcool</option>
      </select>
      <ul>
        {cocktails.map((cocktail) => {
          return <Cocktail {...cocktail} />;
        })}
      </ul>
    </>
  );
}
export default CocktailsGallery;
