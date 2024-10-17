import { Route, Routes } from "react-router-dom";
import { AppRoute, PublicRoute } from "./AppRoute";
import { lazy } from "react";
import { PageLayout } from "./components/PageLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";

const HomePage = lazy(() => import("./pages/HomePage"));
const Comics = lazy(() => import("./pages/Comics/Comics"));
const Comic = lazy(() => import("./pages/Comic/Comic"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));

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

      <Route
        path={`${AppRoute.Comic}/:comicId`}
        element={
          <PageLayout>
            <ProtectedRoute>
              <Comic />
            </ProtectedRoute>
          </PageLayout>
        }
      />

      <Route
        path={`${AppRoute.Favorites}`}
        element={
          <PageLayout>
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          </PageLayout>
        }
      />
    </Routes>
  );
};
