import Image from "next/image";
import search from "../../../public/search.svg";
import IntroductionDua from "../../../public/IntroductionDua.svg";

const Categories = () => {
  return (
    <div>
      <div className="w-[429px] bg-white rounded-lg h-[822px]">
        <div>
          <div className="rounded-tl-lg rounded-tr-lg bg-green-600 py-[18px] px-[124px] text-center text-white text-lg mb-4">
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
                className="py-3"
              />
            </div>
          </div>
          <div className="mx-4">
            <div className="flex items-center gap-4 p-[10px] bg-icon-bg rounded-lg">
              <div>
                <Image src={IntroductionDua} alt="IntroductionDua" />
              </div>
              <div>
                <p className="text-green-600 font-semibold">
                  Introduction to Dua
                </p>
                <p>Subcategory: 11</p>
              </div>
              <div>
                <p>15</p>
                <p>Duas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
