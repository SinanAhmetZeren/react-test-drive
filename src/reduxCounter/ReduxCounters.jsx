import { useDispatch, useSelector } from "react-redux";
import { countInc1, stepInc1 } from "./counter1Slice";
import { countInc2, stepInc2 } from "./counter2Slice";

function ReduxCounters() {
  const count1 = useSelector((store) => store.counter1.count1);
  const count2 = useSelector((store) => store.counter2.count2);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="mt-10 w-2/3 mx-auto text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        USING REDUX TOOLKIT - Store, slice, useSelector, useDispatch & THUNK ...
      </div>
      <div className="flex bg-cyan-200 items-center mt-6 justify-center p-3">
        <button
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => console.log(count1)}
        >
          {count1}
        </button>
        <button
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => dispatch(countInc1())}
        >
          counter 1 increase
        </button>
        <button
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => dispatch(stepInc1())}
        >
          step 1 increase
        </button>
      </div>
      <div className="flex bg-cyan-200 items-center mt-6 justify-center p-3">
        <button
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => console.log(count2)}
        >
          {count2}
        </button>
        <button
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => dispatch(countInc2())}
        >
          counter 2 increase
        </button>
        <button
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => dispatch(stepInc2())}
        >
          step 2 increase
        </button>
      </div>
    </div>
  );
}

export default ReduxCounters;
