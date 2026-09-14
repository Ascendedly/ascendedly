import Image from "next/image";
import Link from "next/link";

import { media } from "@/data/media";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center", className)}
      aria-label="Ascendedly homepage"
    >
      {compact ? (
        <Image
          src={media.brandMark.src}
          alt={media.brandMark.alt}
          width={36}
          height={36}
          className="h-9 w-9 object-contain"
          priority
        />
      ) : (
        <Image
          src={media.brandLogo.src}
          alt={media.brandLogo.alt}
          width={180}
          height={50}
          className="h-9 w-auto object-contain sm:h-10"
          priority
        />
      )}
    </Link>
  );
}
