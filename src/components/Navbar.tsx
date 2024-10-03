'use client'

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Switch } from "@/components/ui/switch"
import { Button } from "./ui/button";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import { ThemeContext } from "@/context/themeContext";
import { useContext } from "react";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar = () => {

  const pathname = usePathname()

  const {isDarkMode, toggleTheme}: any = useContext(ThemeContext)
   
  return (
    <header className={`py-4 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} shadow-md transition-colors duration-300`}>
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* logo */}
        <div className="text-xl font-bold">
          <Link href="/">Daily News</Link>
        </div>

        {/* desktop navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex space-x-8">
            <NavigationMenuItem>
              <NavigationMenuLink href="/news" className={`${pathname === '/news' ? 'text-red-500 font-semibold' : ''} hover: text-gray-600`}>
                News
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="dark:bg-gray-900 dark:text-white">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <ul className="text-gray-600 shadow-md rounded-md py-4 px-5 space-y-2">
                    <li>
                      <NavigationMenuLink
                        href="/services/web-developent"
                        className="hover: text-gray-600"
                      >
                        Web Development
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/services/app"
                        className="hover: text-gray-600"
                      >
                        Mobile Apps
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/services/seo"
                        className="hover: text-gray-600"
                      >
                        SEO
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/about" className={`${pathname === '/about' ? 'text-red-500 font-semibold' : ''} hover: text-gray-600`}>
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/contact" className={`${pathname === '/contact' ? 'text-red-500 font-semibold' : ''} hover: text-gray-600`}>
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        {/* color switcher and login btn */}
        <div className="hidden lg:flex items-center space-x-4">
            <div 
            onClick={toggleTheme}
            className="flex items-center">
                <span className="mr-2">Dark Mode</span>
                <Switch />
            </div>
            <Button variant="default" className="px-6">Login</Button>
        </div>

        {/* hamburger menu for mobile */}
        <MobileMenu/>
      </nav>
    </header>
  );
};

export default Navbar;


// you will use "use client" when
// 1. any type of button click events
// 2. useState or useEffect
