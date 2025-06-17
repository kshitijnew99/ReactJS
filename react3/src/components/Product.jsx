import { useNavigate } from "react-router-dom"



const product = () => {

  const navigator = useNavigate();

  const NavigateHandler = () => {
      navigator('/product/detail')
  }

  return (
    <div className='product'>
      <h1>Product 1</h1>
      <button onClick={NavigateHandler}>See Details</button>
      <h1>Product 2</h1>
      <button onClick={NavigateHandler}>See Details</button>
      <h1>Product 3</h1>
      <button onClick={NavigateHandler}>See Details</button>
    </div>
  )
}

export default product