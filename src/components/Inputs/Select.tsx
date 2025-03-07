const Select = () => {
  const options = ['Color', 'Finish', 'Brand'];

  return (
    <div className="flex gap-2">
      <label>Filter by:</label>
      <select>
        {options.map((option) => {
          return <option>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
