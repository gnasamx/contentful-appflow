import {
  Box,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { createClient } from "contentful";
import Image from "next/image";
import NavLink from "next/link";
import Banner from "../components/banner";

export default function Home({ products }) {
  return (
    <Box as="main">
      <Container maxWidth="container.xl">
        <Stack spacing={20}>
          <Banner />
          <Stack alignItems="center" spacing={4}>
            <Heading as="h1" size="lg">
              @everyone
            </Heading>
            <Text>
              The @everyone collection is our most accessible lineup of
              high-quality, affordable, and fun clothing.
            </Text>
          </Stack>
          {products?.length > 0 ? (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {products.map((product) => (
                <Stack key={product.fields.product.id} spacing={0}>
                  <NavLink href={`/products/${product.sys.id}`} passHref>
                    <Link
                      _hover={{
                        opacity: 0.9,
                        transitionProperty: "opacity",
                        transitionDuration: 0.15,
                        transitionFunction: "ease-in",
                      }}
                    >
                      <Image
                        src={product.fields.product.images[0]}
                        layout="responsive"
                        objectFit="cover"
                        width={415}
                        height={415}
                        priority={true}
                        objectPosition="center"
                        alt="All The Feels Hoodie"
                      />
                    </Link>
                  </NavLink>
                  <NavLink href={`/products/${product.sys.id}`} passHref>
                    <Link _hover={{ textDecoration: "none" }}>
                      <Stack alignItems="center" paddingTop={4}>
                        <Text fontSize="xl">
                          {product.fields.product.title}
                        </Text>
                        <Text fontSize="sm">
                          $ {product.fields.product.price}
                        </Text>
                      </Stack>
                    </Link>
                  </NavLink>
                </Stack>
              ))}
            </SimpleGrid>
          ) : (
            <Box textAlign="center">
              <Text color="brand.500">
                We are adding new styles. Check back later on.
              </Text>
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "product" });

  return {
    props: {
      products: res.items,
    },
  };
}
