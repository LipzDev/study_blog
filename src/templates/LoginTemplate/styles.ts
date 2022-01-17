import styled from "styled-components";

export const Container = styled.section`
  max-width: 1400px;
  width: 95%;
  margin: 0 auto;
`;

export const FlexContent = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 300px;

  input {
    padding: 20px;
    border: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  button {
    padding: 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
`;
