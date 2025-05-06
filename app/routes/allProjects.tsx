import { Link } from "react-router";
import { projects } from "~/projects";

// const allProjects = projects;

function AllProjects() {
  return (
    <div>
      {projects.map((project) => {
        return (
          <>
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <Link to={`/project/${project.id}`}>View</Link>
          </>
        );
      })}
    </div>
  );
}

export default AllProjects;
