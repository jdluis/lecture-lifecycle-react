import { useState } from "react";
import Timer from "./Timer";

function TimerControl() {
  const [toggleShow, setToggleShow] = useState(false);

  const handleToggle = () => {
    setToggleShow(!toggleShow);
  };

  return (
    <div>
      <h4>Controll of Timer</h4>
      <button onClick={handleToggle}>
        {toggleShow ? "Hide Timer" : "Show Timer"}
      </button>

      {toggleShow === true && <Timer start={toggleShow} />}
    </div>
  );
}

export default TimerControl;
