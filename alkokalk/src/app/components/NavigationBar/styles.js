export const StyledNavigationBar = ({ children }) => (
  <nav className="h-16 text-blueGray-800 flex items-center justify-between bg-warmGray-100 mt-8 w-full px-5">
    {children}
  </nav>
);

export const StyledLogoContainer = ({ children }) => (
  <div className="flex items-center text-4xl">{children}</div>
);

export const StyledLogoText = ({ children }) => (
  <h1 className="ml-2.5">{children}</h1>
);

export const StyledNavLinkSection = ({ children }) => (
  <div className="flex items-center justify-end w-128 mr-5">{children}</div>
);

export const StyledNavLink = ({ children }) => (
  <a className="text-blueGray-800 no-underline transition-all duration-300 text-xl hover:font-medium cursor-pointer">
    {children}
  </a>
);

export const LinkDivider = () => (
  <div className="w-px h-9 bg-gray-400 mx-auto"></div>
);
