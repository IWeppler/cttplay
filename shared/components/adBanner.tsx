import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

interface AdBannerProps {
  format?:
    | "horizontal"
    | "rectangle"
    | "square"
    | "vertical"
    | "mobile"
    | "custom";
  src?: string;
  image?: string;
  href?: string;
  className?: string;
  unoptimized?: boolean;
}

export default function AdBanner({
  format = "rectangle",
  src,
  image,
  href = "#",
  className,
  unoptimized = false,
}: AdBannerProps) {
  const imageUrl = src || image;

  // Definimos tamaños estándar de la industria (IAB)
  const sizeClasses = {
    horizontal: "w-full max-w-[1200px] h-[90px]",
    rectangle: "w-[700px] h-[250px]",
    square: "w-[300px] h-[300px]",
    vertical: "w-[300px] h-[600px] hidden lg:flex",
    mobile: "w-[320px] h-[50px] md:hidden",
    custom: "w-full h-full",
  };

  const containerClasses = clsx(
    "relative flex flex-col items-center justify-center bg-gray-50 border border-gray-100 overflow-hidden mx-auto",
    sizeClasses[format],
    className
  );

  const content = (
    <>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Publicidad"
          fill
          className="object-cover hover:opacity-90 transition-opacity"
          sizes="(max-width: 768px) 100vw, 728px"
          unoptimized={unoptimized}
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-gray-300 text-xs text-center p-2 h-full w-full bg-gray-100">
          <span className="font-bold uppercase tracking-widest text-[10px] mb-1">
            Espacio Publicitario
          </span>
          <span className="opacity-50 text-[9px]">{format}</span>
        </div>
      )}

      <span className="absolute top-0 right-0 bg-white/80 backdrop-blur-sm text-[8px] text-gray-400 px-1 uppercase tracking-wider z-10 pointer-events-none">
        Publicidad
      </span>
    </>
  );

  if (imageUrl) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className={containerClasses}
      >
        {content}
      </Link>
    );
  }

  return <div className={containerClasses}>{content}</div>;
}
