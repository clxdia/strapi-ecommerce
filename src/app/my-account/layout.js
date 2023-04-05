import AccountAside from "../../ui/AccountAside";
import AccountMB from "../../ui/AccountMB";

export default function RootLayout({ children }) {
  return (
    <main className="md:w-[90%] w-[100%] mx-auto md:flex gap-5 md:pt-[5rem] relative">
      <aside className="w-auto sticky top-10 pt-[5rem] h-fit">
        <AccountAside />
      </aside>
      <div className="w-[100%] flex pt-2 md:pt-[5rem]">{children}</div>
      <AccountMB />
    </main>
  );
}
