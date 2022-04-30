import React from "react";
import Image from "next/image";
import clsx from "clsx";

export default function GridItem({ image, onClick, type = "regular" }) {
  return (
    <div
      onClick={() => onClick(image)}
      className={clsx("group relative h-auto h-96 w-full cursor-pointer", {
        ["col-span-full lg:col-span-3"]: type === "regular",
        ["col-span-6"]: type === "large",
      })}
    >
      <Image
        src={image.src}
        alt={image.title}
        objectFit="cover"
        layout="fill"
      />
      <div
        className={clsx(
          "absolute top-0 left-0  h-full w-full",
          "flex flex-col justify-end gap-2 bg-blue-800/70 p-12 text-white",
          "opacity-0 transition-all ease-in-out group-hover:opacity-100"
        )}
      >
        <div
          className={clsx(
            "text-3xl font-bold",
            "translate-y-1/2 opacity-0 transition-all delay-150",
            "group-hover:translate-y-0 group-hover:opacity-100"
          )}
        >
          {image.title}
        </div>
        <div
          className={clsx(
            "text-slate-300",
            "translate-y-1/2 opacity-0 transition-all delay-200",
            "group-hover:translate-y-0 group-hover:opacity-100"
          )}
        >
          {image.subtitle}
        </div>
      </div>
    </div>
  );
}
