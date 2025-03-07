const Select = () => {
  const options = ['Color', 'Finish', 'Brand'];

  return (
    <div className="flex gap-2">
      <label>Filter by:</label>
      <select className="px-2">
        {options.map((option) => {
          return <option>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
