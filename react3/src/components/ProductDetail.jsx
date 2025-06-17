import { useNavigate } from "react-router-dom"

const ProductDetail = () => {

  const navigator = useNavigate();

  const NavigateHandler = () => {
      navigator('/product')
  }
  return (
    <div>
      <h1>Product Name</h1>
      <h1>Product Details</h1>
      <button onClick={NavigateHandler}>Go Back</button>
    </div>
  )
}

export default ProductDetail