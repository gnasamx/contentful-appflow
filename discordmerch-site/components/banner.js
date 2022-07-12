import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Banner() {
  return (
    <Box>
      <Image
        width={1248}
        height={446}
        objectFit="cover"
        objectPosition="center"
        src="https://cdn.shopify.com/s/files/1/1033/1885/collections/Shopify_Collection_here_01_1512x.png?v=1637684800"
        alt="Everyone collection banner"
      />
    </Box>
  );
}
