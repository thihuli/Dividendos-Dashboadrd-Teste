import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  
`;

export const BoxContainer = styled.div`
  width: 340px;
  height: 400px;
  background-color: #A0A0A0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
`;

export const BoxError = styled.div`
  /* width: 100%;
  height: 20px; */
  margin-top: 10px;

  > p {
    font-size: 15px;
    color: red;
    font-weight: bold;
  }

`;

export const LogoContainer = styled.div`
  margin-top: 50px;

  > img {
    height: 40px;
    object-fit: contain;
  }

`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  > label {
      margin-bottom: 5px;
      color: #fff;
      font-size: 16px;
  };

  > input {
      border-radius: 4px;
      border: 1px solid #BBBBBB;
      height: 16px;
      padding: 5px 10px;
  };

  > input:focus {
      outline: 0;
      border-color: #5988df;
  };

  > button {
    margin-top: 20px;
  }

  
`;
