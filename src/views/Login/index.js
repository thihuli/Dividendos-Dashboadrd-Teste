import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import AppContext from '../../Context/hooks/AppContext';

import logo from '../../assets/img/logo-dividendos.png';

import * as S from './styles';

function initialState() {
  return {
    grant_type: 'password',
    username: '',
    password: '',
  };
};

function Login() {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const history = useHistory();
  const { token, setToken } = useContext(AppContext);

  const handleLogin = values => {
    api.post('/auth/login', values)
      .then(resp => {
        const  keyToken  = resp.data.value.token
        setToken(keyToken)
        history.push('/admin/dashboard');
        console.log(resp.data)
      })
      .catch((err) => {
        let respError = err.response.data.errorMessages;
        setError(respError);        
      }) 

  }
  function onChange(event) {
    const { value, name } = event.target;


    setValues({
      ...values,
      [name]: value
    });
  };


  function onSubmit(event) {
    event.preventDefault();

    handleLogin(values)

    setValues(initialState);
  };

  return (
    <S.Container>
      <S.BoxContainer>
        <S.LogoContainer>
          <img src={logo} />
        </S.LogoContainer>

        <form onSubmit={onSubmit}>
          <S.InputContainer>
            <label htmlFor="user">Usuário</label>
            <input
              id="user"
              type="email"
              name="username"
              onChange={onChange}
              value={values.username}
            />

            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={onChange}
              value={values.password}
            />

            <button type='submit' >Entrar</button>
          </S.InputContainer>
        </form>

          <S.BoxError>
            <p>{error}</p>
          </S.BoxError>
      </S.BoxContainer>
    </S.Container>
  );
}

export default Login;