import { Link } from "react-router-dom";
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import {signOut} from "firebase/auth"

export const Navbar = () => {

    const [user] = useAuthState(auth);

    const signUserOut = async () => {
   await signOut(auth);
    }
    return (
    <div className="navbar">
     <div className="links">

   <Link to="/" className="link">Home</Link>
   {!user ? (
    <Link to="/Login" className="link"> Login </Link>) :
     (<Link to="/createpost" className="link">Create Post</Link>)
   }
  
    </div>
   <div className="user">
    {user && (
      <>
      <p>  {user?.displayName} </p>
       <img alt="Nkosenye" src={user?.photoURL || ""} width="20" height="20"/>
       <button onClick={signUserOut}>Log Out</button>
     </>

   )}

   </div>
     
    
    </div>
    
    );
}