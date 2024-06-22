import React, { useEffect, useState } from "react";
import ProductDetails from "../../components/Product/ProductDetails";
import { useParams, useRouteLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AdditionalInfo from "../../components/Product/AdditionalInfo";
import RelatedProducts from "../../components/Product/RelatedProducts";
import { selectRandomElements } from "../../utils/helperFunction";
import ProtectedRoute from "../../components/General/ProtectedRoute";

const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const { productId, category } = useParams();

  const [product, setProduct] = useState({});
  const [productCategory, setProductCategory] = useState("");
  const [relatedProducts, setRelatedProducts] = useState([]);

  const products = useSelector((state) => state.product.products);
  console.log(products);

  useEffect(() => {
    if (category === "all-products") {
      products.forEach((product) =>
        product.items.forEach((item) => {
          if (item._id === productId) {
            setProduct(item);
            setProductCategory(product.title);
          }
        })
      );
      return;
    }

    const categoryProduct = products?.find((product) =>
      product.category === category ? product : null
    );
    setProductCategory(categoryProduct?.title);

    // Setting Related Products
    setRelatedProducts(
      selectRandomElements(
        products
          ?.find((product) => product.category === categoryProduct.category)
          ?.items.filter((product) => product._id !== productId),
        4
      )
    );

    const filteredProduct = categoryProduct?.items.find((item) =>
      item._id === productId ? item : null
    );
    setProduct(filteredProduct);
  }, [products, category]);

  return (
    <div className="space-y-5">
      <ProductDetails product={product} productCategory={productCategory} />
      <AdditionalInfo description={product?.itemDescription} />
      <RelatedProducts
        relatedProducts={relatedProducts}
        category={productCategory?.toLowerCase()}
      />
    </div>
  );
};

export default ProductDetailsPage;
