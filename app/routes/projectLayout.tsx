import { Outlet } from "react-router";

function ProjectLayout() {
  return (
    <>
      <h3>My Projects</h3>
      <Outlet />
    </>
  );
}

export default ProjectLayout;
