import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import {useUserStore} from '../../store/useStore';
const Nagivation = () => {
  const token = useUserStore(state => state.token);
  const signOut = useUserStore(state => state.signOut);
  
  const navigate = useNavigate();
  const handleLogout = () => {
    
    signOut();    
    toast.success("You are logged out");
    navigate("/");
  }
  return (
    <nav className='pl-3'>
      <ul className='left-navigation'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        
        {token !== null ?
          <li><Link to='#' onClick={() => handleLogout()}>Logout</Link></li>
          : <>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
          </>
        }

        
      </ul>
    </nav>
  )
}

export default Nagivation 