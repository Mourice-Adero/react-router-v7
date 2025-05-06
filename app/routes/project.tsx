import { projects } from "./../projects";
import type { Route } from "../+types/root";

export async function getProject(projectId: Number) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) {
    throw new Error(`Project with id ${projectId} not found`);
  }
  return project;
}

export async function loader({ params }: Route.LoaderArgs) {
  const project = await getProject(Number(params.pId));
  return project;
}

function project({ loaderData }: Route.ComponentProps) {
  const { name, description } = loaderData;
  return (
    <div>
      <h5>{name}</h5>
      <p>{description}</p>
    </div>
  );
}

export default project;
