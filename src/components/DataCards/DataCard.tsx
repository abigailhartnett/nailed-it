const DataCard = ({ title, subtitle, children, color, button }) => {
  // todo: Move these gradients to general variables to be used around the app
  const colors = {
    green: 'bg-gradient-to-br from-mediumGreen to-mediumBlue',
    purple: 'bg-gradient-to-br from-lightPurple to-mediumPurple',
    pink: 'bg-gradient-to-br from-mediumPink to-darkPink',
    pinkPurple: 'bg-gradient-to-br from-pink to-purple',
  };

  const backgroundColor = color ? colors[color] : colors.green;

  return (
    <div
      className={`shadow-sm shadow-mediumGray rounded-lg bg-white min-w-[300px]`}
    >
      <div
        className={`${backgroundColor} rounded-tr-lg rounded-tl-lg h-2`}
      ></div>
      <div className="h-full flex flex-col justify-between p-4">
        <div>
          <h2>{title}</h2>
          <span className="text-darkGray text-sm">{subtitle}</span>
        </div>
        <div className="h-full my-4">{children}</div>
        {button ? <div className="mt-4">{button}</div> : null}
      </div>
    </div>
  );
};

export default DataCard;
