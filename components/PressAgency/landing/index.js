import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import youTube from "../assets/youTube.svg";
import Image from "next/image";
import Link from "next/link";
export default function LandingPress() {
  return (
    <>
      <section className="flex justify-between items-center w-full min-h-[80vh] pl-10 bg-gradient-to-b from-[#a3c9f5] via-white to-white">
        <div className="flex justify-center items-center flex-col gap-y-4 w-3/5">
          <div className="border-2 rounded-3xl border-[#517CD7] min-h-[60vh] w-full p-6 flex flex-col justify-between items-start">
            <div className="flex justify-between items-center text-4xl font-semibold w-full">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FF0A0A] to-[#D08C26]">
                *
              </span>
              <h1>Announcements</h1>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FF0A0A] to-[#D08C26]">
                *
              </span>
            </div>
            <div className="flex flex-col justify-center items-start gap-y-6 px-7">
              <h1 className="font-semibold text-3xl underline">
                Terms & Conditions
              </h1>
              <ul className="flex flex-col gap-y-2 text-lg">
                <li className="flex justify-start items-center gap-4">
                  <MdDoubleArrow />
                  Item 1
                </li>
                <li className="flex justify-start items-center gap-4">
                  <MdDoubleArrow />
                  Item 2
                </li>
                <li className="flex justify-start items-center gap-4">
                  <MdDoubleArrow />
                  Item 3
                </li>
                <li className="flex justify-start items-center gap-4">
                  <MdDoubleArrow />
                  Item 4
                </li>
                <li className="flex justify-start items-center gap-4">
                  <MdDoubleArrow />
                  Item 5
                </li>
                <li className="flex justify-start items-center gap-4">
                  <MdDoubleArrow />
                  Item 6
                </li>
                <li className="flex justify-start items-center gap-4">
                  <MdDoubleArrow />
                  Item 7
                </li>
              </ul>
            </div>
            <div className="flex justify-start items-center text-xl font-semibold gap-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FF0A0A] to-[#D08C26]">
                *
              </span>
              <h1 className="text-[#CF3333]">
                For upload user needs to provide - form fillup,pdf,accept/reject
                declaration.
              </h1>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FF0A0A] to-[#D08C26]">
                *
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-y-6 w-2/5">
          <h1 className="text-2xl font-bold underline">How it works</h1>
          <div className="bg-black flex justify-center items-center w-96 h-72">
            <Image alt="youtube" src={youTube} />
          </div>
          <Link href="/press-agency/upload">
            <button className="uppercase py-2 px-20 gap-2 flex justify-center items-center font-semibold text-2xl bg-[#517CD7] rounded-3xl text-white shadow-2xl">
              <span>upload</span>
              <IoMdArrowDropdown />
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
