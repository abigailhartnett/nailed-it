const PieChart = () => {
  const options = [{ polish: 'Blue Ice', colorFamily: 'blue', finish: '' }];

  return (
    <>
      <div className="h-52 w-52 rounded-full bg-mediumGray"></div>
      {/* Labels */}
      <div className="flex gap-2">
        <div className="flex gap-1 items-center">
          <div className="h-2 w-2 bg-blue rounded-full"></div>
          <span className="text-xs">Blue</span>
        </div>

        <div className="flex gap-1 items-center">
          <div className="h-2 w-2 bg-emerald-600 rounded-full"></div>
          <span className="text-xs">Green</span>
        </div>

        <div className="flex gap-1 items-center">
          <div className="h-2 w-2 bg-yellow-400 rounded-full"></div>
          <span className="text-xs">Yellow</span>
        </div>

        <div className="flex gap-1 items-center">
          <div className="h-2 w-2 bg-yellow-700 rounded-full"></div>
          <span className="text-xs">Neutral</span>
        </div>
        {/* End Labels */}
      </div>
    </>
  );
};

export default PieChart;
