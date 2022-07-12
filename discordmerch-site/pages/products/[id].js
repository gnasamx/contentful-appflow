import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Stack,
  Text,
  useNumberInput,
} from "@chakra-ui/react";
import { createClient } from "contentful";
import parser from "html-react-parser";
import NextLink from "next/link";
import PageNavigation from "../../components/page-navigation";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default function SingleProduct({ product }) {
  const links = [
    { label: "Home", url: "/" },
    { label: product?.fields.product.title, url: "#" },
  ];

  return (
    <Box as="main">
      <Container maxW="container.xl">
        <Box marginBottom={4} width="full">
          <PageNavigation links={links} />
        </Box>
        <Box>
          <Grid templateColumns="1.25fr 1fr" templateRows="1fr" gap={12}>
            <GridItem>
              <ImageStack product={product?.fields.product} />
            </GridItem>
            <GridItem>
              <Details product={product?.fields.product} />
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

function ImageStack({ product }) {
  return (
    <Stack spacing={4}>
      {product?.images.map((image, index) => {
        return (
          <Box key={index} overflow="hidden">
            <Image src={image} alt={`${product.title} ${index}`} />
          </Box>
        );
      })}
    </Stack>
  );
}

function Details({ product }) {
  return (
    <Stack spacing={5}>
      <Heading as="h1" size="xl">
        {product.title}
      </Heading>
      <Text fontWeight="bold" fontSize="lg">
        $ {product.price}
      </Text>
      <Text>
        <NextLink href="/policy/shipping-policy" passHref>
          <Link color="brand.500" textDecoration="underline">
            Shipping
          </Link>
        </NextLink>{" "}
        calculated at checkout
      </Text>
      <HStack alignItems="flex-end">
        <QuantitySelector />
        <Button>Add to cart</Button>
      </HStack>
      <Box className="wysiwyg">{parser(product.description)}</Box>
    </Stack>
  );
}

function QuantitySelector() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 5,
      precision: 0,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <Stack spacing={4}>
      <Text color="blackAlpha.600" fontSize="lg" letterSpacing="1px">
        Quantity
      </Text>
      <Box maxWidth="max-content">
        <HStack>
          <Button {...dec} variant="unstyled">
            -
          </Button>
          <Input
            {...input}
            width={12}
            readOnly
            variant="unstyled"
            backgroundColor="gray.100"
            height={10}
            display="inline"
            textAlign="center"
            fontSize="lg"
          />
          <Button {...inc} variant="unstyled">
            +
          </Button>
        </HStack>
      </Box>
    </Stack>
  );
}

export async function getStaticPaths() {
  const { items } = await client.getEntries({
    content_type: "product",
  });

  const paths = items.map((item) => {
    return {
      params: { id: item.sys.id },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    "sys.id": params.id,
  });
  return {
    props: { product: items[0] },
  };
}
