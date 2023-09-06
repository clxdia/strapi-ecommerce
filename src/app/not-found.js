import Image from "next/image";
import Link from "next/link";
import error from "../images/404.jpg";

export const metadata = {
  title: "E-Commerce",
};

export default function NotFound() {
  return (
    <div className="md:pt-[7rem] pb-[10rem] md:w-[90%] m-auto flex md:flex-row flex-col md:justify-center justify-between w-[90%]">
      <div className="flex flex-col md:h-[50vh] h-fit my-auto md:w-[50%] md:items-start md:justify-center items-center">
        <h2 className="text-[80px] md:text-[160px]">404</h2>
        <h3 className="text-[15px] md:text-[30px]">
          Oops! La pagina che stai cercando non esiste...
        </h3>
        <button className="mt-5 mb-4 flex bg-blueish text-buttontext p-3 w-[80%] md:w-1/2 gap-3 justify-center items-center border-[2px] border-blueish hover:ease-in transition ease-in-out delay-150   hover:shadow-headline/50 hover:shadow-xl rounded-xl font-satoshi font-bold uppercase tracking-wide">
          <Link href="/" className="text-bold hover:cursor-pointer">
            Ritorna
          </Link>
        </button>
      </div>
      <div className="md:w-[50%]  mt-[5rem] md:m-auto ">
        <Image src={error} alt="Errore 404 immagine" />
      </div>
    </div>
  );
}
