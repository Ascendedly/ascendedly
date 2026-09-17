import { siteConfig } from "@/data/site";

export function ContactMap({ className }: { className?: string }) {
  return (
    <div className={className}>
      <iframe
        title="Ascendedly office location on Google Maps"
        src={siteConfig.mapEmbedUrl}
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
