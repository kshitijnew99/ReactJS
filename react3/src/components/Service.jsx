import { useNavigate , Outlet } from "react-router-dom"


const service = () => {

  const navigator = useNavigate();
  

  return (
    <div className="service">
      <h1>Service</h1>
      <button onClick={() => navigator('/service/detail')}>More Details</button>
      <br />
      <hr />
      <Outlet />

    </div>
  )
}

export default service