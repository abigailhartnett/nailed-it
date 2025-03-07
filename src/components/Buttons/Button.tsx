const Button = ({ children, fullWidth, icon: Icon }) => {
  return (
    <button
      className={`border border-solid border-mediumGray rounded-md py-2 px-4 hover:bg-mediumGray font-medium ${
        fullWidth ? 'w-full' : 'w-fit'
      }`}
    >
      <div className="flex gap-2 items-center">
        {Icon && <Icon fontSize="small" />}
        {children}
      </div>
    </button>
  );
};

export default Button;
