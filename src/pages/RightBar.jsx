import language from "../../public/language.svg";
import font from "../../public/font.svg";
import general from "../../public/general.svg";
import Image from "next/image";
const RightBar = () => {
  return (
    <div className="overflow-hidden w-[330px] h-[834px] bg-white rounded-[32px] border-black">
      <div className="">
        <div className="pt-9 pb-6">
          <p className="text-center text-xl text-black">Settings</p>
        </div>
        <div className="sm:pb-4 w-full">
          <div className="mx-4 my-4">
            <div className="bg-icon-bg rounded-sm">
              <div className="flex items-center gap-3">
                <div className="bg-icon-bg flex p-2 rounded-full items-center h-[38px] w-[38px] justify-center">
                  <Image src={language} alt="language" />
                </div>
                <p>Language Settings</p>
              </div>
            </div>
          </div>
          <div className="mx-4 my-4">
            <div className="bg-icon-bg rounded-sm">
              <div className="flex items-center gap-3">
                <div className="bg-icon-bg flex p-2 rounded-full items-center h-[38px] w-[38px] justify-center">
                  <Image src={general} alt="general" />
                </div>
                <p>General Settings</p>
              </div>
            </div>
          </div>
          <div className="mx-4 my-4">
            <div className="bg-icon-bg rounded-sm">
              <div className="flex items-center gap-3">
                <div className="bg-icon-bg flex p-2 rounded-full items-center h-[38px] w-[38px] justify-center">
                  <Image src={font} alt="font" />
                </div>

                <p>Font Settings</p>
              </div>
            </div>
          </div>
          <div className="mx-4 my-4">
            <div className="bg-icon-bg rounded-sm">
              <div className="flex items-center gap-3">
                <div className="bg-icon-bg flex p-2 rounded-full items-center h-[38px] w-[38px] justify-center">
                  <Image src={font} alt="appearance" />
                </div>
                <p>Appearance Settings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
