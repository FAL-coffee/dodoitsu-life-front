"use client";
import { Menu } from "./types";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import {
  BookOpenIcon,
  ClipboardIcon,
  TrophyIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  const menu = [
    {
      name: "最新の投稿",
      icon: ClipboardIcon,
      link: "/",
    },
    {
      name: "ランキング",
      icon: TrophyIcon,
      link: "/",
    },
  ] satisfies Menu[];
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header>
      <nav
        role="navigation"
        aria-label="main navigation"
        className="bg-primary-light flex"
      >
        <div
          id="navbar-brand"
          className="items-stretch flex flex-shrink-0 h-13"
        >
          <Link href="/">
            <div className="hover:bg-primary text-lg h-full flex items-center gap-1 font-noto p-1 text-white">
              <BookOpenIcon className="w-7 h-6" />
              都々逸ライフ
            </div>
          </Link>
        </div>
        <div
          id="navbar-default"
          className="hidden md:flex items-stretch justify-between flex-grow flex-shrink-0 h-13"
        >
          <div id="navbar-default-start" className="flex">
            {menu.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link key={index} href={item.link}>
                  <div className="hover:bg-primary h-full text-sm flex items-center font-noto p-1 pr-2 text-white">
                    <Icon className="w-6 h-4" />
                    {item.name}
                  </div>
                </Link>
              );
            })}
          </div>
          <div id="navbar-default-end" className="flex">
            <Link href="/login">
              <div className="hover:bg-primary h-full text-sm flex items-center font-noto p-1 pr-2 text-white">
                <ArrowRightOnRectangleIcon className="w-6 h-4" />
                ログイン
              </div>
            </Link>
          </div>
        </div>
        <div
          id="navbar-md"
          className="flex md:hidden items-stretch justify-end flex-grow flex-shrink-0 h-13"
        >
          <button
            className="menu menu-horizontal hover:bg-primary h-full text-sm flex items-center font-noto p-1 text-white"
            type="button"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
          <Dialog
            as="div"
            className="md:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">メニューを閉じる</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="py-6">
                    {menu.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <Link key={index} href={item.link}>
                          <div className="hover:bg-gray-50 h-full text-2xl flex items-center m-4 font-noto text-gray-900">
                            <Icon className="w-6 h-6 mr-3" />
                            {item.name}
                          </div>
                        </Link>
                      );
                    })}
                    <Link href="/login">
                      <div className="hover:bg-gray-50 h-full text-2xl flex items-center m-4 font-noto text-gray-900  ring-gray-200">
                        <ArrowRightOnRectangleIcon className="w-6 h-6 mr-3" />
                        ログイン
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </nav>
    </header>
  );
}
