import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AppContenxt from '../../src/Context/hooks/AppContext';

const RoutesPrivate = ({ component: Component, ...rest}) => {
  const { token } = useContext(AppContenxt);

  return (
    <Route
      {...rest}
      render={() => token
        ? <Component {...rest} />
        : <Redirect to="/login" />
      }
    />
  )
}

export default RoutesPrivate;