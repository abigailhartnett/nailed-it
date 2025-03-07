import SearchBar from './SearchBar';
import Avatar from './Avatar';

const SideNav = () => {
  return (
    <div className="sticky top-0 flex justify-between items-center ml-60 h-16">
      <span className="ml-4 font-semibold text-xl">Welcome back, Taryn!</span>
      <div className="flex items-center">
        <SearchBar />
        <Avatar />
      </div>
    </div>
  );
};

export default SideNav;
