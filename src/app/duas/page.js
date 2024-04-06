"use client";

import DuaContent from "@/components/DuaContent";
import useFetcher from "@/useFetcher";

const Page = () => {
  const { data, loading, error } = useFetcher(
    "http://localhost:5000/api/categories"
  );
  return <DuaContent data={data} />;
};

export default Page;
