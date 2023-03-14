import AccountAside from "../../ui/AccountAside";
import AccountMB from "../../ui/AccountMB";

export default function RootLayout({ children }) {
  return (
    <main className="md:flex md:w-[90%] w-[95%] m-auto">
      <AccountAside />

      <div className="w-[100%] ">{children}</div>
      <AccountMB />
    </main>
  );
}
