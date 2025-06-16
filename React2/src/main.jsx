
import { createRoot } from 'react-dom/client'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import App from './App.jsx'
import Wrapper from './components/Wrapper.jsx';

createRoot(document.getElementById('root')).render(

<Wrapper>
    <App />
    <ToastContainer className="toast" />
</Wrapper>

)
