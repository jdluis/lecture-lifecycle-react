import { useEffect, useState } from "react";

function Timer(props) {
  const [timeValue, setTimeValue] = useState(0);

  //! Ejemplo funcional de timer sin useEffect
  /* const handleTimerRender = () => {
    setInterval(() => {
      setTimeValue((actualTimeValue) => actualTimeValue + 1);
    }, 1000);
  };

  if (props.start) {
    handleTimerRender();
  } */

  //! Ejemplo de useEffect separado
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

  //! Ejemplo efectivo y eficente con useEffect
  
  useEffect(() => {
    console.log("Compomemt Did Mount");

   const intervalTimer = setInterval(() => {
      console.log("Compomemt Did Update");
      setTimeValue((actualTimeValue) => actualTimeValue + 1);
    }, 1000);

    return () => {
      console.log("Compomemt Did Unmount");
      clearInterval(intervalTimer)
    };
  }, [props.start]);

  return (
    <div>
      <h3>{timeValue}</h3>
    </div>
  );
}

export default Timer;
