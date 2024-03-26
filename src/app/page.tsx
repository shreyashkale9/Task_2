import Navbar from "@/components/navbar";
import VerticalNavbar from "@/components/verticalNavbar";
import MainContent from "@/components/mainContent";

export default function Home() {
  return (
    <main className="">
      <nav className="">
        <Navbar />
      </nav>
      <div className="">
        <VerticalNavbar />
      </div>
      <div className="">
        <MainContent />
      </div>
    </main>
  );
}
