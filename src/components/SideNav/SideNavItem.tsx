const SideNavItem = ({ icon: Icon, text, href, isOpen }) => {
  // const collapsedStyles = '';
  // const expandedStyles = '';

  return (
    <a href={href} className="hover:no-underline">
      {/* {collapsed ? '' : ''} */}
      <li
        className={`flex items-center gap-2 py-4 hover:bg-paleGreen hover:text-darkGreen rounded-md font-medium ${
          isOpen ? 'px-2' : 'justify-center px-4'
        }`}
      >
        <Icon fontSize="small" />
        <div className={`whitespace-nowrap ${isOpen ? 'block' : 'hidden'}`}>
          {text}
        </div>
      </li>
    </a>
  );
};

export default SideNavItem;
