import { lazy } from "react";
import { IRouteProps } from "src/modules";

export const route = "/";

const HomeRoute: IRouteProps = {
  path: route,
  exact: true,
  component: lazy(() => import("src/modules/Home")),
  name: "Home",
};

export default HomeRoute;
