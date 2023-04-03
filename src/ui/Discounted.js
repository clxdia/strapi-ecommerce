import { useEffect, useState } from "react";
import ItemHomeUI from "./ItemHomeUI";
import SkeletonHomeUI from "./SkeletonHomeUI";

export default function Discounted() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL +
          "?populate=*&filters[type][$eq]=normal"
      );
      const data = await res.json();
      setItems(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="m-auto w-[100%]">
      <div className="flex flex-wrap w-[100%] h-full gap-2">
        {items.data &&
          items.data.map((item) => {
            return <ItemHomeUI item={item} key={item.id} />;
          })}
        {loading && (
          <>
            <SkeletonHomeUI />
            <SkeletonHomeUI />
            <SkeletonHomeUI />
            <SkeletonHomeUI />
            <SkeletonHomeUI />
            <SkeletonHomeUI />
            <SkeletonHomeUI />
            <SkeletonHomeUI />
          </>
        )}
      </div>
    </div>
  );
}
