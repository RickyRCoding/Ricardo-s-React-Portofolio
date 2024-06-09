export default function Project({ project }) {
  return (
    <div className="project">
      <img src="" alt="" />
      <h3>{project.name}</h3>
      <p>{project.desctiption}</p>
      <a href={project.link}>View Project</a>
    </div>
  );
}
