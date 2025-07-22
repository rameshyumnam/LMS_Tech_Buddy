import TechBuddy from './Components/TechBuddy/TechBuddy';
import "./App.css";

const queries = [
  {
    id: 0,
    query: "What Is React?",
    reply:  "React is a JavaScript library developed by Facebook for building fast, interactive user interfaces. It allows developers to create reusable components that manage their own state."
  },
  {
    id: 1,
    query: "What are components in React?",
    reply:  "Components are the building blocks of a React application. They can be functional or class-based, and each represents a part of the UI that can be reused and managed independently."
  },
  {
    id: 2,
    query: " What is JSX?",
    reply:  "JSX (JavaScript XML) is a syntax extension that lets you write HTML-like code inside JavaScript. It's used with React to describe what the UI should look like."
  },
  {
    id: 3,
    query: "What is the difference between props and state?",
    reply:  "Props are read-only and passed from parent to child components. State is managed within a component and can change over time (using useState, for example)."
  },
  {
    id: 4,
    query: "What is the Virtual DOM?",
    reply:  "The Virtual DOM is a lightweight copy of the real DOM. React updates the Virtual DOM first, then efficiently updates the real DOM only where changes occurred. This improves performance."
  },
  {
    id: 5,
    query: "How does React handle events?",
    reply: "React uses synthetic events — a wrapper around the browser’s native events — to ensure consistent behavior across all browsers. Events are written in camelCase like onClick, onChange, etc."
  },
  {
    id: 5,
    query: " What are hooks in React?",
    reply: "Hooks are functions that let you use state and lifecycle features in functional components. Common hooks: useState() — for managing state, useEffect() — for side effects, useContext(), useRef(), etc."
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
