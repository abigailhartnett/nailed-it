const ManiCard = ({ polish, date, imageSrc, comment, href }) => {
  return (
    <a href={href} className="hover:cursor-pointer">
      <div className="flex flex-col">
        {/* repeated code below */}
        <div className="xs:h-24 xs:w-24 sm:h-32 sm:w-32 md:h-42 md:w-42 lg:h-60 lg:w-60 overflow-hidden rounded-2xl object-cover flex-shrink-0">
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
