import "./Project.css";
function Project(props) {
  return (
    <div className="box">
      <img className="projimg" src={props.img} />
      <h2 className="projectname">{props.name}</h2>
      <p className="projectdes">{props.description}</p>
      <a src={props.link} className="gotoproj">
        Megnez
      </a>
    </div>
  );
}

export default Project;
