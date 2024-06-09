import { useState } from "react";
import { stages } from "../data";
import StageButton from "./StageButton";

export default function Stages() {
  const [stage, setStage] = useState(0);

  return (
    <>
      <ul id="stage-buttons">
        {stages.map((currentStage) => (
          <li key={currentStage.id}>
            <StageButton
              name={currentStage.name}
              onClick={() => {
                setStage(currentStage.id);
              }}
              className={stage === currentStage.id && "active"}
            />
          </li>
        ))}
      </ul>
      <div>
        {stage === 0 ? (
          <p>Choose a stage of my coding life so far to read more about.↑</p>
        ) : (
          <>
            <h3>{stages[stage - 1].title}</h3>
            <p>{stages[stage - 1].text}</p>
          </>
        )}
      </div>
    </>
  );
}
