import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Params() {
  const [paramsDegeri, setParamsDegeri] = useState();
  const { paramsDegeri: paramValue } = useParams();

  useEffect(() => {
    // Update the state inside the useEffect to avoid causing too many renders
    setParamsDegeri(paramValue);
  }, [paramValue]); // Only re-run the effect when paramValue changes

  return (
    <div className="mt-8 w-2/3 mx-auto bg-teal-200 p-5 rounded-lg">
      <div className="bg-green-300 w-3/4 mx-auto p-3 text-yellow-700 rounded-lg">
        Url'den gelen ParamsDeğeri: {paramsDegeri}
      </div>
    </div>
  );
}

export default Params;
