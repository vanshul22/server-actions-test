import { Product } from '@/types';
import { addProductToDatabase } from './serverActions/products';
import AddProductsButton from './components/AddProductsButton';

export default async function Home() {

  const res = await fetch("https://652d0272f9afa8ef4b269ce9.mockapi.io/api/v1/products", { cache: "no-cache", next: { tags: ["products"] } });
  const products: Product[] = await res.json();

  return (
    <main>
      <AddProductsButton />
      <div className=' flex items-center justify-center pt-6'>
        <form className='w-96' action={addProductToDatabase}>
          <div className="mb-6">
            <label
              htmlFor="product"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your product
            </label>
            <input
              type="text"
              id="product"
              name="product"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="product name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="grid grid-cols-2 justify-items-center my-10 gap-10">
        {products?.map(item => (

          <a
            key={item.id}
            href={item.img_url} target='_blank'
            className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src={item.img_url}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.product} (Rs. {item.price})
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in
                reverse chronological order.
              </p>
            </div>
          </a>
        ))}
      </div>

    </main>
  )
}
