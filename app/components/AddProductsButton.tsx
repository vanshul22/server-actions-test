"use client"

import { useTransition } from "react";
import { addProductToDatabase } from "../serverActions/products";

const AddProductsButton = () => {
    const [isPending, startTransition] = useTransition();

    const formData = new FormData();
    formData.append('product', "mac-book-pro")
    formData.append('price', "129")

    return (
        <button className="text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800" onClick={() => startTransition(() => addProductToDatabase(formData))}>{isPending ? "Adding..." : "Add Laptop"}</button>
    )
}

export default AddProductsButton;