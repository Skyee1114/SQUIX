import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Footer from "../../components/Footer";
import AdminNavbar from "../../components/AdminNavbar";
import { getJobsList, deleteJobs } from "../../actions/admin";
import LoadingAnimation from "../../components/LoadingAnimation";

function Job() {

  const [ loading, setLoading ] = useState(false);
  const navigate = useNavigate();
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [jobs, setJobs] = useState([
    {
      id: 1,
      titles: {
        english: "",
        russian: "",
        korean: "",
        portuguese: "",
        spanish: ""
      },
      division: {
        english: "",
        russian: "",
        korean: "",
        portuguese: "",
        spanish: ""
      },
      position: {
        english: "",
        russian: "",
        korean: "",
        portuguese: "",
        spanish: ""
      },
      date: ""
    }
  ]);

  const handleJobsSelection = (rowId) => {
    // console.log(userId);
    if (selectedJobs.includes(rowId)) {
      setSelectedJobs(selectedJobs.filter((id) => id !== rowId));
    } else {
      setSelectedJobs([...selectedJobs, rowId]);
    }
  };
  
  const handleDeleteSelectedJobs = () => {
    const jobswithoutdate = jobs.filter(item => item.date === '');
    const jobswithdate = jobs.filter(item => item.date !== '');
    const selectedJobswithdate = selectedJobs.filter(item => item.date !== '');
    const unselectedJobswithoutdate = jobswithoutdate.filter(item => !selectedJobs.includes(item.id));
    if(selectedJobswithdate.length){
      deleteJobs({ selectedJobs: selectedJobswithdate }).then(data => {
        if (data) {
          setJobs([...data, ...unselectedJobswithoutdate]);
        }
      }).catch(err => {
        console.error(err);
      })
    }
    else {
      setJobs([...jobswithdate, ...unselectedJobswithoutdate]);
    }
    
    setSelectedJobs([]);
  };

  const handleCreateJobs = () => {
    const id = jobs.length > 0 ? jobs[jobs.length - 1].id + 1 : 1
    navigate("/admin/jobs/edit", {state: {id: id}});
  };

  const editJobs = (id) => {
    navigate("/admin/jobs/edit", {state: {id: id}});    
  }

  useEffect(() => {    
    getJobsList().then(data => {
      if(data) {        
        setJobs(data);
        setLoading(true);
               
      }
    }).catch(err => {
      console.error(err); 
      setLoading(true);
    })
  }, []) 
  
  return (
    <>
      <AdminNavbar colorMode="black"/>
      <div className="bg-[#F5F1ED]">
        <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto  relative" >
          <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto py-16">  
            <div className="flex flex-col gap-8">
              <div className="flex justify-between items-end">
                <div className="font-bold text-[32px] 2xl:text-[54px] leading-[28px] 2xl:leading-[54px] uppercase">
                  <p>Job</p>
                </div>
                <div className="flex gap-4">  
                  <button                 
                    onClick={() => handleCreateJobs()}
                    className=" uppercase py-2 px-4 rounded bg-blue-500 hover:bg-blue-700 text-white font-bold"
                  >
                  Create           
                  </button>                
                  <button                 
                    onClick={() => handleDeleteSelectedJobs()}
                    className={`uppercase py-2 px-4 rounded ${
                      selectedJobs.length === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-700"
                    } text-white font-bold`}
                    disabled={selectedJobs.length === 0}
                    >
                  Delete           
                  </button> 
                </div>                                 
              </div>
              {loading ?
                
              <div className="w-full">
                <table className="border-collapse border w-full">
                  <thead>
                    <tr>
                      <th className="border-b border-gray-400">Select</th>
                      <th className="border-b border-gray-400">No</th>
                      <th className="border-b border-gray-400">Title</th>
                      <th className="border-b border-gray-400">Division</th>
                      <th className="border-b border-gray-400">Position</th>
                      <th className="border-b border-gray-400">Date</th>
                      <th className="border-b border-gray-400">Edit</th>
                    </tr>
                  </thead>
                  <tbody>                   
                    {jobs.map((row, index) =>(
                      <tr key={row.id} className="h-[60px]">
                        <td className="border-b border-gray-400">
                          <input
                            type="checkbox"
                            onChange={() => handleJobsSelection(row.id)}
                            checked={selectedJobs.includes(row.id)}
                          />
                        </td>
                        <td className="border-b border-gray-400">{index + 1}</td>
                        <td className="border-b border-gray-400">{row.titles.english}</td>
                        <td className="border-b border-gray-400">{row.division.english}</td>
                        <td className="border-b border-gray-400">{row.position.english}</td>
                        <td className="border-b border-gray-400">{row.date}</td>
                        <td className="border-b border-gray-400">
                            <button className="uppercase bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  onClick={() => editJobs(row.id)}>
                            Edit            
                          </button>
                        </td>
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

export default Job;
