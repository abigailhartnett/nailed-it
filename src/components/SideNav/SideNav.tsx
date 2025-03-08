import {
  HomeOutlined,
  FavoriteBorderRounded,
  CalendarTodayRounded,
  AccessTimeRounded,
  PieChartOutlineRounded,
  LocalMallOutlined,
  SettingsOutlined,
  ViewSidebarOutlined,
} from '@mui/icons-material';
import SideNavItem from './SideNavItem';
import IconButton from '../Buttons/IconButton';
import { useSidebar } from '../../contexts/SidebarContext';
// Add icon change color/fill on hover

const SideNav = () => {
  // todo: Change isOpen to isOpen like a normal person would have coded
  const { isOpen, setIsOpen } = useSidebar();

  return (
    <div
      className={`bg-white fixed left-0 top-0 h-full z-10 shadow-md shadow-mediumGray transition-all duration-300 ease-in-out ${
        isOpen ? 'w-60 p-4' : 'w-16 py-4 px-1'
      }`}
    >
      <div className="flex justify-between items-center">
        <a href="/">
          <img
            src="https://4m4you.com/wp-content/uploads/2020/06/logo-placeholder.png"
            alt="NailedIt logo"
            className={`h-12 w-auto ${isOpen ? 'block' : 'hidden'}`}
          />
        </a>
        <IconButton
          onClick={() => setIsOpen(!isOpen)}
          hoverBgColor="paleGreen"
          hoverColor="green"
        >
          <ViewSidebarOutlined
            fontSize="small"
            className="text-darkGray scale-x-[-1] hover:cursor-pointer"
          />
        </IconButton>
      </div>

      <ul className="flex flex-col self-center mt-4">
        <SideNavItem
          icon={HomeOutlined}
          text="Dashboard"
          href="/"
          isOpen={isOpen}
        />
        <SideNavItem
          icon={FavoriteBorderRounded}
          text="My Collection"
          href="/polish/garden-party-taco"
          isOpen={isOpen}
        />
        <SideNavItem
          icon={CalendarTodayRounded}
          text="Journal"
          href="/journal"
          isOpen={isOpen}
        />
        <SideNavItem
          icon={AccessTimeRounded}
          text="Usage Analytics"
          href="/analytics"
          isOpen={isOpen}
        />
        <SideNavItem
          icon={LocalMallOutlined}
          text="Shop"
          href="/shop"
          isOpen={isOpen}
        />
        <SideNavItem
          icon={SettingsOutlined}
          text="Settings"
          href="/settings"
          isOpen={isOpen}
        />
      </ul>
    </div>
  );
};

export default SideNav;
