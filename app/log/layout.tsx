import { SideBar } from "@/components/sidebar/Sidebar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body >
            <SideBar children={children}/>
          {/* {children} */}
        </body>
      </html>
    );
  }
  