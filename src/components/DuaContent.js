import Image from "next/image";

import allahTraced from "../../public/allahTraced.svg";
import copy from "../../public/copy.svg";
import bookmark from "../../public/bookmark.svg";
import light from "../../public/light.svg";
import share from "../../public/share.svg";
import report from "../../public/report.svg";
import audio from "../../public/audio.svg";

export default function DuaContent({ data }) {
  
  return (
    <div className="w-[829px] h-[1123px]">
      <div className="flex flex-col gap-3">
        <div className="bg-white py-[15px] rounded-xl px-[30px]">
          <div className="flex gap[10px]">
            <p className="text-green-600 font-semibold">Section:</p>
            <p>The servant is dependent on his Lord</p>
          </div>
        </div>
        <div className="bg-white rounded-xl py-[15px] px-[30px] flex flex-col gap-7">
          <div className="flex items-center gap-3">
            <Image src={allahTraced} alt="allahTraced" />
            <p className="text-green-600 font-semibold">
              1. The servant is dependent on his Lord #1
            </p>
          </div>
          <div>
            <p>
              All human beings depend on Allah for their welfare and prevention
              of evil in various matters of their religion and world. Allah says
              (interpretation of the meaning): O mankind, you are those in need
              of Allah, while Allah is the Free of need, the Praiseworthy.
            </p>
          </div>
          <div>
            <p className="text-green-600 font-semibold">Reference:</p>
            <p>Surah Al-Fatir 35:15</p>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Image src={audio} alt="audio" />
            </div>
            <div className="flex items-center gap-7">
              <Image src={copy} alt="copy" />
              <Image src={bookmark} alt="bookmark" />
              <Image src={light} alt="light" />
              <Image src={share} alt="share" />
              <Image src={report} alt="report" />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
