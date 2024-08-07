import "../globals.css";
import Top from "../Top";

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex container mx-auto">
      <div></div>
      <div>{children}</div>
    </div>
  );
}
