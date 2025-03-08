import Tag from '../Tag';

const MiniManiCard = ({ polish, image, horizontal, tag, url }) => {
  return url ? (
    <a href={url} className="hover:no-underline hover:text-black ">
      <div
        className={`flex items-center justify-between rounded-md p-4 ${
          url && 'hover:bg-lightGray'
        }`}
      >
        <div
          className={`flex items-center ${horizontal ? 'gap-4' : 'flex-col'}`}
        >
          {image ? (
            <img
              src={image}
              className="h-16 aspect-square object-cover overflow-hidden rounded-full"
            />
          ) : null}
          <span className="text-sm text-center font-medium">{polish}</span>
        </div>
        {tag && <Tag>{tag}</Tag>}
      </div>
    </a>
  ) : (
    <div className="flex items-center justify-between rounded-md p-4">
      <div className={`flex items-center ${horizontal ? 'gap-4' : 'flex-col'}`}>
        {image ? (
          <img
            src={image}
            className="h-16 aspect-square object-cover overflow-hidden rounded-full"
          />
        ) : null}
        <span className="text-sm text-center font-medium">{polish}</span>
      </div>
      {tag && <Tag>{tag}</Tag>}
    </div>
  );
};

export default MiniManiCard;
