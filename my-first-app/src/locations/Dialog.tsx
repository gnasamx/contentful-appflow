import { DialogExtensionSDK } from "@contentful/app-sdk";
import {
  Box,
  EntityList,
  Note,
  SkeletonBodyText,
  SkeletonContainer,
} from "@contentful/f36-components";
import { /* useCMA, */ useSDK } from "@contentful/react-apps-toolkit";
import { useEffect, useState } from "react";

interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  images: string[];
}

interface IStatus {
  loading: "loading";
  error: "error";
  success: "success";
}

const Dialog = () => {
  const sdk = useSDK<DialogExtensionSDK>();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [status, setStatus] = useState<keyof IStatus>("loading");

  useEffect(() => {
    sdk.window.startAutoResizer();
  }, [sdk]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:8080/api/products");
        const products = await response.json();
        setProducts(products);
        setStatus("success");
      } catch (error) {
        setStatus("error");
      }
    }
    fetchProducts();
  }, []);

  if (status === "error") {
    return (
      <Box padding="spacingM">
        <Note variant="negative">Something went wrong</Note>
      </Box>
    );
  }

  return (
    <Box padding="spacingM">
      {status === "loading" && products?.length === 0 ? (
        <SkeletonContainer>
          <SkeletonBodyText numberOfLines={4} />
        </SkeletonContainer>
      ) : status === "success" && products.length > 0 ? (
        <EntityList>
          {products.map((product) => (
            <EntityList.Item
              title={product.title}
              key={product.id}
              description={product.description}
              thumbnailUrl={product.images?.[0]}
              onClick={() => sdk.close(product.id)}
            />
          ))}
        </EntityList>
      ) : (
        <p>No products</p>
      )}
    </Box>
  );
};

export default Dialog;
