const Grid = ({ gap, columns, children, className, size }) => {
  //   Use `aspect-square` on child items to be sure they're all square
  // todo: fix so that columns property works

  return (
    <div
      className={`w-full grid grid-cols-[repeat(auto-fit,minmax(${size}px,1fr))] 
        gap-${gap ? gap : 1} ${className}`}
    >
      {children}
    </div>
  );
};

export default Grid;
