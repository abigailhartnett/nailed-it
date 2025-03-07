const SingleBarChart = ({ label, start, end, color, backgroundColor }) => {
  // Repeated code
  const colors = {
    green: 'bg-gradient-to-br from-mediumGreen to-mediumBlue',
    purple: 'bg-gradient-to-br from-lightPurple to-mediumPurple',
    pink: 'bg-gradient-to-br from-mediumPink to-darkPink',
    pinkPurple: 'bg-gradient-to-br from-pink to-purple',
    orange: 'bg-gradient-to-br from-mediumOrange to-darkOrange',
    greenBlue: 'bg-gradient-to-br from-green to-mediumBlue',
  };

  const barColor = color ? colors[color] : colors.pinkPurple;

  const bgColor = backgroundColor ? `bg-${backgroundColor}` : 'bg-lightGray';

  return (
    <div
      className={`my-2 flex flex-col gap-1 relative ${bgColor} w-full rounded-lg p-2`}
    >
      <span className="text-xs text-darkGray my-2">{label}</span>
      <div className="relative">
        <div
          className={`h-2 w-2/3 relative rounded-full ${barColor} z-10`}
        ></div>
        <div className="bg-mediumGray h-2 w-full rounded-full relative -top-2"></div>
      </div>
      <div className="flex justify-between">
        <span className="text-xs text-darkGray">{start}</span>
        <span className="text-xs text-darkGray">{end}</span>
      </div>
    </div>
  );
};

export default SingleBarChart;
