import fetchData from "../hooks/fetchData";
import ItemHomeUI from "./ItemHomeUI";

export default async function NewArrivals() {
  const items = await fetchData(
    `${process.env.NEXT_PUBLIC_API_URL}?populate=*&filters[type][$eq]=trending`
  );

  return (
    <section className="w-[90%] max-w-[1800px] md:w-[70%] m-auto mb-20">
      <h1 className="mb-6 text-black font-clash font-medium tracking-wide mt-10 md:text-[2rem] text-[1.5rem] cursor-pointer uppercase w-full text-center">
        Nuovi Arrivi
      </h1>
      <div className="m-auto w-[100%]">
        <div className="flex flex-wrap h-full md:gap-[0.9vw] gap-[3vw] sm:gap-auto">
          {items.data.map((item) => {
            return <ItemHomeUI item={item} key={item.id} />;
          })}
        </div>
      </div>
    </section>
  );
}
