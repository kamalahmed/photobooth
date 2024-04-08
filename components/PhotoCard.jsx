"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
const PhotoCard = ({ photo }) => {
  const supportedLanguages = ["en", "bn", "ar"];
  const pathname = usePathname();
  const segments = pathname.split("/");
  const lang = segments[1];
  const SupportedLanguage = supportedLanguages.includes(lang) ? lang : "";

  return (
    <Link href={`${SupportedLanguage}/photos/${photo.id}`} className="group">
      <Image src={photo.url} alt={photo.title} width={700} height={700} />

      <div className="title-container">
        <h4 className="title">{photo.title}</h4>
      </div>
    </Link>
  );
};

export default PhotoCard;
