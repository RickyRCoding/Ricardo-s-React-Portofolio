import Project from "./Project";
import { projects } from "../data";

export default function Projects() {
  return (
    <>
      <h2>Projects</h2>
      <p>
        I've have done much over a 100 projects during the past years in my
        coding journey (
        <a href="https://github.com/RickyRCoding">
          Click here to see my GitHub account.
        </a>
        ). Here is a list of the projects that I am most proud of:
      </p>
      <div className="projects-section">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
