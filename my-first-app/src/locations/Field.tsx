import { FieldExtensionSDK } from "@contentful/app-sdk";
import { Box, Button, EntryCard } from "@contentful/f36-components";
import { useSDK } from "@contentful/react-apps-toolkit";
import { useEffect, useState } from "react";
import { ShoppingCartIcon } from "@contentful/f36-icons";

interface IProductItem {
  title: string;
  description: string;
  rating: {
    rate: string;
    count: string;
  };
  category: string;
  images: string[];
  status: string;
}

const Field = () => {
  const sdk = useSDK<FieldExtensionSDK>();
  const [selectedProduct, setSelectedProduct] = useState<IProductItem>(
    sdk.field.getValue()
  );

  useEffect(() => {
    sdk.window.startAutoResizer();
  }, [sdk]);

  const handleOnSelectProduct = async () => {
    // sdk.dialogs.openConfirm({title: 'Select product', shouldCloseOnEscapePress: true, message: "This is message"});
    const productId = await sdk.dialogs.openCurrentApp({
      width: "large",
      position: "center",
      title: "Select product",
      minHeight: 400,
    });
    if (productId) {
      console.log("selected product: ", productId);
      const response = await window.fetch(
        `http://localhost:8080/api/product/${productId}`
      );
      const selectedProduct = await response.json();
      console.log("selectedProduct: ", selectedProduct);
      setSelectedProduct(selectedProduct);
      sdk.field.setValue(selectedProduct);
    }
  };

  return (
    <Box>
      {selectedProduct && (
        <EntryCard
          contentType={selectedProduct.category}
          title={selectedProduct.title}
          description={selectedProduct.description}
          thumbnailElement={
            <img alt="random" src={selectedProduct?.images?.[0]} />
          }
          marginBottom={"spacingM"}
        />
      )}
      <Button
        variant="secondary"
        size="small"
        startIcon={<ShoppingCartIcon />}
        onClick={handleOnSelectProduct}
      >
        {!!selectedProduct ? "Change" : "Select"} product
      </Button>
    </Box>
  );
};

export default Field;
