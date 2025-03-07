const SingleBarChart = ({ label, start, end }) => {
  return (
    <div className="my-2 flex flex-col gap-1 relative bg-lightGray w-full rounded-lg p-2">
      <span className="text-xs text-darkGray my-2">{label}</span>
      <div className="relative">
        <div className="h-2 w-2/3 relative rounded-full bg-gradient-to-br from-pink to-purple z-10"></div>
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
