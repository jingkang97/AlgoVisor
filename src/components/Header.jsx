import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import CustomButton from "../components/ui/custombutton";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-black/20 backdrop-blur-[9px]">
      {/* border-b border-[#333333] */}
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl justify-between p-2"
      >
        {/* Left side: Logo + Questions + Visualization */}
        <div className="flex items-center space-x-1">
          <a href="#" className="m-1.5 p-1.5 flex items-center space-x-2">
            <span className="sr-only">AlgoVisor</span>
            <div>
              <img
                alt="AlgoVisor Logo"
                src="/algovisor.svg"
                className="h-5 w-auto transition duration-300 ease-in-out hover:filter hover:drop-shadow-[0_0_6px_#fff]"
              />
            </div>
            <h1 className="font-bold text-white tracking-tighter">AlgoVisor</h1>
          </a>

          {/* Questions and Visualization links */}

          <PopoverGroup className="hidden lg:flex lg:gap-x-8">
            <Popover className="relative">
              <PopoverButton
                className="flex items-center gap-x-1 text-sm font-mona text-white-900 font-semibold bg-transparent 
             hover:outline-none hover:border-none focus:border-none border-none focus:outline-none focus:ring-0 active:outline-none focus-visible:outline-none"
              >
                Questions
                <ChevronDownIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-none text-white-400"
                />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-[#18181C] shadow-lg  transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-[#232326] hover:border-[#43434A] 
             border-[1px] border-transparent transition-all duration-300 ease-in-out "
                    >
                      <div className="relative">
                        {" "}
                        <div className="z-10 absolute flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-[#232326]">
                          <item.icon
                            aria-hidden="true"
                            className="h-6 w-6 text-white group-hover:text-white"
                          />
                        </div>
                        <div className=" h-11 w-11 bg-gradient-to-b from-gray-400 to-gray-700 blur-[2px] rounded-lg"></div>
                      </div>

                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-white group-hover:text-white"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-[#ACACB5]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-[#1E1E22]">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-[white] hover:bg-[#232326] hover:text-white"
                    >
                      <item.icon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none text-white"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
          </PopoverGroup>
          <a href="#" className="text-sm font-semibold text-white">
            Visualization
          </a>
        </div>

        {/* Right side: Log in button */}
        <div className="ml-auto">
          <div className="flex mt-1 mr-2 space-x-2">
            <CustomButton
              text={"Sign in/up"}
              border={"border-none"}
              bgColor={"transparent"}
            />
            <CustomButton
              text={"Get Full Access"}
              bgColor={"transparent"}
              color={"text-white"}
              border={"border-1"}
              borderColor={"border-white"}
            />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </nav>
      {/* Mobile menu dialog */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">AlgoVisor</span>
              <img
                alt="AlgoVisor Logo"
                src="/algovisor.svg"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Visualization
                </a>
              </div>
              <div className="py-6">
                {/* <CustomButton text={"Log in"} /> */}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
