import TechBuddy from './Components/TechBuddy/TechBuddy';
import "./App.css";

const queries = [
  {
    id: 0,
    query: "What Is React?",
    reply:  "It is a JavaScript Library for building user interfaces."
  },
  {
    id: 1,
    query: "What Is HTML?",
    reply:  "It is Hypet text markup language"
  },
  {
    id: 2,
    query: "What Is Redux?",
    reply:  "It is a Redux."
  },
  {
    id: 3,
    query: "What Is JS?",
    reply:  "It is a JavaScript."
  },
  {
    id: 4,
    query: "What Is css?",
    reply:  "It is Cascading style sheet."
  },
]

const App = () => {
  return (
    <>
      <TechBuddy queries={queries} />
    </>
  )
}

export default App
