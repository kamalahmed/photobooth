import Image from "next/image";
import Link from "next/link";
function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="Photobooth Logo"
        className="max-w-[60px] md:max-w-[70px]"
        width={70}
        height={45}
        priority
      />
    </Link>
  );
}

export default Logo;
