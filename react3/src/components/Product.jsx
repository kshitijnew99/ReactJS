import { useNavigate } from "react-router-dom"



const product = () => {

  const navigator = useNavigate();

  const NavigateHandler = (name) => {
      navigator(`/product/detail/${name}`)
  }

  return (
    <div className='product'>
      <h1>Product 1</h1>
      <button onClick={() => NavigateHandler('Product 1')}>See Details</button>
      <h1>Product 2</h1>
      <button onClick={() => NavigateHandler('Product 2')}>See Details</button>
      <h1>Product 3</h1>
      <button onClick={() => NavigateHandler('Product 3')}>See Details</button>
    </div>
  )
}

export default product