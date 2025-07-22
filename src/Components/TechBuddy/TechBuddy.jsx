import Query from "../query";
import "./TechBuddy.css";

const TechBuddy = ({ queries }) => {
  return (
    <div className="bg-container">
      <div className="content-container">
        <h1 className="heading">Tech Buddy</h1>
        <ul className="queries-list-container">
          {queries.map((eachObj) => (
            <Query key={eachObj.id} details={eachObj} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TechBuddy;
