const MiniManiCard = ({ polish, image }) => {
  return (
    // <div className="flex justify-start">
    <div className="h-full flex flex-col items-center">
      {image ? (
        <div className="min-w-10 min-h-10 rounded-full overflow-hidden">
          <img
            src={image}
            className="h-10 aspect-square object-cover overflow-hidden rounded-full"
          />
        </div>
      ) : null}
      <span className="text-sm text-center">{polish}</span>
    </div>
    // </div>
  );
};

export default MiniManiCard;
