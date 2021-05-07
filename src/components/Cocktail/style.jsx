import styled from 'styled-components';

const SCocktail = styled.li`
  box-sizing: border-box;
  width: 25%;
  list-style-type: none;
  margin: 0;

  figure {
    position: relative;

    img {
      width: 100%;
    }

    figcaption {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 2rem;
      background-color: rgb(255, 75, 75);
      opacity: 0;
      text-align: center;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

export default SCocktail;
