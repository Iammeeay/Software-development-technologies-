import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  path: string;
}

interface CategoryPageProps {
  categoryName: string;
  products: Product[];
}

export default function CategoryPage({
  categoryName,
  products,
}: CategoryPageProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">{categoryName}</h1>
          <Link
            to="/"
            className="flex items-center text-indigo-600 hover:text-indigo-900"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Назад
          </Link>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {products.map((product) => (
                <div className="bg-white p-5 overflow-hidden shadow flex flex-col justify-between rounded-lg">
                <Link
                  to={`/${product.path}-page`}
                  state={{ id: product.id }}
                  key={product.id}
                >
                  <div className=" items-center  rounded-md">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-64px h-64px object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-xl font-semibold text-indigo-600">
                      {product.price} ₽
                    </p>
                    
                  </div>
                  
                </Link>
                <button className="mt-2 px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                Избранное
              </button>
              </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
