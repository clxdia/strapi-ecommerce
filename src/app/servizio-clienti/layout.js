import AsideMB from "../../ui/AsideMB";
import AsideNS from "../../ui/AsideNS";

export default function RootLayout({ children }) {
  return (
    <main className="md:w-[90%] w-[100%] h-auto m-auto md:flex gap-5 mt-0">
      <aside className="w-[20%] min-w-[20%] h-fit font-work text-[15px] font-[300] md:block hidden pt-[7rem] top-0 sticky">
        <AsideNS />
      </aside>
      <div className="w-[100%] pt-2 md:pt-[7rem]">{children}</div>
      <AsideMB />
    </main>
  );
}
