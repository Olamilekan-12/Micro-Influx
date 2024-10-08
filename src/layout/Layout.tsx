import Header from "@/components/header/Header";
import SideNav from "@/components/sideNav/SideNav";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SideNav />
      <div className="flex-1 py-[100px] bg-[#FAFAFA]">{children}</div>
    </div>
  );
};

export default Layout;
