import { useNavigate,  } from "react-router-dom"

const ServiceUpdate = () => {

  const navigator = useNavigate();
  
  

  // const NavigateHandler = () => {
  //     navigator('/product')
  // }
  return (
    <div className="ServiceUpdate">
      <h1>Service Update karwalo</h1>
      <h2>Contact karo</h2>
      <button onClick={() => navigator(-1)}>Go Back</button>
    </div>
  )
}

export default ServiceUpdate