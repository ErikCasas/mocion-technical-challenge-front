import { Route, Routes } from "react-router-dom";
import { PublicRoute } from "./AppRoute";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));

export const Router = () => {
  return (
    <Routes>
      <Route path={PublicRoute.Base} element={<HomePage />} />
    </Routes>
  );
};
