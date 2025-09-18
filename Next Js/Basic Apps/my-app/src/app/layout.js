import "./globals.css";
import Header from "@/Components/Header";
function RootLayout({children}){
  return (
     <html lang="en">
        <body>
          <Header></Header>
          <h1>This is Home Page Layout</h1>
          {children}
        </body>
      </html>
  );
}

export default RootLayout;