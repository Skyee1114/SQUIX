import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import AdminNavbar from "../../components/AdminNavbar";
import { PiPlusCircle } from "react-icons/pi";
import { useTranslation } from 'react-i18next';
import { saveJobs, getJobsList, deleteJobs } from "../../actions/admin";
import LoadingAnimation from "../../components/LoadingAnimation";

function Job() {
  const { t } = useTranslation();
  const [ loading, setLoading ] = useState(false);
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [language, setLanguage] = useState("english"); 

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

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleJobsSelection = (rowId) => {
    // console.log(userId);
    if (selectedJobs.includes(rowId)) {
      setSelectedJobs(selectedJobs.filter((id) => id !== rowId));
    } else {
      setSelectedJobs([...selectedJobs, rowId]);
    }
  };

  const handleTitleChange = (e, id, language) => {
    const updatedJobs = jobs.map(row =>
      row.id === id ? { ...row, titles: { ...row.titles, [language]: e.target.value }, date: "" } : row
    );
    setJobs(updatedJobs);
  };

  const handleDivisionChange = (e, id, language) => {
    const updatedJobs = jobs.map(row =>
      row.id === id ? { ...row, division: { ...row.division, [language]: e.target.value }, date: "" } : row
    );
    setJobs(updatedJobs);
  };

  const handlePositionChange = (e, id, language) => {
    const updatedJobs = jobs.map(row =>
      row.id === id ? { ...row, position: { ...row.position, [language]: e.target.value }, date: "" } : row
    );
    setJobs(updatedJobs);
  };

  const addRows = () => {
    const newJobs = {
      id: jobs.length > 0 ? jobs[jobs.length - 1].id + 1 : 1,
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
    };
    setJobs([...jobs, newJobs]);
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

  const handleAddJobs = () => {
    const jobsToAdd = jobs.filter(item => item.date === "" && item.titles.english && item.division.english && item.position.english);

    if (jobsToAdd.length === 0) {
        console.log("No news items with empty date fields to add");
        return;  // No news items to add, so exit the function
    }

    saveJobs({jobs: jobsToAdd}).then( data => {
      if(data) {
        setJobs(data);
      }
    }).catch(err => {
      console.error(err); 
    })
  };  
  
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
                  <select
                    value={language}
                    onChange={handleLanguageChange}
                    className="rounded border-gray-400 border py-2 px-4">
                    <option value="english">English</option>
                    <option value="russian">Russian</option>
                    <option value="korean">Korean</option>
                    <option value="portuguese">Portuguese</option>
                    <option value="spanish">Spanish</option>
                  </select>
                  <button type="submit" className="uppercase bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleAddJobs()}>
                  Save            
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
                <div className="flex justify-between">
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
                        </tr>
                      </thead>
                      <tbody>                   
                        {jobs.map((row, index) =>(
                          <tr key={row.id}>
                            <td className="border-b border-gray-400">
                              <input
                                type="checkbox"
                                onChange={() => handleJobsSelection(row.id)}
                                checked={selectedJobs.includes(row.id)}
                              />
                            </td>
                            <td className="border-b border-gray-400">{index + 1}</td>
                            <td className="border-b border-gray-400">
                              <div className="flex">
                                <input 
                                  type="text" 
                                  value={row.titles[language]}
                                  onChange={(e) => handleTitleChange(e, row.id, language)}
                                  className="w-full p-2"
                                />
                              </div>                        
                            </td>
                            <td className="border-b border-gray-400">
                              <div className="flex">
                                <input 
                                  type="text" 
                                  value={row.division[language]}
                                  onChange={(e) => handleDivisionChange(e, row.id, language)}
                                  className="w-full p-2"
                                />
                              </div>                        
                            </td>
                            <td className="border-b border-gray-400">
                              <div className="flex">
                                <input 
                                  type="text" 
                                  value={row.position[language]}
                                  onChange={(e) => handlePositionChange(e, row.id, language)}
                                  className="w-full p-2"
                                />
                              </div>                        
                            </td>
                            <td className="border-b border-gray-400">{row.date}</td>
                          </tr>   
                        ))}                                       
                      </tbody>
                    </table>
                  </div>
                  <div className="pt-4">
                    <PiPlusCircle className="cursor-pointer text-2xl" onClick={() => addRows()}/>
                  </div>
                  
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
