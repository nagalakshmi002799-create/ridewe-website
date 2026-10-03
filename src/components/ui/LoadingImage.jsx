import { useState } from "react";
import { cn } from "../../lib/cn.js";

export function LoadingImage({
  alt,
  className,
  imageClassName,
  fallback,
  ...imageProps
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn(
        "relative block overflow-hidden bg-[linear-gradient(135deg,#e8fafb_0%,#f2fcf5_50%,#eafbef_100%)]",
        className,
      )}
    >
      {failed ? (
        <span
          aria-label={`${alt} (image unavailable)`}
          className="absolute inset-0 grid place-items-center bg-[linear-gradient(135deg,#e8fafb_0%,#f2fcf5_50%,#eafbef_100%)] text-xs font-medium text-slate-500"
          role="img"
        >
          {fallback ?? "Image unavailable"}
        </span>
      ) : (
        <img
          {...imageProps}
          alt={alt}
          className={cn(
            "absolute inset-0 size-full object-cover transition-opacity duration-500 motion-reduce:transition-none",
            loaded ? "opacity-100" : "opacity-0",
            imageClassName,
          )}
          decoding="async"
          onError={() => setFailed(true)}
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
}