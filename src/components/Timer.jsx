import { useEffect, useState } from "react";

function Timer(props) {
  const [timeValue, setTimeValue] = useState(0);

  //! Example funcional de timer sin useEffect
  /* const handleTimerRender = () => {
    setInterval(() => {
      setTimeValue((actualTimeValue) => actualTimeValue + 1);
    }, 1000);
  };

  if (props.start) {
    handleTimerRender();
  } */

  //! Teory of lifecycle with useEffect
  /*  useEffect(() => {
    console.log("Compomemt Did Mount");
  }, []);

  useEffect(() => {
    console.log("Compomemt Did Update");
  }, [timeValue]);

  useEffect(() => {
    return () => {
      console.log("Compomemt Did Unmount");
    };
  }, []);
 */

  //! Example with useEffect

  useEffect(() => {
    console.log("Compomemt Did Mount");

    const intervalTimer = setInterval(() => {
      console.log("Compomemt Did Update");
      setTimeValue((actualTimeValue) => actualTimeValue + 1);
    }, 1000);

    return () => {
      console.log("Compomemt Did Unmount");
      clearInterval(intervalTimer);
    };
  }, [props.start]);

  return (
    <div>
      <h3>{timeValue}</h3>
    </div>
  );
}

export default Timer;
