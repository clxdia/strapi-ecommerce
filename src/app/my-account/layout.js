import AccountAside from "../../ui/AccountAside";
import AccountMB from "../../ui/AccountMB";

export default function RootLayout({ children }) {
  return (
    <main className="md:flex md:w-[90%] w-[90%] m-auto md:pt-[10rem] md:pb-[5rem] pt-[2rem] ">
      <AccountAside />
      <div className="w-[100%] flex">{children}</div>
      <AccountMB />
    </main>
  );
}
