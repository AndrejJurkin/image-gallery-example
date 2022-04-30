import React, { useState } from "react";
import GridItem from "../GridItem/GridItem";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";
import clsx from "clsx";

export default function Grid({ images }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const prevIndex = (index + images.length - 1) % images.length;
  const nextIndex = (index + images.length + 1) % images.length;

  const mainSrc = images[index].src;
  const prevSrc = images[prevIndex].src;
  const nextSrc = images[nextIndex].src;

  const handleImageClick = (index) => {
    setIndex(index);
    setOpen(true);
  };

  const onCloseLightbox = () => {
    setOpen(false);
  };

  return (
    <section>
      {open && (
        <Lightbox
          mainSrc={mainSrc || ""}
          nextSrc={nextSrc || ""}
          prevSrc={prevSrc || ""}
          onCloseRequest={onCloseLightbox}
          onMovePrevRequest={() => setIndex(prevIndex)}
          onMoveNextRequest={() => setIndex(nextIndex)}
          imageTitle={""}
          imageCaption={""}
        />
      )}
      <div
        className={clsx(
          "mx-auto grid max-w-screen-2xl grid-cols-6 gap-2 pt-12 lg:grid-cols-12"
        )}
      >
        {images.map((image, index) => (
          <GridItem
            type={image.type}
            key={image.id}
            image={image}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </section>
  );
}
