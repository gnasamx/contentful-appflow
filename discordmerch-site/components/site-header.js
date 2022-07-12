import { Box, Container, Divider, Flex, Link, Text } from "@chakra-ui/react";
import NavLink from "next/link";

const links = [
  { label: "Home", url: "/" },
  { label: "Shop All", url: "/collections/all" },
  { label: "FQA", url: "faq" },
];

export default function SiteHeader() {
  return (
    <Box as="nav" paddingY={4} marginBottom={4}>
      <Container maxWidth="container.xl">
        <Flex alignItems="center">
          <NavLink href="/" passHref>
            <Link _hover={{ textDecoration: "none" }}>
              <Text
                textTransform="uppercase"
                fontWeight="bold"
                fontSize="xl"
                display="inline"
              >
                Merch
              </Text>
              <Divider
                orientation="vertical"
                display="inline"
                marginX={2}
                borderColor="blackAlpha.300"
              />

              <Text textTransform="uppercase" fontSize="19px" display="inline">
                Store
              </Text>
            </Link>
          </NavLink>

          <Box as="ul" marginLeft="auto" display="flex" listStyleType="none">
            {links.map((link) => (
              <Box
                key={link.label}
                as="li"
                width="full"
                display="inline-block"
                whiteSpace="normal"
                position="relative"
              >
                <NavLink href={link.url} passHref>
                  <Link
                    display="inline-block"
                    fontWeight="bold"
                    padding={4}
                    whiteSpace="nowrap"
                    _hover={{
                      textDecoration: "none",
                      opacity: 0.7,
                      transitionProperty: "opacity",
                      transitionDuration: 0.15,
                      transitionFunction: "ease-in",
                    }}
                  >
                    {link.label}
                  </Link>
                </NavLink>
              </Box>
            ))}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
// Shop All
// Faq
