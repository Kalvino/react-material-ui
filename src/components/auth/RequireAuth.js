import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

function RequireAuth({ children }){
    
  const { user } = useContext(AuthContext)
  
  if (!user) {
      return <Navigate to='/' />
  }
  return children
}

export default RequireAuth