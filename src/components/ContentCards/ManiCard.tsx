const ManiCard = ({ polish, date, imageSrc, comment, href }) => {
  return (
    <a
      href={href}
      className="hover:cursor-pointer hover:bg-palePink p-4 rounded-lg hover:no-underline hover:text-black"
    >
      <div className="flex flex-col">
        {/* repeated code below */}
        <div className="h-52 aspect-square overflow-hidden rounded-2xl object-cover flex-shrink-0">
          <img src={imageSrc} alt="Manicure image" />
        </div>
        {/* todo: have an overlay on hover with the polish name, date, and
        comment rather than static */}
        <span className="font-medium text-sm mt-1">{polish}</span>
        <span className="text-sm">{date}</span>
        <span className="mt-2 italic text-sm text-darkGray w-40 line-clamp-2">
          {comment}
        </span>
      </div>
    </a>
  );
};

export default ManiCard;
