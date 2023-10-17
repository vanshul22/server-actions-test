"use server";

import { Product } from "@/types";
import { revalidateTag } from "next/cache";

export const addProductToDatabase = async (e: FormData) => {
    // Whenever use server actions then add this above line "use server"
    const product = e.get("product")?.toString();
    const price = e.get("price")?.toString();

    if (!product || !price) return;

    const newProduct: Product = { product, price };

    await fetch("https://652d0272f9afa8ef4b269ce9.mockapi.io/api/v1/products", { method: "POST", body: JSON.stringify(newProduct), headers: { 'Content-Type': "application/json" } });

    revalidateTag("products");

};