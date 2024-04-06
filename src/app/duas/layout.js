"use client";
import HeaderNav from "@/pages/HeaderNav";
import LeftBar from "@/pages/LeftBar";
import RightBar from "@/pages/RightBar";
import Categories from "@/pages/categories/Categories";
import useFetcher from "@/useFetcher";
import React from "react";

export default function Layout({ children }) {
  return (
    <main className="font-inter style-en false z-0 lg:fixed lg:inset-x-0 xl:fixed xl:inset-x-0 xl:p-6 xl:pb-0 2xl:px-10 2xl:pt-6 2xl:fixed 2xl:inset-x-0">
      <div className="relative grid sm-max:overflow-auto sm:gap-6 xl:grid-rows-[46px,1fr] 2xl:grid-rows-[46px,1fr] z-0 xl:grid-cols-[105px,350px,1fr] 2xl:grid-cols-[105px,350px,1fr,270px] w-[1920px]">
        <div className="row-span-full hidden xl:block xl:z-[-1] 2xl:block 2xl:z-[-1]">
          <LeftBar />
        </div>

        <div className="xl:col-start-2 xl:col-span-full 2xl:col-start-2 2xl:col-span-full 2xl:z-[-1]">
          <HeaderNav />
        </div>

        <div className="md:z-[-3] md-max:flex md-max:w-full lg-min:grid-cols-[350px,1fr] lg:gap-6 lg:z-[-2] xl-min:col-span-2 xl:gap-x-6 2xl:gap-x-6 2xl:z-[-1] 2xl-min:w-full grid sm:mx-auto md:mx-auto lg:w-[96%] lg:mx-auto">
          <Categories />
        </div>
        <div className="mx-auto">{children}</div>
        <div className="xl:hidden bg-red-700 block">Responsive Side Bar</div>

        <div className="hidden 2xl:block z-[-2]">
          <RightBar />
        </div>

        <div className="2xl:hidden fixed overflow-hidden bg-gray-900 bg-opacity-50 inset-0 transform ease-in-out z-20 translate-x-full transition-all delay-200 opacity-0"></div>
        <div className="Toastify"></div>
      </div>
    </main>
  );
}
