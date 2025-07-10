
import { useEffect } from 'react';
import { asyncgetusers } from './store/UserAction';
import { useDispatch  , useSelector} from 'react-redux';

const App = () => {
  const data = useSelector((state) => state)
  const dispatch = useDispatch();

  console.log(data);
  
  useEffect(() => {
    dispatch(asyncgetusers());
  }, []);

  return <div>server is running on port 3000</div>;
};

export default App;
