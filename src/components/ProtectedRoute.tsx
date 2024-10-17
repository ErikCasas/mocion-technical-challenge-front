// /**
//  * @license
//  * Copyright 2023 Ada School
//  * Unauthorized copying of this file, via any medium is strictly prohibited
//  * Proprietary and confidential
//  */

// import { useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import { AppRoute } from "../AppRoute";
// import { useUser } from "../providers/useUser";
// import { UserRole } from "../schemaTypes";

// interface ProtectedRouteProps {
//   children: JSX.Element;
//   allowedRoles?: Array<UserRole>;
//   showUserMenus?: boolean;
// }

// export const ProtectedRoute = ({
//   children,
//   allowedRoles,
// }: ProtectedRouteProps): JSX.Element => {
//   if (!user) {
//     return (
//       <Navigate
//         to={{
//           pathname: AppRoute.Base,
//         }}
//         state={{
//           from: locationPathname,
//         }}
//       />
//     );
//   }

//   return children;
// };
