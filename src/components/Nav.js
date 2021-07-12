/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Menu } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from "react-router-dom";

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

const Nav = () => {
    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">

                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        <Link to='/' >
                                            <button className='bg-gray-900 text-white content-center block px-3 py-2 rounded-md text-base font-medium' aria-current="page">
                                                {/* <span className="sr-only">View notifications</span> */}
                                                Home
                                            </button>
                                        </Link>
                                        <Link to='/about'>
                                            <button className='bg-gray-900 text-white content-center block px-3 py-2 rounded-md text-base font-medium' aria-current="page">
                                                {/* <span className="sr-only">View notifications</span> */}
                                                About Me
                                            </button>
                                        </Link>
                                        <Link to='/contact'>
                                            <button className='bg-gray-900 text-white content-center block px-3 py-2 rounded-md text-base font-medium' aria-current="page">
                                                {/* <span className="sr-only">View notifications</span> */}
                                                Contact Me
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                <Menu as="div" className="ml-3 relative ">
                                    <div>
                                        <img
                                            className="h-10 w-10 rounded-full content-end scale-105"
                                            src="data:image/jpeg;base64,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"
                                            alt=""
                                        />
                                    </div>

                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link to='/' >
                                <button className='bg-gray-900 text-white content-center block px-3 py-2 rounded-md text-base font-medium w-full' aria-current="page">
                                    Home
                                </button>
                            </Link>
                            <Link to='/about'>
                                <button className='bg-gray-900 text-white content-center block px-3 py-2 rounded-md text-base font-medium w-full' aria-current="page">
                                    About Me
                                </button>
                            </Link>
                            <Link to='/contact'>
                                <button className='bg-gray-900 text-white content-center block px-3 py-2 rounded-md text-base font-medium w-full' aria-current="page">
                                    Contact Me
                                </button>
                            </Link>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Nav
