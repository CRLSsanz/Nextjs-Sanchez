import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Page = () => {
  return (
    <div>
      <section className="w-full h-[600px] flex items-center">
        <div>TECNOLOGIA</div>
      </section>
      <Footer />
      <Navbar />
    </div>
  );
};

export default Page;
