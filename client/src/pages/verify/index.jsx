import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import VerifyErr from "../../components/VerifyErr";
import VerifyThanks from "../../components/VerifyThanks";
import { verifyuser, loadUser } from "../../actions/auth";
import { UserContext } from "../../contexts/UserContext";
import LoadingAnimation from "../../components/LoadingAnimation";



export default function Verify() {

  const { emailtoken } = useParams();
  const [ loading, setLoading ] = useState(false)

  const { setUser } = useContext(UserContext)

  useEffect(() => {
    
    verifyuser(emailtoken).then(data => { if(data){ setUser(data); setLoading(true);}}).catch(err => {console.error(err); setUser(null); setLoading(true);})
    
  }, [emailtoken,setUser])

  const { user } = useContext(UserContext)

  return (
    <div>
      <Navbar colorMode="black" />
      {loading ? (user ? <VerifyThanks /> : <VerifyErr />) : <div className="flex justify-center py-20 md:py-72" ><LoadingAnimation/></div>}
      <Footer />
    </div>
  );
}
