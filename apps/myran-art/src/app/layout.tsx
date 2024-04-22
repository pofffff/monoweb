interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  // const {menu, footer, site} = useSite();
  return (
    <html lang="en">
      {/* <body> {menu && <Header menu={menu} site={site!} />}
      {children}</body> */}
    </html>
  );
}
