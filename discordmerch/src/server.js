import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import slugify from "@sindresorhus/slugify";
import cors from "cors";
import morgan from "morgan";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();

/** Prisma */
let prisma;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

/** Middleware */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(morgan("tiny"));

/** Api */
app.get("/", (req, res) => {
  res.send("okay");
});

app.get("/api/products", async (req, res) => {
  const result = await prisma.product.findMany();
  res.json(result);
});

app.post("/api/product/create", async (req, res) => {
  const { title, description, images, price, onSalePrice, shouldShowSizes } =
    req.body;

  const result = await prisma.product.create({
    data: {
      title,
      slug: slugify(title),
      description,
      images,
      price,
      onSalePrice,
      shouldShowSizes,
    },
  });
  res.json(result);
});

app.get("/api/product/:id", async (req, res) => {
  const { id } = req.params;
  const product = await prisma.product.findUnique({
    where: { id },
  });
  res.json(product);
});

app.delete("/api/product/:id", async (req, res) => {
  const { id } = req.params;
  const product = await prisma.product.delete({
    where: { id },
  });
  res.json(product);
});

app.listen(8080, () => console.log("Example app is listening on port 8080."));
