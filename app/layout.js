import "@/assets/styles/global.css";

export const metadata = {
  title: "Rent a house | Find the perfect rental",
  description: "Find your rental property",
  keywords: "rentals, find rentals, find properties",
};
const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
export default MainLayout;
