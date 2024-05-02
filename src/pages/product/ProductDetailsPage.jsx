import React, { useEffect, useState } from "react";
import ProductDetails from "../../components/Product/ProductDetails";
import { useParams, useRouteLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/productSlice";
import AdditionalInfo from "../../components/Product/AdditionalInfo";
import RelatedProducts from "../../components/Product/RelatedProducts";
import { selectRandomElements } from "../../utils/helperFunction";
import ProtectedRoute from "../../components/General/ProtectedRoute";

const ProductDetailsPage = () => {
  const [product, setProduct] = useState({});
  const [productCategory, setProductCategory] = useState("");
  const [relatedProducts, setRelatedProducts] = useState([]);

  const { productId, category } = useParams();
  const data = useRouteLoaderData("products");

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    // data && dispatch(productActions.addProducts(data));

    if (category === "all-products") {
      (data || products).forEach((product) =>
        product.items.forEach((item) => {
          if (item.itemId === productId) {
            setProduct(item);
            setProductCategory(product.title);
          }
        })
      );
      return;
    }

    const categoryProduct = (data || products)?.find((product) =>
      product.category === category ? product : null
    );
    setProductCategory(categoryProduct?.title);

    // Setting Related Products
    setRelatedProducts(
      selectRandomElements(
        (data || products)
          ?.find((product) => product.category === categoryProduct.category)
          ?.items.filter((product) => product.itemId !== productId),
        4
      )
    );

    const filteredProduct = categoryProduct?.items.find((item) =>
      item.itemId === productId ? item : null
    );
    setProduct(filteredProduct);
  }, [products, data, category]);

  return (
    <div className="space-y-5">
      <ProductDetails product={product} productCategory={productCategory} />
      <AdditionalInfo description={product?.itemDescription} />
      <RelatedProducts
        relatedProducts={relatedProducts}
        category={productCategory.toLowerCase()}
      />
    </div>
  );
};

export default ProductDetailsPage;
