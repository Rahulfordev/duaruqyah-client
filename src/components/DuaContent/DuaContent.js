"use client";
import Image from "next/image";

import allahTraced from "../../../public/allahTraced.svg";
import copy from "../../../public/copy.svg";
import bookmark from "../../../public/bookmark.svg";
import light from "../../../public/light.svg";
import share from "../../../public/share.svg";
import report from "../../../public/report.svg";
import audio from "../../../public/audio.svg";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function DuaContent({ findId }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:5000/api/duas/cat_id/${findId || 1}`
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function to cancel ongoing requests when the component unmounts
    return () => {
      // Cancel ongoing requests
    };
  }, [findId]);

  const toggleAudio = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className="dua-custom-scrollbar mb-12 md:mb-8 max-w-[829px] mx-2 md:mx-0 overflow-x-auto h-[955px] md:h-[1123px] lg:h-[950px]">
      <div className="bg-white py-[15px] rounded-xl px-[30px] mb-5">
        <div className="flex gap[10px]">
          <p className="text-green-600 font-semibold">Section:</p>
          <p>The servant is dependent on his Lord</p>
        </div>
      </div>
      {data &&
        data.map((dua) => (
          <div key={dua.id} id={dua.subcat_id} className="flex flex-col gap-3">
            <div className="bg-white rounded-xl py-[15px] px-[15px] md:px-[30px] flex flex-col gap-7">
              <div className="flex items-center gap-3">
                <Image src={allahTraced} alt="allahTraced" />
                <p className="text-green-600 font-semibold">
                  {dua?.dua_name_en}
                </p>
              </div>
              <div>
                <p>{dua?.top_en}</p>
              </div>
              <div className="text-right">
                <p>{dua?.dua_arabic}</p>
              </div>
              {dua?.transliteration_en && (
                <div className="">
                  <p className="font-semibold">Transliteration:</p>
                  <p className="italic">{dua?.transliteration_en}</p>
                </div>
              )}

              {dua?.translation_en && (
                <div className="">
                  <p className="font-semibold">Translation:</p>
                  <p className="italic">{dua?.translation_en}</p>
                </div>
              )}

              <div>
                <p className="text-green-600 font-semibold">Reference:</p>
                <p>{dua?.refference_en}</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  {dua?.audio && (
                    <>
                      <audio ref={audioRef} src={dua?.audio} />
                      <Image src={audio} alt="audio" onClick={toggleAudio} />
                    </>
                  )}
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
        ))}
    </div>
  );
}
