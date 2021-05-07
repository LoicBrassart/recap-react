import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SCocktail from './style';

function Cocktail({ strDrink, strDrinkThumb, idDrink }) {
  return (
    <SCocktail>
      <Link to={`/${idDrink}`}>
        <figure>
          <img src={strDrinkThumb} alt="" />
          <figcaption>{strDrink}</figcaption>
        </figure>
      </Link>
    </SCocktail>
  );
}

Cocktail.propTypes = {
  strDrink: PropTypes.string.isRequired,
  strDrinkThumb: PropTypes.string.isRequired,
  idDrink: PropTypes.string.isRequired,
};

export default Cocktail;
