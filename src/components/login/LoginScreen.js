import React, { useContext } from "react";
import { AuthContext } from './../../auth/AuthContext';
import { types } from './../../types/types';

export const LoginScreen = ({ history }) => {

  const {dispatch} = useContext(AuthContext);

  const handleLogin = () => {
    // Usar push para avanzar a otra pagina y se puede retroceder
    //history.push("/");
    
    // Usar replace para reemplazar a otra pagina y no se puede retroceder
    //history.replace("/");

    const lastPath = localStorage.getItem('lastPath') || '/';

    const action = {
      type: types.login,
      payload: {name:"Lisanny"},
    };

    dispatch(action);

    history.replace(lastPath);

  };

  return (
    <div className="container mt-5">
      <h1>Login Screen</h1>

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
