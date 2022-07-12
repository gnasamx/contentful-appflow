import { Box, Image } from "@chakra-ui/react";
import NextImage from "next/image";

export default function BaseImage({ src, alt }) {
  return (
    <Box
      sx={{
        "> div": {
          position: "unset !important",
          height: "100%",
        },
      }}
    >
      <Image
        as={NextImage}
        src={src}
        alt={alt}
        layout="fill"
        objectFit="contain"
        width="auto !important"
        height="100% !important"
        position="relative !important"
      />
    </Box>
  );
}
