"use client";
import { useState, Fragment } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Image from "next/image";
import MenuIcon from "@/icons/menu-icon";
import XMarkIcon from "@/icons/x-mark-icon";
import clsx from "clsx";
import { inter } from "@/pages/fonts/fonts";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Our Services", href: "/services" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-gray-300 border-b border-dashed">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 py-4"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-ml-3">
            <span className="sr-only">Visperah</span>
            <Image
              className="lg:h-12 h-10 w-auto"
              src="/visperah-logo-dark.png"
              width={400}
              height={100}
              alt="Visperah Logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="#"
            className="text-sm font-semibold leading-6 bg-purple-500 text-white px-3 py-2 drop-shadow-md rounded-lg"
          >
            {"Let's Work Together"}
          </Link>
        </div>
      </nav>
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          <div className="fixed inset-0 z-10" />
          <TransitionChild
            as={Fragment}
            enter="transition ease-in-out duration-200 transform"
            enterFrom="translate-x-full opacity-0"
            enterTo="translate-x-0 opacity-100"
            leave="transition ease-in-out duration-200 transform"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo="translate-x-full opacity-0"
          >
            <DialogPanel
              className={clsx(
                "fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 font-sans",
                inter.variable
              )}
            >
              <div className="flex items-center justify-between">
                <Link href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="/visperah-logo-dark.png"
                    width={400}
                    height={100}
                    alt="Visperah Logo"
                  />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon
                    className="h-6 w-6 stroke-[#141B34]"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-4 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block text-lg rounded-lg px-3 py-2 leading-7 text-gray-900 hover:bg-gray-50 text-center"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </header>
  );
}
