import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <span className="text-xl font-bold">Emo Culture</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Music</a>
              <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Fashion</a>
              <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Community</a>
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Music</a>
            <a href="#" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Fashion</a>
            <a href="#" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Community</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
