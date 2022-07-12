import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const products = [
  {
    slug: "best-friend-fitted-t-black",
    title: "Best Friend Fitted T - Black",
    description: `<div><p>Its our Birthday! Legacy merchandise available on sale for limited time!</p><p>Unisex tee with subtle design featuring Wumpus, Nelly, Cap, and Phibi down the back. Choose your favorite and rep your support.</p><p>2020 Branded Edition<br/><br/>Regular fit. 100% cotton.&nbsp;</p></div>`,
    shouldShowSizes: true,
    price: "22.00",
    onSalePrice: "22.00",
    images: [
      "https://cdn.shopify.com/s/files/1/1033/1885/products/Discord_Light_Tee_Back_01_2000x2000_c2e3ad60-0510-4dc6-9a2d-58a636efbbb8_1024x1024.jpg",
      "https://cdn.shopify.com/s/files/1/1033/1885/products/Discrod_Light_Tee_Front_03_1024x1024.png",
      "https://cdn.shopify.com/s/files/1/1033/1885/products/Discord_Light_Tee_Back_02_1024x1024.png",
      "https://cdn.shopify.com/s/files/1/1033/1885/products/Discord_Tee_Front_1024x1024.png",
      "https://cdn.shopify.com/s/files/1/1033/1885/products/Discord_Tee_Back_1024x1024.png",
    ],
  },
  {
    slug: "all-the-feels-hoodie-black",
    title: "All The Feels Hoodie - Black",
    description: `<div<p>Lookatallthefaces.Youdon&rsquo;tevenhavetotellpeoplehowyou&rsquo;refeelinganymore.Justpointtoafaceandcarryonthankstothe@everyonehoodie.</p><ul><li><strong>UNISEXFIT</strong></li><li>80%Cotton,20%PolyBlendFleece</li><li>10ozPremiumFleeceHoodie</li><li>FleeceLinedHood</li><li>TwillNeckTape</li><li>SilkscreenPrintedGraphicsonFront,AndBackOfTheHoodie</li></ul></div>`,
    shouldShowSizes: true,
    price: "60.00",
    onSalePrice: "60.00",
    images: [
      "https://cdn.shopify.com/s/files/1/1033/1885/products/Iyanna_Discord_100521_089_RT_1x1_14b015d7-60de-4864-8bd0-89f5d6512ff8_1024x1024.jpg?v=1638204568",
      "https://cdn.shopify.com/s/files/1/1033/1885/products/Moxley_Discord_100521_124_RT_1x1_02_1024x1024.jpg?v=1638204568",
      "https://cdn.shopify.com/s/files/1/1033/1885/products/Discord_Ecom_Hoodie_Black_01_1_1024x1024.png?v=1638204568",
      "https://cdn.shopify.com/s/files/1/1033/1885/products/Discord_Ecom_Hoodie_Black_02_1_1024x1024.png?v=1638204568",
    ],
  },
  {
    title: "Crew Crew - Blue",
    description: `<div><p>Colors? Check.</p><p>Comfort? Check.</p><p>What a combo for the @here collection crew.</p><br/><br/><strong> UNISEX FIT</strong><br/><br/><ul><li>100% French Terry Cotton</li><li>10.5oz Premium&nbsp;Custom Silhouette Crewneck</li><li>Custom Woven Hip Label</li><li>Puff Print&nbsp;Printed Graphics On Sleeves</li></ul></div>`,
    shouldShowSizes: true,
    price: "50.00",
    onSalePrice: "50.00",
    images: [
      "https://cdn.shopify.com/s/files/1/1033/1885/products/Geri_Discord_111521_386_RT_x1296_b3fbf45b-94a6-4818-9f21-30a69c0f349a_1024x1024.jpg?v=1638227344",
      "https://cdn.shopify.com/s/files/1/1033/1885/products/Discord_Ecom_Crewneck_Blurple_01_1024x1024.png?v=1638227344",
      "https://cdn.shopify.com/s/files/1/1033/1885/products/Discord_Ecom_Crewneck_Blurple_02_1024x1024.png?v=1638227344",
    ],
  },
  {
    title: "Cropped Crew Top",
    description: `<div><p>Don't worry this thing is still 100% comfortable. You know, in case you were wondering if the quarter-zip and half-crop combo make it 3/4 less of anything.</p><br/><br/><ul><li>100% French Terry Cotton</li><li>10.5oz Premium&nbsp;Custom Silhouette&nbsp;Quarterzip Crop</li><li>Custom Woven Hip Label</li><li>Printed Graphics OnSleeve Tape&nbsp;</li></ul></div>`,
    shouldShowSizes: true,
    price: "52.00",
    onSalePrice: "52.00",
    images: [
      "https://cdn.shopify.com/s/files/1/1033/1885/products/Geri_Discord_111521_181_RT_x1296_06bfc550-bebf-48a0-b792-ccc4fcafc781_1024x1024.jpg?v=1638227487",
      "https://cdn.shopify.com/s/files/1/1033/1885/products/Discord_Ecom_CropTop_Black_02_1024x1024.png?v=1638227487",
    ],
  },
  {
    title: "All The Feels Beanie",
    description: `<div><div></div><div>It&rsquo;s a beanie. If you&rsquo;re cold, put it on your head. Want to look cool? Put it on your head. Didn&rsquo;t shower, but need to go out. Put it on your head.</div><br/><br/><ul><li>Beanies feature a custom knit body, cuffed hem, and are made of 100% Acrylic.</li><li>The&nbsp;beanie&nbsp;is finished with high-quality embroidery.</li><li>Custom woven label on the cuff</li><li>One size fits most.</li></ul><br/></div>`,
    shouldShowSizes: true,
    price: "25.00",
    onSalePrice: "25.00",
    images: [
      "https://cdn.shopify.com/s/files/1/1033/1885/products/Moxley_Discord_100521_146_RT_1x1_02_1024x1024.jpg?v=1634158859",
      "https://cdn.shopify.com/s/files/1/1033/1885/products/Iyanna_Discord_100521_511_RT_1x1_9983b596-e99e-4115-9efa-9ab6381d0053_1024x1024.jpg?v=1634152550",
      "https://cdn.shopify.com/s/files/1/1033/1885/products/Discord_Ecom_Beanie_Black_02_1024x1024.png?v=1634154252",
      "https://cdn.shopify.com/s/files/1/1033/1885/products/Discord_Ecom_Beanie_White_01_1024x1024.png?v=1634154252",
    ],
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const product of products) {
    const user = await prisma.product.create({
      data: product,
    });
    console.log(`Created product with id: ${product.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
