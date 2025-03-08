const ColorStat = ({ title, number, subtitle, color }) => {
  const colors = [
    {
      name: 'green',
      bg: 'bg-lightGreen',
      text: 'text-darkGreen',
    },
    {
      name: 'yellow',
      bg: 'bg-lightYellow',
      text: 'text-brown',
    },
    {
      name: 'orange',
      bg: 'bg-lightOrange',
      text: 'text-darkestOrange',
    },
    {
      name: 'blue',
      bg: 'bg-lightBlue',
      text: 'text-darkBlue',
    },
  ];

  const cardColor = colors.find((c) => color === c.name);
  const colorStyles = color
    ? `${cardColor.bg} ${cardColor.text} ${cardColor.hover}`
    : 'bg-white text-black hover:bg-mediumGray';

  return (
    <div className={`flex flex-col gap-2 rounded-lg p-4 ${colorStyles}`}>
      <span className="uppercase">{title}</span>
      <span className="text-2xl font-bold">{number}</span>
      <span className="uppercase">{subtitle}</span>
    </div>
  );
};

export default ColorStat;
