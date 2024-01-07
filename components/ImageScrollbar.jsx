import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@chakra-ui/react";

const ImageScrollbar = ({ data }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 750, min: 0 },
      items: 1,
      width: 200,
      height: 100,
    },
  };

  return (
    <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
      <Carousel responsive={responsive}>
        {data.map((item) => (
          <Box
            width="1900px"
            height="700px"
            key={item.id}
            itemId={item.id}
            overflow="hidden"
            p="0"
          >
            <Image
              className=""
              alt="property"
              placeholder="blur"
              blurDataURL={item.url}
              src={item.url}
              width={1200}
              height={700}
              sizes="(max-width: 500px) 1000px, (max-width: 1023px) 4000px, 1000px"
            />
          </Box>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageScrollbar;
