import React from "react";

// Internal dependencies
//
import HeadlineCard from "../../components/headline-card";
import InfoCard from "../../components/info-card";
import Button from "../../components/button";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__headline">
        <HeadlineCard>
          <h1>Trivia Game!</h1>
        </HeadlineCard>
      </div>
      <div className="homepage__instructions">
        <InfoCard>
          <p>Instructions will go here</p>
        </InfoCard>
      </div>
      <div className="homepage__tagline">
        <HeadlineCard>
          <h2>Can you score 100%?</h2>
        </HeadlineCard>
      </div>
      <div className="homepage__button">
        <Button text="Start Game" />
      </div>
    </div>
  );
};

export default Homepage;
