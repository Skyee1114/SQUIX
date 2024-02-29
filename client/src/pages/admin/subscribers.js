import React, { useState, useEffect } from "react";
import * as XLSX from 'xlsx';
import Footer from "../../components/Footer";
import AdminNavbar from "../../components/AdminNavbar";
import { getSubscribersList, deleteSubscribers } from "../../actions/admin";
import LoadingAnimation from "../../components/LoadingAnimation";

function Subscribers() {

  const [subscribers, setSubscribers] = useState(null);  
  const [selectedSubscribers, setSelectedSubscribers] = useState([]);
  const [ loading, setLoading ] = useState(false);
   
  useEffect(() => {    
    getSubscribersList().then(data => {
      if(data) {        
        setSubscribers(data);
        setLoading(true);
        
      }
    }).catch(err => {
      console.error(err); 
      setLoading(true);
    })
  }, [])

  // console.log(users);

  const handleSubscriberSelection = (userId) => {
    // console.log(userId);
    if (selectedSubscribers.includes(userId)) {
      setSelectedSubscribers(selectedSubscribers.filter((id) => id !== userId));
    } else {
        setSelectedSubscribers([...selectedSubscribers, userId]);
    }
  };

  const handleDeleteSelectedSubscribers = () => {
    // Implement the logic to delete the selected users here
    deleteSubscribers({selectedSubscribers}).then( data => {
      if(data) {
        setSubscribers(data);
      }
    }).catch(err => {
      console.error(err); 
    })
    setSelectedSubscribers([]);
    // console.log("Selected Users to delete:", selectedUsers);
  };

  const handleDownloadSubscribers = () => {
    const ws = XLSX.utils.json_to_sheet(subscribers.map((subscriber, index) => ({ 'Number': index+1, Email: subscriber.email, 'Date': subscriber.date })));
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Subscribers');
    XLSX.writeFile(wb, 'subscribers.xlsx');
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
                  <p>Subscribers</p>
                </div>
                <div className="flex gap-4"> 
                  <button                 
                    onClick={() => handleDeleteSelectedSubscribers()}
                    className={`uppercase py-2 px-4 rounded ${
                      selectedSubscribers.length === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-700"
                    } text-white font-bold`}
                    disabled={selectedSubscribers.length === 0}
                    >
                  Delete           
                  </button>   
                  <button                 
                    onClick={() => handleDownloadSubscribers()}
                    className=" uppercase py-2 px-4 rounded bg-blue-500 hover:bg-blue-700 text-white font-bold"
                  >
                  Download Excel           
                  </button>               
                </div>                                
              </div>
              
              {loading && subscribers ? 
                <div>
                  <table className="border-collapse border w-full">
                    <thead>
                      <tr>
                        <th className="border-b border-gray-400">Select</th>
                        <th className="border-b border-gray-400">No</th>
                        <th className="border-b border-gray-400">E-Mail</th>
                        <th className="border-b border-gray-400">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      { subscribers.map((subscriber, index) => (
                        <tr key={subscriber._id}>
                          <td className="border-b border-gray-400">
                            <input
                              type="checkbox"
                              onChange={() => handleSubscriberSelection(subscriber._id)}
                              checked={selectedSubscribers.includes(subscriber._id)}
                            />
                          </td>
                          <td className="border-b border-gray-400">{index + 1}</td>                          
                          <td className="border-b border-gray-400">{subscriber.email}</td>
                          <td className="border-b border-gray-400">{subscriber.date}</td>                          
                          
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

export default Subscribers;
