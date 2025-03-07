const SideNavItem = ({ icon: Icon, text, href, collapsed }) => {
  // const collapsedStyles = '';
  // const expandedStyles = '';

  return (
    <a href={href} className="hover:no-underline">
      {/* {collapsed ? '' : ''} */}
      <li
        className={`flex items-center gap-2 py-4 hover:bg-paleGreen hover:text-darkGreen rounded-md font-medium ${
          collapsed ? 'justify-center px-4' : 'px-2'
        }`}
      >
        <Icon fontSize="small" />
        <div className={`whitespace-nowrap ${collapsed ? 'hidden' : 'block'}`}>
          {text}
        </div>
      </li>
    </a>
  );
};

export default SideNavItem;
