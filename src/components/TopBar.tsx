import SearchBar from './SearchBar';
import Avatar from './Avatar';
import { useSidebar } from '../contexts/SidebarContext';

const SideNav = () => {
  const { isOpen } = useSidebar();

  return (
    <div
      className={`sticky top-0 flex justify-between items-center h-16 ${
        isOpen ? 'ml-60' : 'ml-16'
      } transition-all duration-300 ease-in-out`}
    >
      <span className="ml-4 font-semibold text-xl">Welcome back, Taryn!</span>
      <div className="flex items-center">
        <SearchBar />
        <Avatar />
      </div>
    </div>
  );
};

export default SideNav;
