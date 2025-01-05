import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Transition } from "@headlessui/react";

export default function DropDown() {
  const [selectedItem, setSelectedItem] = useState("Python"); // Default selected item

  const handleSelect = (item) => {
    setSelectedItem(item); // Update the selected item
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        {/* MenuButton displays the selected item without a background */}
        <MenuButton className="inline-flex w-full bg-transparent justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800">
          {selectedItem} {/* Show the selected item in the button */}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-5 text-gray-400"
          />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 text-white shadow-lg ring-1 ring-black/5 transition focus:outline-none left-auto right-auto data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {/* Menu items with white text */}
          <MenuItem onClick={() => handleSelect("Python")}>
            <a className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-700 data-[focus]:text-white data-[focus]:outline-none">
              Python
            </a>
          </MenuItem>
          <MenuItem onClick={() => handleSelect("Javascript")}>
            <a className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-700 data-[focus]:text-white data-[focus]:outline-none">
              Javascript
            </a>
          </MenuItem>
          <MenuItem onClick={() => handleSelect("C++")}>
            <a className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-700 data-[focus]:text-white data-[focus]:outline-none">
              C++
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
