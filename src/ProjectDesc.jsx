function ProjectDesc({ title, description }) {
  return (
    <div className="flex p-4">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default ProjectDesc;