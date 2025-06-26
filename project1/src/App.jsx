import Mainroutes from './Routes/Mainroutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './components/Nav';
import './index.scss';

const App = () => {
  return (
    <>
      <Nav />
      <Mainroutes />

      <ToastContainer 
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;
