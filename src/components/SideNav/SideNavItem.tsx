const SideNavItem = ({ icon: Icon, text, href }) => {
  return (
    <a href={href}>
      <li className="flex items-center gap-2 px-2 py-4 hover:bg-paleGreen hover:text-darkGreen rounded-md font-medium">
        <Icon fontSize="small" />
        {text}
      </li>
    </a>
  );
};

export default SideNavItem;
