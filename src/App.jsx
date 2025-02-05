/* eslint-disable no-unused-vars */
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Card = ({ name }) => {
  const [hasLiked, setHasLiked] = useState(false);
  return (
    <div className="card">
      <h2>{name}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "❤️" : " 🤍"}
      </button>
    </div>
  );
};
const App = () => {
  return (
    <div className="card-container">
      <Card name="Star Wars" />
      <Card name="Avatar" />
      <Card name="Lion King" />
    </div>
  );
};

export default App;
