import React, { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { useLocation } from 'react-router-dom'
import Footer from "../../components/Footer";
import AdminNavbar from "../../components/AdminNavbar";
import TextEditor from "../../components/TextEditor";
import { getNews, getNewsCoverImage, saveNews, saveNewsCoverImage, sendtoSubscribers } from "../../actions/admin";

function NewsEdit() {

    const location = useLocation();
    const id = location.state && location.state.id;     
    const [language, setLanguage] = useState("english"); 
    const [titleerror, setTitleError] = useState('');
    const [summaryerror, setSummaryError] = useState('');
    const [imageerror, setImageError] = useState('');
    const [contenterror, setContentError] = useState('');  
    const [saving, setSaving] = useState(false);

    const [news, setNews] = useState(
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
            contents: {
                english: "",
                russian: "",
                korean: "",
                spanish: "",
                portuguese: ""                
            },
            tags: {
                english: [],
                russian: [],
                korean: [],
                spanish: [],
                portuguese: []
            },
            date: "",
            subscription: "",
        }
    );    

    const [tags, setTags] = useState({
        english: "",
        russian: "",
        korean: "",
        spanish: "",
        portuguese: ""        
    });

    const [newsImageFile, setNewsImageFile] = useState(null);
    const [newsImage, setNewsImage] = useState(null);

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
        console.log(language);
    };

    const handleTitleChange = (e, language) => {
        const { value } = e.target;
        setNews(prevNews => ({
            ...prevNews,
            titles: {
                ...prevNews.titles,
                [language]: value
            }
        }));
    };

    const handleSummaryChange = (e, language) => {
        const { value } = e.target;
        setNews(prevNews => ({
            ...prevNews,
            summary: {
                ...prevNews.summary,
                [language]: value
            }
        }));
    };
    
    const handleEditorData = (data, language) => {
        setNews(prevNews => ({
            ...prevNews,
            contents: {
                ...prevNews.contents,
                [language]: data
            }
        }));
    };   

    const handleTagChange = (e, language) => {
        const { value } = e.target;
        setTags(prevTags => ({
            ...prevTags,
            [language]: value
        }));
    };

    const handleAddTag = () => {
        setNews(prevNews => ({
            ...prevNews,
            tags: {
                ...prevNews.tags,
                english: [...prevNews.tags.english, tags.english],
                russian: [...prevNews.tags.russian, tags.russian],
                korean: [...prevNews.tags.korean, tags.korean],
                spanish: [...prevNews.tags.spanish, tags.spanish],
                portuguese: [...prevNews.tags.portuguese, tags.portuguese]                
            }
        }));

        // Clear the tags state after adding the tags
        setTags({
            english: "",
            russian: "",
            korean: "",
            spanish: "",
            portuguese: ""
        });

    };

    const deleteTag = (index) => {
        setNews(prevNews => {
            const updatedTags = { ...prevNews.tags };
    
            for (let lang in updatedTags) {
                updatedTags[lang].splice(index, 1);
            }
    
            return {
                ...prevNews,
                tags: updatedTags
            };
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewsImageFile(file);
            const reader = new FileReader();
            reader.onload = (event) => {
                setNewsImage(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSaveNews = () => {    

        if (!news.titles.english) {
            // Set error message for short password
            setTitleError('Please input news title');
            return;    
        }          
        setTitleError('');

        if (!news.summary.english) {
            // Set error message for short password
            setSummaryError('Please input news summary');
            return;    
        }        
        setSummaryError('');
        
        if (!newsImage) {
            // Set error message for short password
            setImageError('Please input news image');
            return;    
        }          
        setImageError('');

        if (!news.contents.english) {
            // Set error message for short password
            setContentError('Please input news content');
            return;    
        }        
        setContentError('');  

        saveNews({news}).then( data => {
            if(data) {
              setNews(data);
            }
          }).catch(err => {
            console.error(err); 
        })

        if(newsImageFile) {
            const formData = new FormData();
            formData.append('image', newsImageFile);
            formData.append('id', id);
            saveNewsCoverImage(formData);
        }  

        if(!news.subscription){
            setSaving(true);
        } 
    };      
    
    const handleSubscribers = () => { 
        sendtoSubscribers({id: id}).then(data => {
            if(data) {
                setSaving(false);
            }
        }).catch(err => {
            console.error(err);
        })               
    };      
    
    useEffect(() => {    
        getNews({id}).then( data => {
            if(data) {
                setNews(data);
                console.log('data:', data);
                if(data.subscription) {
                    setSaving(false);
                }
                else {
                    setSaving(true);
                }
            }
        }).catch(err => {
            console.error(err);
        })
        
        getNewsCoverImage({id}).then(data => {
            if(data) {
            const imageUrl = URL.createObjectURL(data)
            setNewsImage(imageUrl);
            console.log(imageUrl);
            }
        });

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
                                    <p>Edit News</p>
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
                                    <button className="uppercase bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleSaveNews()}>
                                    Save            
                                    </button>
                                    <button                 
                                        onClick={() => handleSubscribers()}
                                        className={`uppercase py-2 px-4 rounded ${
                                        !saving ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-700"
                                        } text-white font-bold`}
                                        disabled={saving === false}
                                    >
                                    Send to subscribers           
                                    </button>                  
                                </div>                                
                            </div>                            

                            <div className="flex flex-row gap-8 justify-between">
                                <div className="flex flex-col gap-12 w-3/4">
                                    <div className="flex flex-col gap-4">
                                        <div className="font-bold text-left text-[24px] 2xl:text-[32px] leading-[20px] 2xl:leading-[28px] uppercase">
                                            <p>Title</p>
                                        </div>
                                        <div className="w-full">
                                            <input 
                                                type="text" 
                                                value={news.titles[language]}
                                                onChange={(e) => handleTitleChange(e, language)}
                                                className="w-full p-4 rounded text-4xl font-bold"
                                            />        
                                        </div>
                                        {titleerror && <div className="text-red-500 text-left">{titleerror}</div>}
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div className="font-bold text-left text-[24px] 2xl:text-[32px] leading-[20px] 2xl:leading-[28px] uppercase">
                                            <p>Summary</p>
                                        </div>
                                        <div className="w-full">
                                            <textarea 
                                                type="text" 
                                                rows={4}
                                                value={news.summary[language]}
                                                onChange={(e) => handleSummaryChange(e, language)}
                                                className="w-full p-4 rounded text-2xl"
                                            />        
                                        </div>
                                        {summaryerror && <div className="text-red-500 text-left">{summaryerror}</div>}
                                    </div>

                                    <div className="flex flex-col items-start gap-4">
                                        <div className="font-bold text-[24px] 2xl:text-[32px] leading-[20px] 2xl:leading-[28px] uppercase">
                                            <p>Tag for the section</p>
                                        </div>
                                        <div className="w-full">
                                            <input 
                                                type="text" 
                                                value={tags[language]}
                                                onChange={(e) => handleTagChange(e, language)}
                                                className="w-full p-4 rounded text-2xl"
                                            />                                         
                                        </div>
                                        <div className="w-full flex justify-end">
                                            <button 
                                                className={`uppercase ${!(tags.english && tags.russian && tags.korean && tags.spanish && tags.portuguese) ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700" } text-white font-bold py-2 px-4 rounded`}
                                                onClick={() => handleAddTag()}
                                                disabled={!(tags.english && tags.russian && tags.korean && tags.spanish && tags.portuguese)}
                                            >
                                            Add tag            
                                            </button>
                                        </div>
                                        <div className="flex gap-8">
                                            {news.tags[language].map((tag, index) => (
                                                <div key={index} className="flex items-center border border-black gap-4 px-2 rounded">
                                                    <p className="text-2xl">{tag}</p>
                                                    <IoIosClose  className="cursor-pointer text-2xl" onClick={() => deleteTag(index)}/>
                                                </div>
                                                
                                            ))}
                                        </div>                                    
                                    </div>

                                </div>                                

                                <div className="flex flex-col gap-4 w-1/4">
                                    <div className="font-bold text-left text-[24px] 2xl:text-[32px] leading-[20px] 2xl:leading-[28px] uppercase">
                                        <p>Cover Image</p>
                                    </div>
                                    <div className="w-auto h-full cursor-pointer">
                                        <label htmlFor="imageinput">
                                            <div className="cursor-pointer overflow-hidden w-full h-full">
                                                <img
                                                    src={newsImage}
                                                    className="w-full h-full object-cover rounded"
                                                />
                                            </div>
                                        </label>
                                        <input
                                            type="file"
                                            id="imageinput" // Use unique id for each input
                                            accept="image/*"
                                            className="hidden"
                                            onChange={(e) => handleImageChange(e)}
                                        />
                                    </div>
                                    {imageerror && <div className="text-red-500 text-left">{imageerror}</div>}
                                </div>
                            </div> 

                            <div className="flex flex-col gap-4">
                                <div className="font-bold text-left text-[24px] 2xl:text-[32px] leading-[20px] 2xl:leading-[28px] uppercase">
                                    <p>Contents</p>
                                </div>
                                <div className={`${language === 'english' ? "block" : "hidden"}`}>                                
                                    <TextEditor handleEditorData={handleEditorData} news={news} language={'english'}/>                                  
                                </div>

                                <div className={`${language === 'russian' ? "block" : "hidden"}`}>                                
                                    <TextEditor handleEditorData={handleEditorData} news={news} language={'russian'}/>  
                                </div>

                                <div className={`${language === 'korean' ? "block" : "hidden"}`}>                                
                                    <TextEditor handleEditorData={handleEditorData} news={news} language={'korean'}/>  
                                </div>

                                <div className={`${language === 'spanish' ? "block" : "hidden"}`}>
                                    <TextEditor handleEditorData={handleEditorData} news={news} language={'spanish'}/>  
                                </div>

                                <div className={`${language === 'portuguese' ? "block" : "hidden"}`}>                                
                                    <TextEditor handleEditorData={handleEditorData} news={news} language={'portuguese'}/>  
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

export default NewsEdit;
