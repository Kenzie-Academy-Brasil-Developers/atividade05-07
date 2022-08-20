import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-family: sans-serif;

  position: relative;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    background-color: rgb(200, 200, 200, 0.7);

    width: 25rem;
    height: max-content;

    border-radius: 1rem;

    padding: 2rem;
    gap: 1rem;

    input {
      width: 90%;
      height: 3rem;

      background-color: transparent;

      outline: 0;

      border-radius: 1rem;
      border: 2px solid white;
      color: rgb(6, 14, 70);
      font-size: 15px;
      font-weight: bold;
      padding-left: 1rem;
    }

    label {
      margin: 0 0 0 -19rem;
      color: white;
    }

    button {
      width: 95%;
      height: 3rem;

      margin-top: 1rem;
      border-radius: 1rem;
      border: unset;
      background-color: rgb(48, 57, 126);
      color: white;
      font-weight: bolder;
      cursor: pointer;
    }
  }
`;

export const Div = styled.div`
position: fixed;
width: 10rem;
height: 10rem;
position: relative;

button{
  position: absolute;
  bottom: 0; 
}
`
