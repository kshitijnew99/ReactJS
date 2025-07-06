
import { useEffect } from 'react';
import { asyncgetusers } from './store/UserAction';


const App = () => {
  
  useEffect(() => {
    asyncgetusers();

  }, []);

  return <div>hello world</div>;
};

export default App;
