import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Link,
  Text,
} from "@chakra-ui/react";
import NavLink from "next/link";

export default function PageNavigation({ links }) {
  return (
    <Breadcrumb spacing="8px" separator="›">
      {links.map((link, i) => {
        return (
          <BreadcrumbItem key={link.label}>
            {i === links.length - 1 ? (
              <Text
                fontWeight="bold"
                color="brand.500"
                textTransform="uppercase"
                fontSize="sm"
                letterSpacing="1px"
              >
                {link.label}
              </Text>
            ) : (
              <NavLink href={link.url} passHref>
                <Link
                  fontWeight="bold"
                  color="blackAlpha.600"
                  as={BreadcrumbLink}
                  textTransform="uppercase"
                  fontSize="sm"
                  letterSpacing="1px"
                  _hover={{
                    textDecoration: "none",
                    color: "typography.500",
                  }}
                >
                  {link.label}
                </Link>
              </NavLink>
            )}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}
