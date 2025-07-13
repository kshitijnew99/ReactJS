
import { useEffect } from 'react';
import { asyncgetusers } from './store/UserAction';
import { useDispatch  , useSelector} from 'react-redux';
import Mainroutes from '../src/routes/Mainroutes';
import Nav  from './components/Nav';


const App = () => {
  const data = useSelector((state) => state)
  const dispatch = useDispatch();

  // console.log(data);
  
  useEffect(() => {
    dispatch(asyncgetusers());
  }, []);

  return <div>
    <Nav />
    <Mainroutes />
  </div>;
};

export default App;
