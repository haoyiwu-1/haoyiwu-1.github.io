function ProjectDesc({ title, description }) {
  return (
    <div className="flex flex-col py-4">
      <h1 className="font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default ProjectDesc;