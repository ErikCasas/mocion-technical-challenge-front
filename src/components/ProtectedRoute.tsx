import { Navigate } from "react-router-dom";
import { PublicRoute } from "../AppRoute";
import { useUser } from "../context/useUser";
import React from "react";

export const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const { user } = useUser();

  const locationPathname = window.location.pathname;

  if (!user) {
    return (
      <Navigate
        to={{
          pathname: PublicRoute.Base,
        }}
        state={{
          from: locationPathname,
        }}
      />
    );
  }

  return children;
};
