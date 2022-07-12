import {
  Box,
  Container,
  Divider,
  Grid,
  GridItem,
  Link,
  Text,
} from "@chakra-ui/react";
import NavLink from "next/link";

const firstLinks = [
  {
    label: "YouTube",
  },
  {
    label: "Instagram",
  },
  {
    label: "Twitter",
  },
];

const secondLinks = [
  {
    label: "Contact Us",
  },
  {
    label: "FAQs",
  },
  {
    label: "Policy",
  },
];

export default function Footer() {
  return (
    <Box as="footer" backgroundColor="gray.900" paddingY={20}>
      <Container maxWidth="container.xl">
        <Grid templateColumns={"1fr 1fr 1fr"} templateRows="1fr" gap={10}>
          <GridItem>
            <Box as="ul" listStyleType="none">
              {firstLinks.map((link) => (
                <Box as="li" color="white" key={link.label} lineHeight="taller">
                  {link.label}
                </Box>
              ))}
            </Box>
          </GridItem>

          <GridItem>
            <Box as="ul" listStyleType="none">
              {secondLinks.map((link) => (
                <Box as="li" color="white" key={link.label} lineHeight="taller">
                  {link.label}
                </Box>
              ))}
            </Box>
          </GridItem>

          <GridItem textAlign="end">
            <NavLink href="/" passHref>
              <Link _hover={{ textDecoration: "none" }}>
                <Text
                  textTransform="uppercase"
                  fontWeight="bold"
                  fontSize="xl"
                  display="inline"
                  color="brand.500"
                >
                  Merch
                </Text>
                <Divider
                  orientation="vertical"
                  display="inline"
                  marginX={2}
                  borderColor="white"
                />

                <Text
                  textTransform="uppercase"
                  fontSize="19px"
                  display="inline"
                  color="white"
                >
                  Store
                </Text>
              </Link>
            </NavLink>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
