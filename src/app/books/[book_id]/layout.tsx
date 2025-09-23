export default function BookLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <div className="text-2xl text-green-700">Featured Books</div>
        {children}
    </div>
  );
}