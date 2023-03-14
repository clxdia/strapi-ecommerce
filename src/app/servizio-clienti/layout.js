import AsideMB from "../../ui/AsideMB";
import AsideNS from "../../ui/AsideNS";

export default function RootLayout({ children }) {
  return (
    <main className="md:w-[90%] w-[100%] m-auto md:flex gap-5 mt-10">
      <AsideNS />
      <div className="w-[100%]">{children}</div>
      <AsideMB />
    </main>
  );
}
