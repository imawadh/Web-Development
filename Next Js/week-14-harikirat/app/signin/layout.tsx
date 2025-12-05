export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
          <h1 className="text-center font-bold border">30% off for next 3 days</h1>
          {children}
        </body>
      </html>
    );
  }