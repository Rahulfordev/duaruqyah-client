import Image from "next/image";
import search from "../../public/search.svg";
import profile from "../../public/profile.svg";
const HeaderNav = () => {
  return (
    <div className="right-10 lg:left-[1rem] xl:left-1 hidden xl:relative mb-20 lg: xl:block 2xl:block">
      <div className="grid grid-cols-[82.2%,1fr] xl:w-[99%] 2xl:grid-cols-[82.2%,1fr]">
        <div className="flex flex-row justify-between">
          <div className="text-left flex items-center">
            <h1 className="text-2xl">Duas Page</h1>
          </div>
          <div className="flex flex-row items-center relative">
            <form className="sm-max:w-full">
              <div className="w-82 sm-max:w-full relative md:mr-6 md:w-72 lg:mr-6">
                <div className="relative flex justify-between sm-max:flex-col sm-max:gap-4">
                  <input
                    type="text"
                    className="block bg-white placeholder:text-sm w-full rounded-md py-3 px-4 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm"
                    placeholder="Search by Dua Name"
                  />
                  <button
                    type="submit"
                    class="absolute flex items-center justify-center bg-gray-100 cursor-pointer md-minhover:bg-gray-20 px-4 py-[9px] rounded-md md-min:absolute right-1 top-1 bottom-1 sm-max:focus:bg-green-700"
                  >
                    <Image src={search} alt="search" className="" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end">
          <Image src={profile} alt="profile" />
          <svg
            class="ml-2 mr-2"
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.79241 5.97063C5.3921 6.49064 4.6079 6.49064 4.20759 5.97063L1.04322 1.85999C0.537025 1.20243 1.00579 0.25 1.83563 0.25L8.16437 0.250001C8.99421 0.250001 9.46298 1.20243 8.95678 1.86L5.79241 5.97063Z"
              fill="#868686"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
