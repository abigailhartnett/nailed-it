import {
  HomeOutlined,
  FavoriteBorderRounded,
  CalendarTodayRounded,
  AccessTimeRounded,
  PieChartOutlineRounded,
  LocalMallOutlined,
  SettingsOutlined,
} from '@mui/icons-material';
import SideNavItem from './SideNavItem';
// Add icon change color/fill on hover

const SideNav = () => {
  return (
    <div className="bg-white fixed left-0 top-0 h-full p-4 z-10 w-60 border-r-2 border-r-mediumGray">
      <img
        src="https://4m4you.com/wp-content/uploads/2020/06/logo-placeholder.png"
        alt="NailedIt logo"
        className="h-16 w-auto"
      />
      <ul className="flex flex-col  self-center mt-4">
        <SideNavItem icon={HomeOutlined} text="Dashboard" href="/" />
        <SideNavItem
          icon={FavoriteBorderRounded}
          text="My Collection"
          href="/my-collection"
        />
        <SideNavItem
          icon={CalendarTodayRounded}
          text="Calendar"
          href="/calendar"
        />
        <SideNavItem
          icon={AccessTimeRounded}
          text="Usage analytics"
          href="/analytics"
        />
        <SideNavItem icon={LocalMallOutlined} text="Shop" href="/shop" />
        <SideNavItem icon={SettingsOutlined} text="Settings" href="/settings" />
      </ul>
    </div>
  );
};

export default SideNav;
