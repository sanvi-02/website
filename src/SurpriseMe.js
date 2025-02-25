import React, { useState } from "react";
import "./SurpriseMe.css"; 

const surprises = [
  { type: "discount", message: "🎉 You got 20% OFF! Use Code: HOLI20" },
  { type: "discount", message: "🔥 Special Deal! 10% OFF! Use Code: HOLI10" },
  { type: "product", message: "🌈 Free Mystery Color Pack with your order!" },
  { type: "product", message: "🎁 Buy 2, Get 1 Free on Holi Colors!" },
];

const SurpriseMe = () => {
  const [surprise, setSurprise] = useState(null);

  const handleClick = () => {
    const randomSurprise = surprises[Math.floor(Math.random() * surprises.length)];
    setSurprise(randomSurprise);
  };

  return (
    <div className="surprise-container">
      <button onClick={handleClick} className="surprise-btn">🎊 Surprise Me!</button>
      {surprise && (
        <div className="surprise-box">
          <p>{surprise.message}</p>
          <button onClick={() => setSurprise(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default SurpriseMe;
