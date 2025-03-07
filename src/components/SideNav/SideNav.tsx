import { useState } from 'react';
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
// Add icon change color/fill on hover

const SideNav = () => {
  // todo: Change collapsed to isOpen like a normal person would have coded
  const [collapsed, setCollapsed] = useState(false);
  const handleCollapse = () => {
    setCollapsed(!collapsed);
    console.log(collapsed);
  };

  return (
    <div
      className={`bg-white fixed left-0 top-0 h-full z-10 shadow-md shadow-mediumGray transition-all duration-300 ease-in-out ${
        collapsed ? 'w-16 py-4 px-1' : 'w-60 p-4'
      }`}
    >
      <div className="flex justify-between items-center">
        <a href="/">
          <img
            src="https://4m4you.com/wp-content/uploads/2020/06/logo-placeholder.png"
            alt="NailedIt logo"
            className={`h-12 w-auto ${collapsed && 'hidden'}`}
          />
        </a>
        <IconButton onClick={() => handleCollapse()} hoverBgColor="paleGreen">
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
          collapsed={collapsed}
        />
        <SideNavItem
          icon={FavoriteBorderRounded}
          text="My Collection"
          href="/my-collection"
          collapsed={collapsed}
        />
        <SideNavItem
          icon={CalendarTodayRounded}
          text="Calendar"
          href="/calendar"
          collapsed={collapsed}
        />
        <SideNavItem
          icon={AccessTimeRounded}
          text="Usage analytics"
          href="/analytics"
          collapsed={collapsed}
        />
        <SideNavItem
          icon={LocalMallOutlined}
          text="Shop"
          href="/shop"
          collapsed={collapsed}
        />
        <SideNavItem
          icon={SettingsOutlined}
          text="Settings"
          href="/settings"
          collapsed={collapsed}
        />
      </ul>
    </div>
  );
};

export default SideNav;
