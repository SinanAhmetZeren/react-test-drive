import { GrOfflineStorage } from "react-icons/gr";
import { MdPlaylistRemove } from "react-icons/md";

function Storeit({ count, sliderValue }) {
  function localize() {
    localStorage.setItem("count", count);
    localStorage.setItem("sliderValue", sliderValue);
  }

  function removefromlocal() {
    localStorage.clear();
  }

  return (
    <div>
      <button
        className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 mx-5 border-b-4 border-orange-700 hover:border-orange-500 rounded "
        onClick={localize}
      >
        <GrOfflineStorage />
      </button>
      <button
        className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded"
        onClick={removefromlocal}
      >
        <MdPlaylistRemove />
      </button>
    </div>
  );
}

export default Storeit;
