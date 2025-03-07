const IconButton = ({ children, hoverBgColor, hoverColor, onClick }) => {
  hoverBgColor = hoverBgColor
    ? `hover:bg-${hoverBgColor}`
    : 'hover:bg-lightGray';

  return (
    <button
      className={`h-14 w-14 rounded-md ${hoverBgColor}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
