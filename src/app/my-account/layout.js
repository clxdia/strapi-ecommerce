import AccountAside from "../../ui/AccountAside";
import AccountMB from "../../ui/AccountMB";

export default function RootLayout({ children }) {
  return (
    <main className="md:flex md:w-[90%] w-[95%] m-auto md:pt-[7rem] pt-[5rem] ">
      <AccountAside />
      <div className="w-[100%] flex justify-end">{children}</div>
      <AccountMB />
    </main>
  );
}
