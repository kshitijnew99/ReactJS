import { useNavigate , Outlet } from "react-router-dom"


const service = () => {

  const navigator = useNavigate();
  

  return (
    <div className="service">
      <h1>Service</h1>
      <button  onClick={() => navigator('/service/detail')}>More Details</button>
      <button  onClick={() => navigator('/service/update')}>See Updates</button>
      <br />
      <hr />
      <Outlet />

    </div>
  )
}

export default service