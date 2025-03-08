const Button = ({ children, fullWidth, icon: Icon, iconRight, color }) => {
  const colors = [
    {
      name: 'green',
      bg: 'bg-mediumGreen',
      text: 'text-black',
      hover: 'hover:bg-darkGreen hover:text-white',
    },
  ];

  const buttonColor = colors.find((c) => color === c.name);
  const colorStyles = color
    ? `${buttonColor.bg} ${buttonColor.text} ${buttonColor.hover}`
    : 'bg-white text-black hover:bg-mediumGray';

  return (
    <button
      className={`h-12 border border-solid border-mediumGray rounded-md py-2 px-4 font-medium ${
        fullWidth ? 'w-full' : 'w-fit'
      } ${colorStyles}`}
    >
      {fullWidth ? (
        <>{children}</>
      ) : (
        <div className="flex gap-2 items-center">
          {iconRight ? (
            <>
              {children}
              {Icon && <Icon fontSize="small" />}
            </>
          ) : (
            <>
              {Icon && <Icon fontSize="small" />}
              {children}
            </>
          )}
        </div>
      )}
    </button>
  );
};

export default Button;
