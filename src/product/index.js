import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  return <h1>상품 상세 페이지 {id}</h1>;
}

export default ProductPage;
