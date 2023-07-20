import { FC } from "react";

interface ProductProps {
  params: { category: string };
}

const Product: FC<ProductProps> = ({ params }) => {
  return (
    <>
      <div className="bg-customPrimary w-full min-h-screen pt-24 pb-10">
        <div className="w-5/6 mx-auto text-white flex flex-col gap-y-6">
          <h1>Category {params.category}</h1>
        </div>
      </div>
    </>
  );
};

export default Product;
