import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FrontLayout } from "./components/layouts/FrontLayout";
import { Home } from "./pages/home/Home";
import ErrorPage from "./pages/error/ErrorPage";
import About from "./pages/about/About";
import Teams from "./pages/teams/Teams";
import Project from "./pages/project/Project";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AppRoute = (JSXtag: any) => (
  <FrontLayout>
    <JSXtag />
  </FrontLayout>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: AppRoute(Home),

    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: AppRoute(About),
  },
  {
    path: "/teams",
    element: AppRoute(Teams),
  },
  {
    path: "/project",

    element: AppRoute(Project),
  },
]);
const RoutesSwitch = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default RoutesSwitch;
