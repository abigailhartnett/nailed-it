import { SearchOutlined } from '@mui/icons-material';

const SearchBar = () => {
  return (
    <div className="border border-lightGray p-2 rounded-full w-64 flex items-center">
      <SearchOutlined className="text-darkGray" />
      <input
        type="text"
        placeholder="Search your collection..."
        className="pl-1 placeholder-darkGray"
      />
    </div>
  );
};

export default SearchBar;
