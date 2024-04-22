import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import Footer from "../../components/Footer";
import AdminNavbar from "../../components/AdminNavbar";
import TextEditor from "../../components/TextEditor";
import { getJobs, saveJobs } from "../../actions/admin";

function JobsEdit() {

    const location = useLocation();
    const id = location.state && location.state.id;     
    const [language, setLanguage] = useState("english"); 
    const [titleerror, setTitleError] = useState('');
    const [summaryerror, setSummaryError] = useState('');
    const [divisionerror, setDivisionError] = useState('');
    const [positionerror, setPositionError] = useState('');
    const [contenterror, setContentError] = useState('');  

    const [jobs, setJobs] = useState(
        {
            id: id,
            titles: {
                english: "",
                russian: "",
                korean: "",
                spanish: "",
                portuguese: ""                
            },
            summary: {
                english: "",
                russian: "",
                korean: "",
                spanish: "",
                portuguese: ""                
            },
            division: {
                english: "",
                russian: "",
                korean: "",
                spanish: "",
                portuguese: ""                
            },
            position: {
                english: "",
                russian: "",
                korean: "",
                spanish: "",
                portuguese: ""                
            },
            contents: {
                english: "",
                russian: "",
                korean: "",
                spanish: "",
                portuguese: ""                
            },
            date: "",
        }
    );    

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
        console.log(language);
    };

    const handleTitleChange = (e, language) => {
        const { value } = e.target;
        setJobs(prevJobs => ({
            ...prevJobs,
            titles: {
                ...prevJobs.titles,
                [language]: value
            }
        }));
    };

    const handleSummaryChange = (e, language) => {
        const { value } = e.target;
        setJobs(prevJobs => ({
            ...prevJobs,
            summary: {
                ...prevJobs.summary,
                [language]: value
            }
        }));
    };

    const handleDivisionChange = (e, language) => {
        const { value } = e.target;
        setJobs(prevJobs => ({
            ...prevJobs,
            division: {
                ...prevJobs.division,
                [language]: value
            }
        }));
    };

    const handlePositionChange = (e, language) => {
        const { value } = e.target;
        setJobs(prevJobs => ({
            ...prevJobs,
            position: {
                ...prevJobs.position,
                [language]: value
            }
        }));
    };
    
    const handleEditorData = (data, language) => {
        setJobs(prevJobs => ({
            ...prevJobs,
            contents: {
                ...prevJobs.contents,
                [language]: data
            }
        }));
    };   

    
    const handleSaveJobs = () => {    

        if (!jobs.titles.english) {
            // Set error message for short password
            setTitleError('Please input job title');
            return;    
        }          
        setTitleError('');

        if (!jobs.summary.english) {
            // Set error message for short password
            setSummaryError('Please input job summary');
            return;    
        }        
        setSummaryError('');

        if (!jobs.division.english) {
            // Set error message for short password
            setDivisionError('Please input job division');
            return;    
        }        
        setDivisionError('');

        if (!jobs.position.english) {
            // Set error message for short password
            setPositionError('Please input job position');
            return;    
        }        
        setPositionError('');
        
        if (!jobs.contents.english) {
            // Set error message for short password
            setContentError('Please input job content');
            return;    
        }        
        setContentError('');  

        saveJobs({jobs}).then( data => {
            if(data) {
              setJobs(data);
            }
          }).catch(err => {
            console.error(err); 
        })
    };      
        
    useEffect(() => {    
        getJobs({id}).then( data => {
            if(data) {
                setJobs(data);
                console.log('data:', data);
            }
        }).catch(err => {
            console.error(err);
        })        

    }, [])
    
    return (
        <>
            <AdminNavbar colorMode="black"/>
            <div className="bg-[#F5F1ED]">
                <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto  relative" >
                    <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto py-16">  
                        <div className="flex flex-col gap-12">
                            <div className="flex justify-between items-end">
                                <div className="font-bold text-[32px] 2xl:text-[54px] leading-[28px] 2xl:leading-[54px] uppercase">
                                    <p>Edit Jobs</p>
                                </div>
                                <div className="flex gap-4"> 
                                    <select 
                                        value={language}
                                        onChange={handleLanguageChange}
                                        className="rounded border-gray-400 border py-2 px-4"
                                    >
                                        <option value="english">English</option>
                                        <option value="russian">Russian</option>
                                        <option value="korean">Korean</option>
                                        <option value="spanish">Spanish</option>
                                        <option value="portuguese">Portuguese</option>                                        
                                    </select>                                   
                                    <button className="uppercase bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleSaveJobs()}>
                                    Save            
                                    </button>                                    
                                </div>                                
                            </div>
                            
                            <div className="flex flex-col gap-12">
                                <div className="flex flex-col gap-4">
                                    <div className="font-bold text-left text-[24px] 2xl:text-[32px] leading-[20px] 2xl:leading-[28px] uppercase">
                                        <p>Title</p>
                                    </div>
                                    <div className="w-full">
                                        <input 
                                            type="text" 
                                            value={jobs.titles[language]}
                                            onChange={(e) => handleTitleChange(e, language)}
                                            className="w-full p-4 rounded text-4xl font-bold"
                                        />        
                                    </div>
                                    {titleerror && <div className="text-red-500  text-left">{titleerror}</div>}
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="font-bold text-left text-[24px] 2xl:text-[32px] leading-[20px] 2xl:leading-[28px] uppercase">
                                        <p>Summary</p>
                                    </div>
                                    <div className="w-full">
                                        <textarea 
                                            type="text" 
                                            rows={4}
                                            value={jobs.summary[language]}
                                            onChange={(e) => handleSummaryChange(e, language)}
                                            className="w-full p-4 rounded text-2xl"
                                        />        
                                    </div>
                                    {summaryerror && <div className="text-red-500 text-left">{summaryerror}</div>}
                                </div>
                                <div className="flex flex-row gap-8 justify-between">
                                    <div className="flex flex-col gap-4 w-full">
                                        <div className="font-bold text-left text-[24px] 2xl:text-[32px] leading-[20px] 2xl:leading-[28px] uppercase">
                                            <p>Division</p>
                                        </div>
                                        <div className="w-full">
                                            <input 
                                                type="text" 
                                                value={jobs.division[language]}
                                                onChange={(e) => handleDivisionChange(e, language)}
                                                className="w-full p-4 rounded text-2xl"
                                            />        
                                        </div>
                                        {divisionerror && <div className="text-red-500 text-left">{divisionerror}</div>}
                                    </div>
                                    <div className="flex flex-col gap-4 w-full">
                                        <div className="font-bold text-left text-[24px] 2xl:text-[32px] leading-[20px] 2xl:leading-[28px] uppercase">
                                            <p>Position</p>
                                        </div>
                                        <div className="w-full">
                                            <input 
                                                type="text" 
                                                value={jobs.position[language]}
                                                onChange={(e) => handlePositionChange(e, language)}
                                                className="w-full p-4 rounded text-2xl"
                                            />        
                                        </div>
                                        {positionerror && <div className="text-red-500 text-left">{positionerror}</div>}
                                    </div>
                                </div>
                                                                

                            </div>          

                            <div className="flex flex-col gap-4">
                                <div className="font-bold text-left text-[24px] 2xl:text-[32px] leading-[20px] 2xl:leading-[28px] uppercase">
                                    <p>Contents</p>
                                </div>
                                <div className={`${language === 'english' ? "block" : "hidden"}`}>                                
                                    <TextEditor handleEditorData={handleEditorData} news={jobs} language={'english'}/>                                  
                                </div>

                                <div className={`${language === 'russian' ? "block" : "hidden"}`}>                                
                                    <TextEditor handleEditorData={handleEditorData} news={jobs} language={'russian'}/>  
                                </div>

                                <div className={`${language === 'korean' ? "block" : "hidden"}`}>                                
                                    <TextEditor handleEditorData={handleEditorData} news={jobs} language={'korean'}/>  
                                </div>

                                <div className={`${language === 'spanish' ? "block" : "hidden"}`}>
                                    <TextEditor handleEditorData={handleEditorData} news={jobs} language={'spanish'}/>  
                                </div>

                                <div className={`${language === 'portuguese' ? "block" : "hidden"}`}>                                
                                    <TextEditor handleEditorData={handleEditorData} news={jobs} language={'portuguese'}/>  
                                </div>  
                                {contenterror && <div className="text-red-500 text-left">{contenterror}</div>}
                            </div>
                            
                        </div> 
                    </div>
                </div>
            </div>     
            
            <Footer />
        </>

        
        
    );
}

export default JobsEdit;
