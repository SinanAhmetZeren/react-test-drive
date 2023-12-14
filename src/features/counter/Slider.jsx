function Slider({ sliderValue, handleSliderChange }) {
  return (
    <div>
      <div>
        <input
          className="w-full h-3 bg-yellow-200 rounded-lg appearance-none cursor-pointer"
          type="range"
          min="0"
          max="10"
          value={sliderValue}
          onChange={handleSliderChange}
        />
        <span>{sliderValue}</span>
      </div>
    </div>
  );
}

export default Slider;
