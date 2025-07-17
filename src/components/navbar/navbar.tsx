import NavSearch from "./nav-search";
import Logo from "./logo";
import { DarkMode } from "./dark-mode";
import LinksDropdown from "./links-dropdown";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-4">
      <Logo />
        <NavSearch />
        <div className="flex gap-4 items-center">
          <DarkMode />
        </div>
        <LinksDropdown />
        
      </div>
    </nav>
  )
}

export default Navbar;