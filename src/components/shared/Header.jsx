import { Menu, Popover, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Fragment } from "react";
import {
  HiOutlineBell,
  HiOutlineChatAlt,
  HiOutlineSearch,
} from "react-icons/hi";

const Header = () => {
  return (
    <div className="bg-white h-16 px-4 flex flex-row justify-between items-center border-b border-gray-200">
      <div>
        <div className="relative">
          <HiOutlineSearch
            fontSize={20}
            className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
          />
          <input
            type="text"
            placeholder="search..."
            className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 pr-4"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 mr-2">
        <Popover className="relative">
          {({ open }) => (
            /* Use the `open` state to conditionally change the direction of the chevron icon. */
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-gray-100",
                  "p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
                )}
              >
                <HiOutlineChatAlt fontSize={21} />
              </Popover.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                  <div className="bg-white rounded-sm shadow-sm ring-1 ring-black ring-opacity-5 px-2 py-2 5">
                    <strong className="text-gray-700 font-medium">
                      messages
                    </strong>
                    <div className="mt-2 py-1 text-sm">
                      This is messages panel
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
              {/* <Popover.Panel>
                <a href="/insights">Insights</a>
                <a href="/automations">Automations</a>
                <a href="/reports">Reports</a>
              </Popover.Panel> */}
            </>
          )}
        </Popover>
        <Popover className="relative">
          {({ open }) => (
            /* Use the `open` state to conditionally change the direction of the chevron icon. */
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-gray-100",
                  "p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
                )}
              >
                <HiOutlineBell fontSize={21} />
              </Popover.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                  <div className="bg-white rounded-sm shadow-sm ring-1 ring-black ring-opacity-5 px-2 py-2 5">
                    <strong className="text-gray-700 font-medium">
                      notifications
                    </strong>
                    <div className="mt-2 py-1 text-sm">
                      This is notifications panel
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Menu className="relative">
          <>
            <Menu.Button className="ml-2 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
              <div
                className="h-10 w-10 rounded-full bg-red-400 bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage:
                    'url("https://source.unsplash.com/80x80?face&black")',
                }}
              >
                <span className="sr-only">Hugh Jackson</span>
              </div>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Menu.Items className="absolute origin-top-right z-10 right-0 mt-10 mr-5 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-opacity-5 focus:outline-none ring-black top-6">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={classNames(
                        active && "bg-gray-100",
                        "text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2"
                      )}
                      onClick={() => navigate("/profile")}
                    >
                      Profile
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={classNames(
                        active && "bg-gray-100",
                        "text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2"
                      )}
                      onClick={() => navigate("/settings")}
                    >
                      Settings
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={classNames(
                        active && "bg-gray-100",
                        "text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2"
                      )}
                      onClick={() => navigate("/logout")}
                    >
                      Logout
                    </div>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
