import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import AdminNavbar from "../../components/AdminNavbar";
import { getUsers, deleteUsers } from "../../actions/admin";
import LoadingAnimation from "../../components/LoadingAnimation";
import defaultAvatar from "../../assets/img/user.png";

function Admin() {

  const [users, setUsers] = useState(null);  
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [avatar, setAvatar] = useState(defaultAvatar);
   
  useEffect(() => {    
    getUsers().then(data => {
      if(data) {        
        setUsers(data);
        setLoading(true);
        
      }
    }).catch(err => {
      console.error(err); 
      setLoading(true);
    })
  }, [])

  // console.log(users);

  const handleUserSelection = (userId) => {
    // console.log(userId);
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const handleDeleteSelectedUsers = () => {
    // Implement the logic to delete the selected users here
    deleteUsers({selectedUsers}).then( data => {
      if(data) {
        setUsers(data);
      }
    }).catch(err => {
      console.error(err); 
    })
    setSelectedUsers([]);
    // console.log("Selected Users to delete:", selectedUsers);
  };
  
  return (
    <>
      <AdminNavbar colorMode="black"/>
      <div className="bg-[#F5F1ED]">
        <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto  relative" >
          <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto py-16">  
            <div className="flex flex-col gap-8">
              <div className="flex justify-between items-end">
                <div className="font-bold text-[32px] 2xl:text-[54px] leading-[28px] 2xl:leading-[54px] uppercase">
                  <p>Users</p>
                </div>
                <div>
                  <button                 
                    onClick={() => handleDeleteSelectedUsers()}
                    className={`uppercase py-2 px-4 rounded ${
                      selectedUsers.length === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-700"
                    } text-white font-bold`}
                    disabled={selectedUsers.length === 0}
                    >
                  Delete           
                  </button>                  
                </div>                                
              </div>
              
              {loading && users ? 
                <div>
                  <table className="border-collapse border w-full">
                    <thead>
                      <tr>
                        <th className="border-b border-gray-400">Select</th>
                        <th className="border-b border-gray-400">No</th>
                        <th className="border-b border-gray-400">Avatar</th>
                        <th className="border-b border-gray-400">Name</th>
                        <th className="border-b border-gray-400">E-Mail</th>
                        <th className="border-b border-gray-400">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      { users.map((user, index) => (
                        <tr key={user._id}>
                          <td className="border-b border-gray-400">
                            <input
                              type="checkbox"
                              onChange={() => handleUserSelection(user._id)}
                              checked={selectedUsers.includes(user._id)}
                            />
                          </td>
                          <td className="border-b border-gray-400">{index + 1}</td>
                          <td className="border-b border-gray-400">
                            <div className="rounded-full w-[40px] h-[40px] inline-block">
                              <img
                                src={avatar}
                                alt="user"
                                className="w-full h-full object-cover inline-block"
                              />
                            </div>
                          </td>
                          <td className="border-b border-gray-400">{user.name}</td>
                          <td className="border-b border-gray-400">{user.email}</td>
                          <td className="border-b border-gray-400">{user.date}</td>                          
                          
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div> : <div className="flex justify-center py-20 md:py-72" ><LoadingAnimation/></div>}        
            </div> 
          </div>
        </div>
      </div>     
      
      <Footer />
    </>
  );
}

export default Admin;
