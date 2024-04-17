"use client";
import Image from "next/image";
import search from "../../../public/search.svg";
import IntroductionDua from "../../../public/IntroductionDua.svg";
import useFetcher from "@/hooks/useFetcher";
import "./categories.css";
import { useState } from "react";

const Categories = ({ setFindId, showCategory, handleCloseCategory }) => {
  const [showSubCat, setShowSubCat] = useState(null);
  const {
    data: category,
    loading,
    error,
  } = useFetcher("https://nodejs-sqlite.onrender.com/api/categories");

  const { data: subcategory } = useFetcher(
    `https://nodejs-sqlite.onrender.com/api/subcategories`
  );

  const combinedData = category?.map((item1) => {
    const matchingItems = subcategory?.filter(
      (item2) => item2.cat_id === item1.cat_id
    );
    return { ...item1, matchingItems };
  });

  return (
    <div
      className={`category ${
        showCategory ? "show" : "hide"
      } absolute xl:static`}
    >
      <div
        className="shadow-overlay xl:hidden"
        onClick={handleCloseCategory}
      ></div>
      <div className="modal custom-scrollbar w-[329px] md:w-[429px] bg-white rounded-lg h-[850px]">
        <div>
          <div className="rounded-tl-lg rounded-tr-lg bg-green-600 py-[18px] px-[124px] text-center text-white text-lg mb-10">
            <p>Categories</p>
          </div>
          <div className="relative flex gap-[10px] items-center mx-4 mb-4">
            <div className="absolute left-3">
              <Image src={search} alt="search" className="" />
            </div>
            <div className="rounded-lg w-full border-2 pl-10">
              <input
                type="text"
                placeholder="Search by Categories"
                className="py-3 w-full"
              />
            </div>
          </div>
          <div className="mx-4 overflow-x-auto h-[660px]">
            <div className="flex flex-col gap-4 items-center">
              {combinedData &&
                combinedData.map((item, i) => {
                  return (
                    <div key={item.cat_id}>
                      <div
                        onClick={() => {
                          setFindId(item.cat_id);
                          setShowSubCat(showSubCat === i ? null : i);
                        }}
                        className="flex items-center gap-4 p-[10px] bg-icon-bg rounded-lg w-[280px] md:w-[380px]"
                      >
                        <div>
                          <Image src={IntroductionDua} alt="IntroductionDua" />
                        </div>
                        <div>
                          <p className="text-green-600 font-semibold text-base">
                            {item?.cat_name_en}
                          </p>
                          <p>Subcategory: {item?.no_of_subcat}</p>
                        </div>
                        <div>
                          <p>{item?.no_of_dua}</p>
                          <p>Duas</p>
                        </div>
                      </div>
                      <div
                        className={`sub-categories mt-4 ${
                          showSubCat === i ? "open" : "closed"
                        }`}
                      >
                        {showSubCat === i && (
                          <div className="w-[280px] md:w-[380px] sub-categorie">
                            {item?.matchingItems &&
                              item.matchingItems.map((subItem, j) => (
                                <label
                                  key={subItem.subcat_id}
                                  htmlFor={subItem.subcat_id}
                                >
                                  <div className="py-2 pl-3 sub-categories__content">
                                    <p>{subItem?.subcat_name_en}</p>
                                  </div>
                                </label>
                              ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
