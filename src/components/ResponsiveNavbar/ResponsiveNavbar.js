import Link from "next/link";
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

const ResponsiveNavbar = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center gap-[55px] sm:gap-[90px]">
        <Link href="/">
          <Image src={homeIcon} alt="alldua" className="" />
        </Link>
        <Link href="/alldua">
          <Image src={alldua} alt="alldua" className="" />
        </Link>
        <Link href="/bookmark">
          <Image src={bookmark} alt="bookmark" className="" />
        </Link>
        <Link href="/books">
          <Image src={books} alt="books" className="" />
        </Link>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
