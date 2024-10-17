import { Route, Routes } from "react-router-dom";
import { AppRoute, PublicRoute } from "./AppRoute";
import { lazy } from "react";
import { PageLayout } from "./components/PageLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";

const HomePage = lazy(() => import("./pages/HomePage"));
const Comics = lazy(() => import("./pages/Comics/Comics"));

export const Router = () => {
  return (
    <Routes>
      <Route path={PublicRoute.Base} element={<HomePage />} />

      <Route
        path={AppRoute.Comics}
        element={
          <PageLayout>
            <ProtectedRoute>
              <Comics />
            </ProtectedRoute>
          </PageLayout>
        }
      />
    </Routes>
  );
};
