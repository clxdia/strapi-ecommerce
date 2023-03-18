import ItemHomeUI from "./ItemHomeUI";

async function fetchData(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("failed");
  }
  return res.json();
}

export default async function NewArrivals() {
  const items = await fetchData(
    process.env.NEXT_PUBLIC_API_URL + "?populate=*&filters[type][$eq]=trending"
  );

  return (
    <section className="lg:w-[70%] w-[90%] max-w-[1800px] md:w-[90%] m-auto">
      <h1 className="text-center mb-6 text-black font-work font-[500] mt-10 md:text-[2rem] text-[1.5rem]">
        Nuovi arrivi
      </h1>
      {/* <p className="mb-7 text-gray-500 text-[14px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p> */}
      <div className="flex flex-wrap justify-center gap-3 md:justify-center md:gap-10">
        {items.data.map((item) => {
          return <ItemHomeUI item={item} key={item.id} />;
        })}
      </div>
    </section>
  );
}
