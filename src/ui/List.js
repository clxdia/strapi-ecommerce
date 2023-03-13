import useFetch from "component/hooks/useFetch";
import useData from "component/hooks/useFetch";
import { useEffect, useState } from "react";
import ItemHomeUI from "./ItemHomeUI";

export default function List() {
  const { data, loading, error } = useFetch(
    process.env.NEXT_PUBLIC_API_URL + "?populate=*"
  );
  return (
    <div className="text-red-500">
      <p>hello</p>
      {loading && (
        <article className="m-auto text-center w-[65%] mb-10 h-[20rem] mt-32 gap-0 flex flex-col justify-center sm:w-[75%] xs:w-[95%]">
          <p className="text-grey text-[13px]">Loading news</p>
        </article>
      )}
      {error && (
        <article className="m-auto text-center w-[65%] mb-10 h-[20rem] mt-10 flex flex-col justify-center gap-4 sm:w-[75%] xs:w-[95%]">
          <h3 className="text-menu_grey text-[16px]">
            Something went wrong, please try again in a bit.
          </h3>
          <p className="text-grey text-[13px]">{error}</p>
        </article>
      )}
      {data && data.map((item) => <ItemHomeUI item={item} key={item.id} />)}
    </div>
  );
}
