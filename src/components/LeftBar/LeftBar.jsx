import Image from "next/image";
import duaLogo from "../../../public/dua-logo.svg";
import homeIcon from "../../../public/home.svg";
import alldua from "../../../public/alldua.svg";
import memorize from "../../../public/memorize.svg";
import bookmark from "../../../public/bookmark.svg";
import ruqyah from "../../../public/ruqyah.svg";
import duaInfo from "../../../public/dua-info.svg";
import books from "../../../public/books.svg";
import support from "../../../public/support.svg";
import Link from "next/link";

const LeftBar = () => {
  return (
    <div className="w-[100px] flex flex-col gap-y-5 fixed overflow-hidden">
      <div className="bg-white px-4 lg:h-[calc(93vh)] xl:h-[94vh] 2xl:h-[93vh] scrl-left pb-16">
        <div className="pt-7 mb-10 xl:mb-16 2xl:mb-16 container">
          <Link href="/">
            <Image
              src={duaLogo}
              alt="logo"
              className="h-[52px] w-16 mx-auto drop-shadow-primary xl:mb-0 cursor-pointer"
            />
          </Link>
        </div>
        <Link href="/">
          <div className="p-2 flex flex-row justify-center items-center">
            <div className="bg-icon-bg flex p-2 rounded-full items-center h-10 w-10 justify-center">
              <Image src={homeIcon} alt="homeIcon" className="" />
            </div>
          </div>
        </Link>
        <Link href="/alldua">
          <div className="p-2 flex flex-row justify-center items-center">
            <div className="bg-icon-bg flex p-2 rounded-full items-center h-10 w-10 justify-center">
              <Image src={alldua} alt="alldua" className="" />
            </div>
          </div>
        </Link>
        <Link href="/memorize">
          <div className="p-2 flex flex-row justify-center items-center">
            <div className="bg-icon-bg flex p-2 rounded-full items-center h-10 w-10 justify-center">
              <Image src={memorize} alt="memorize" className="" />
            </div>
          </div>
        </Link>
        <Link href="/bookmark">
          <div className="p-2 flex flex-row justify-center items-center">
            <div className="bg-icon-bg flex p-2 rounded-full items-center h-10 w-10 justify-center">
              <Image src={bookmark} alt="bookmark" className="" />
            </div>
          </div>
        </Link>
        <Link href="/ruqyah">
          <div className="p-2 flex flex-row justify-center items-center">
            <div className="bg-icon-bg flex p-2 rounded-full items-center h-10 w-10 justify-center">
              <Image src={ruqyah} alt="ruqyah" className="" />
            </div>
          </div>
        </Link>
        <Link href="/duaInfo">
          <div className="p-2 flex flex-row justify-center items-center">
            <div className="bg-icon-bg flex p-2 rounded-full items-center h-10 w-10 justify-center">
              <Image src={duaInfo} alt="duaInfo" className="" />
            </div>
          </div>
        </Link>
        <Link href="/books">
          <div className="p-2 flex flex-row justify-center items-center">
            <div className="bg-icon-bg flex p-2 rounded-full items-center h-10 w-10 justify-center">
              <Image src={books} alt="books" className="" />
            </div>
          </div>
        </Link>

        <div className="pt-16">
          <Link href="/support">
            <div className="p-2 flex flex-row justify-center items-center">
              <div className="w-[92px] h-[42px] bg-primary flex p-2 rounded-lg items-center justify-center">
                <Image src={support} alt="support" className="" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
