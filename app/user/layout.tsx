import "../globals.css";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex container mx-auto">
      <div>{children}</div>
    </div>
  );
}
