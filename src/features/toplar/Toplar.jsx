import { useState } from "react";
import { useToplar } from "./useToplar";

function Toplar() {
  const { fetchTop } = useToplar();
  const [url, setUrl] = useState("");
  const [number, setNumber] = useState(1);

  async function handleFetchTop(number) {
    const fetchedUrl = await fetchTop(number);
    setUrl(fetchedUrl);
  }

  return (
    <div className="flex items-center justify-center mt-7 space-x-10">
      <div className="w-1/3 bg-cyan-300 p-5 rounded-xl">
        <button
          className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => handleFetchTop(number)}
        >
          Fetch Yeni imaj
        </button>

        <input
          className="w-full h-3 bg-yellow-200 rounded-lg appearance-none cursor-pointer"
          type="range"
          min="1"
          max="10"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        <span>{number}</span>
      </div>
      <div className="w-1/3  bg-orange-300 p-5 rounded-xl">
        {url ? <img className="h-40" src={url} alt=""></img> : <div></div>}
      </div>
    </div>
  );
}

export default Toplar;
