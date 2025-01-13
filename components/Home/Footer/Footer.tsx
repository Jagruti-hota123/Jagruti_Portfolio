import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <div>
        <Image
          src="/images/logo.png"
          alt="img"
          width={160}
          height={160}
          className="mx-auto"
        />
      </div>
      <div className="flex items-center flex-wrap justify-center gap-4 text-white font-bold">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="#services" className="hover:underline">
          Services
        </Link>
        <Link href="#projects" className="hover:underline">
          Projects
        </Link>
        <Link href="#education" className="hover:underline">
          Edu Info
        </Link>
        <Link href="#contact" className="hover:underline">
          Contact
        </Link>
      </div>

      <p className="text-white text-center mt-5 text-opacity-60">
        {" "}
        © 2025 All rights reserved by Jagruti Hota
      </p>
    </div>
  );
};

export default Footer;
