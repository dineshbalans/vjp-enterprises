import React from "react";
import { useParams, useRouteLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../../components/Product/ProductList";

const CategoryPage = () => {
  const { category } = useParams();
  // const data = useRouteLoaderData("products");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const subCategory = useSelector((state) => state.product.subCategory);

  const info = products?.filter((item) =>
    item.category === category ? item : null
  );

  const allProductItems = [];
  if (category === "all-products") {
    products.forEach((product) => allProductItems.push(...product.items));

    const allProductObjCopy = { ...info[0] };
    allProductObjCopy.items = allProductItems;
    info[0] = allProductObjCopy;
  }

  // useEffect(() => {
  //   data && dispatch(productActions.addProducts(data));
  // }, []);

  return (
    <ProductList
      productInfo={info[0]}
      category={category}
      subCategory={subCategory}
    />
  );
};

export default CategoryPage;
