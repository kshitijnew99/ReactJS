import { useNavigate, useParams } from "react-router-dom"

const ServiceDetail = () => {

  const navigator = useNavigate();
  
  

  // const NavigateHandler = () => {
  //     navigator('/product')
  // }
  return (
    <div className="serviceDetail">
      <h1>More Services</h1>
      <h2>Choose Us</h2>
      <button onClick={() => navigator(-1)}>Go Back</button>
    </div>
  )
}

export default ServiceDetail