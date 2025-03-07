const MiniManiCard = ({ polish, image }) => {
  return (
    // <div className="flex justify-start">
    <div className="flex flex-col items-center">
      {image ? (
        <img
          src={image}
          className="h-10 aspect-square object-cover overflow-hidden rounded-full"
        />
      ) : null}
      <span className="text-sm text-center">{polish}</span>
    </div>
    // </div>
  );
};

export default MiniManiCard;
