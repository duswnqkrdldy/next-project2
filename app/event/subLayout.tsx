export default function SubLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div></div>
      <div>{children}</div>
    </div>
  );
}
