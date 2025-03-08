const IconButton = ({ children, hoverBgColor, hoverColor, onClick }) => {
  hoverBgColor = hoverBgColor
    ? `hover:bg-${hoverBgColor}`
    : 'hover:bg-lightGray';

  hoverColor = hoverColor ? `hover:text-${hoverColor}` : 'hover:text-darkGray';

  return (
    <button
      className={`h-14 w-14 rounded-md ${hoverBgColor} ${hoverColor}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
