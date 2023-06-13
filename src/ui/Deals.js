import Image from "next/image";
import Link from "next/link";

async function fetchData(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("failed");
  }

  return res.json();
}

export default async function Deals() {
  const items = await fetchData(
    process.env.NEXT_PUBLIC_API_URL + "?populate=*&filters[type][$eq]=normal"
  );
  return (
    <section className="mb-20 bg-blueish p-5 md:p-14 text-white pb-14">
      <div className="w-full sm:w-[95%] md:w-[75%] m-auto">
        <h1 className="md:hidden block text-[1.5rem] font-clash font-medium uppercase mt-5">
          Offerte del giorno
        </h1>
        <div className="flex flex-col md:flex-row md:gap-5 ">
          <div className="w-full md:w-[50%] flex flex-col min-w-[30%]">
            <h1 className="md:block hidden text-[2rem] font-clash font-medium uppercase">
              Offerte del giorno
            </h1>
            <p className="text-[12px] sm:text-[12px] md:text-[15px] md:w-[90%] mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <button className="mt-6 block w-[60%] bg-coral text-buttontext p-2 md:p-3 gap-3 justify-center items-center border-[2px] border-coral hover:ease-in hover:border-[2px] hover:border-coral hover:bg-buttontext hover:text-coral md:mb-0 mb-5 font-satoshi font-bold uppercase tracking-wide">
              <Link href="./view-all">Scopri ora</Link>
            </button>
          </div>

          <div className="min-w-[60%] flex overflow-y-hidden overflow-x-scroll gap-5">
            {items.data.map((item) => (
              <div
                className="md:min-w-[40%] max-w-[300px] max-h-[600px] w-[100%] min-w-[60%] md:h-[30vw] h-[70vw] relative mb-0"
                key={item.id}
              >
                <Link href="/view-all/[id]" as={`/view-all/${item.id}`}>
                  <Image
                    src={item.attributes.img.data.attributes.url}
                    width="600"
                    height="600"
                    className="w-[100%] h-[80%] object-cover"
                    alt={item.attributes.title}
                  ></Image>
                  <div className="block bg-white text-black p-3">
                    <p className="text-[1rem] font-clash font-normal">
                      {item.attributes.title}
                    </p>
                    <div className="flex gap-3 items-center">
                      <p className="text-red-600 font-bold text-[16px]">
                        €{item.attributes.price}
                      </p>
                      <p className="text-[13px] text-gray-500">
                        <s>€50.99</s>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
