import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Cog6ToothIcon } from '@heroicons/react/20/solid'

export default function Configuration(props) {
  return (
    <div className="flex justify-end m-2">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-lg px-4 py-2 text-sm font-medium border-none bg-gray-400 dark:bg-slate-700 hover:bg-gray-400 ">
            <Cog6ToothIcon
              className="h-5 w-5 text-gray-700 dark:text-gray-300"
              aria-hidden="true"
            />
            <div className="text-sm ml-3 text-gray-900 dark:text-gray-300 hidden md:inline">
              Options
            </div>
          </Menu.Button>
        </div>
        <div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="absolute right-0 mt-2 w-max origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg focus:outline-none z-10 dark:bg-slate-700"
            >
              {React.Children.map(props.children, (child) =>
                React.cloneElement(
                  <div className="px-1 py-1 ">
                    <div className="group flex w-full items-left rounded-md px-2 py-2 text-sm text-black bg-white hover:bg-gray-400 dark:bg-slate-700 dark:hover:bg-slate-600">
                      <Menu.Item>{child}</Menu.Item>
                    </div>
                  </div>
                )
              )}
            </Menu.Items>
          </Transition>
        </div>
      </Menu>
    </div>
  )
}
