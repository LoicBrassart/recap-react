import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function CocktailDetails() {
  const [cocktail, setCocktail] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(({ data }) => {
        setCocktail(data.drinks[0]);
      })
      .catch(() => {
        setError('I iz broken ! è_é');
      });
  }, []);

  if (error) {
    return <p>I&apos;z broken, please traï again leiter !</p>;
  }

  if (!cocktail) {
    return <p>I&apos;m searching, plz wait !</p>;
  }

  return (
    <>
      <h2>{cocktail.strDrink.toUpperCase()}</h2>
      <img src={cocktail.strDrinkThumb} alt="" />
      <p>{cocktail.strInstructionsFR || cocktail.strInstructions}</p>
    </>
  );
}
