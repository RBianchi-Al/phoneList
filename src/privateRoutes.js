import { useAuth } from "./hooks/useAuth";

import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const {user} = useAuth();
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!user ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/"} />
        )
      }
    />
  );
};


export default PrivateRoute