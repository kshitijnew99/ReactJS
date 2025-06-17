import { useNavigate } from "react-router-dom"

const ProductDetail = () => {

  const navigator = useNavigate();

  // const NavigateHandler = () => {
  //     navigator('/product')
  // }
  return (
    <div className="productDetail">
      <h1>Product Name</h1>
      <h2>Product Details..</h2>
      <button onClick={() => navigator(-1)}>Go Back</button>
    </div>
  )
}

export default ProductDetail