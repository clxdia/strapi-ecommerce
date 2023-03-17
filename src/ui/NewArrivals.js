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
      <h1 className="text-center mb-10 text-black font-work font-[500] underline decoration-button decoration-4 underline-offset-8 z-30 pt-10  md:text-[2rem] text-[1.5rem]">
        Nuovi arrivi
      </h1>
      <div className="flex flex-wrap justify-center gap-3 md:justify-center md:gap-10">
        {items.data.map((item) => {
          return <ItemHomeUI item={item} key={item.id} />;
        })}
        {/* {loading && (
          <div
            role="status"
            class="w-[100%] animate-pulse items-center self-center flex"
          >
            <div class="md:w-[250px] md:h-[350px] w-[180px] h-[250px] bg-gray-200 rounded-md dark:bg-gray-700 mb-4"></div>
            <div class="md:w-[250px] md:h-[350px] w-[180px] h-[250px] bg-gray-200 rounded-md dark:bg-gray-700 mb-2.5"></div>
            <div class="md:w-[250px] md:h-[350px] w-[180px] h-[250px] bg-gray-200 rounded-md dark:bg-gray-700 mb-2.5"></div>
            <div class="md:w-[250px] md:h-[350px] w-[180px] h-[250px] bg-gray-200 rounded-md dark:bg-gray-700  mb-2.5"></div>
            <div class="md:w-[250px] md:h-[350px] w-[180px] h-[250px] bg-gray-200 rounded-md dark:bg-gray-700  mb-2.5"></div>
            <div class="md:w-[250px] md:h-[350px] w-[180px] h-[250px] bg-gray-200 rounded-md dark:bg-gray-700 "></div>
            <span class="sr-only">Loading...</span>
          </div>
        )} */}
      </div>
    </section>
  );
}
