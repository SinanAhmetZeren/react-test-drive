import { useState } from "react";
import Slider from "./Slider";
import Timer from "../timer/Timer";
import NavElement from "../../navigation/NavElement";
import Storeit from "../../storeit/Storeit";

import { TiMinus, TiPlus } from "react-icons/ti";
import { GoPlusCircle, GoMinusCircle } from "react-icons/go";
import { LuMinusCircle } from "react-icons/lu";
import { GrOfflineStorage } from "react-icons/gr";

function Counter() {
  const [count, setCount] = useState(0);
  const [sliderValue, setSliderValue] = useState(1);

  // const [durationValue, setDurationValue] = useState(1);

  function decrementCount() {
    setCount((count) => count - 1);
  }
  function decrementCountByStep() {
    setCount((count) => count - sliderValue);
  }
  function incrementCount() {
    setCount((count) => count + 1);
  }
  function incrementCountbyStep() {
    setCount((count) => count + sliderValue);
  }
  function handleSliderChange(e) {
    setSliderValue(Number(e.target.value));
  }

  function handleResetAll(a) {
    setCount(a);
    setSliderValue(a);
  }

  // function handleDurationChange(e) {
  //   setDurationValue(Number(e.target.value));
  //   console.log("duration from slider: " + durationValue);
  // }

  /*
  useEffect(() => {
    console.log(
      "Count and sliderValue before re-render:" + count + " and " + sliderValue
    );
  }, [count, sliderValue]); 
  */

  return (
    <div>
      {/* <NavElement /> */}

      <div
        style={{
          backgroundColor: "lavender",
          padding: "3rem",
          margin: "2rem",
        }}
      >
        <Timer handleResetAll={handleResetAll} />
      </div>

      <div
        style={{
          backgroundColor: "aquamarine",
          padding: "3rem",
          margin: "2rem",
        }}
      >
        <Slider
          sliderValue={sliderValue}
          handleSliderChange={handleSliderChange}
        />

        <div className=" flex items-center justify-center">
          <button
            className="bg-orange-500 hover:bg-orange-400 text-white 
            font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded mx-1.5"
            onClick={decrementCountByStep}
          >
            <LuMinusCircle />
          </button>
          <button
            className="bg-orange-300 hover:bg-orange-200 text-white 
            font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded  mx-1.5"
            onClick={decrementCount}
          >
            <TiMinus />
          </button>
          <span className="text-3xl px-5 py-2">{count}</span>
          <button
            className="bg-green-300 hover:bg-green-200 text-white 
            font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded  mx-1.5"
            onClick={incrementCount}
          >
            <TiPlus />
          </button>
          <button
            className="bg-green-500 hover:bg-green-400 text-white 
            font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded  mx-1.5"
            onClick={incrementCountbyStep}
          >
            <GoPlusCircle />
          </button>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "palegoldenrod ",
          padding: "3rem",
          margin: "2rem",
        }}
      >
        <Storeit count={count} sliderValue={sliderValue} />
      </div>
    </div>
  );
}

export default Counter;
