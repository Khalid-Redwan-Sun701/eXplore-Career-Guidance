import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  console.log('Private Route User', user);

  const location = useLocation();
  console.log(location); // private route er kothay jete chaisilam shetar pathname pawa jabe

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate state={{ from: location.pathname }} to="/login" />;
  }

  return children;
};

export default PrivateRoute;
