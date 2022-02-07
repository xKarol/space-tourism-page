import Image from "next/image";

export default function ImageComponent({ src, alt, className }) {
  return (
    <div className={`main-section__image ${className}`}>
      <Image src={src} alt={alt} layout="fill" objectFit={"contain"} priority />
    </div>
  );
}
