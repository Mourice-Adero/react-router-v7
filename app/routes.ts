import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), 
    route("/about", "./routes/about.tsx"),

    layout("./routes/projectLayout.tsx", [
    route("allprojects", "./routes/allProjects.tsx"),
    route("project/:pId", "./routes/project.tsx"),
  ]),
    
] satisfies RouteConfig;
