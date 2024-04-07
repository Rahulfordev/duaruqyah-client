"use client";
import DuaContent from "@/components/DuaContent/DuaContent";
import HeaderNav from "@/components/Header/HeaderNav";
import LeftBar from "@/components/LeftBar/LeftBar";
import RightBar from "@/components/RightBar/RightBar";
import Categories from "@/components/Category/Categories";
import React, { useState } from "react";
import ResponsiveNavbar from "@/components/ResponsiveNavbar/ResponsiveNavbar";

export default function Layout() {
  const [findId, setFindId] = useState(null);

  return (
    <main className="font-inter style-en false z-0 lg:fixed lg:inset-x-0 xl:fixed xl:inset-x-0 xl:p-6 xl:pb-0 2xl:px-10 2xl:pt-6 2xl:fixed 2xl:inset-x-0">
      <div className="relative grid sm-max:overflow-auto sm:gap-6 xl:grid-rows-[46px,1fr] 2xl:grid-rows-[46px,1fr] z-0 xl:grid-cols-[105px,440px,1fr] 2xl:grid-cols-[105px,440px,1fr,320px] grid-cols-1">
        <div className="row-span-full hidden xl:block xl:z-[-1] 2xl:block 2xl:z-[-1]">
          <LeftBar />
        </div>

        <div className="relative xl:col-start-2 xl:col-span-full 2xl:col-start-2 2xl:col-span-full 2xl:z-[-1]">
          <HeaderNav />
        </div>

        <div className="relative hidden xl:block md:z-[-3] md-max:flex md-max:w-full lg-min:grid-cols-[350px,1fr] lg:gap-6 lg:z-[-2] xl-min:col-span-2 xl:gap-x-6 2xl:gap-x-6 2xl:z-[-1] 2xl-min:w-full grid sm:mx-auto md:mx-auto lg:w-[96%] lg:mx-auto">
          <Categories setFindId={setFindId} />
        </div>
        <div className="mx-auto">
          <DuaContent findId={findId} />
        </div>

        <div className="custom-shadow xl:hidden rounded-t-[15px] bg-white block fixed bottom-0 left-0 w-full py-4 text-center">
          <ResponsiveNavbar />
        </div>

        <div className="hidden 2xl:block z-[-2]">
          <RightBar />
        </div>

        <div className="2xl:hidden fixed overflow-hidden bg-gray-900 bg-opacity-50 inset-0 transform ease-in-out z-20 translate-x-full transition-all delay-200 opacity-0"></div>
        <div className="Toastify"></div>
      </div>
    </main>
  );
}
