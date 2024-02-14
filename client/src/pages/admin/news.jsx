import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import Footer from "../../components/Footer";
import AdminNavbar from "../../components/AdminNavbar";
import { PiPlusCircle } from "react-icons/pi";
import { getNewsList, deleteNews } from "../../actions/admin";
import LoadingAnimation from "../../components/LoadingAnimation";

function News() {

  const [ loading, setLoading ] = useState(false);
  const navigate = useNavigate();
  const [selectedNews, setSelectedNews] = useState([]);
  const [news, setNews] = useState([
    {
      id: 1,
      titles: {
        english: "",
        russian: "",
        korean: "",
        portuguese: "",
        spanish: ""
      },
      contents: {
        english: "",
        russian: "",
        korean: "",
        portuguese: "",
        spanish: ""
      },
      date: "",
      subscription: "",
    }
  ]);

  const handleNewsSelection = (rowId) => {
    // console.log(userId);
    if (selectedNews.includes(rowId)) {
      setSelectedNews(selectedNews.filter((id) => id !== rowId));
    } else {
      setSelectedNews([...selectedNews, rowId]);
    }
  };

  const handleDeleteSelectedNews = () => {
    const newswithoutdate = news.filter(item => item.date === '');
    const newswithdate = news.filter(item => item.date !== '');
    const selectedNewswithdate = selectedNews.filter(item => item.date !== '');
    const unselectedNewswithoutdate = newswithoutdate.filter(item => !selectedNews.includes(item.id));
    if(selectedNewswithdate.length){
      deleteNews({ selectedNews: selectedNewswithdate }).then(data => {
        if (data) {
          setNews([...data, ...unselectedNewswithoutdate]);
        }
      }).catch(err => {
        console.error(err);
      })
    }
    else {
      setNews([...newswithdate, ...unselectedNewswithoutdate]);
    }
    
    setSelectedNews([]);
  };

  const handleCreateNews = () => {
    const id = news.length > 0 ? news[news.length - 1].id + 1 : 1
    navigate("/admin/news/edit", {state: {id: id}});
  };

  const editNews = (id) => {
    // const editnews = news.filter(item => item.id === id);
    navigate("/admin/news/edit", {state: {id: id}});
    
  }
  
  useEffect(() => {    
    getNewsList().then(data => {
      if(data) {        
        setNews(data);
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
                  <p>News List</p>
                </div>
                <div className="flex gap-4">  
                  <button                 
                    onClick={() => handleCreateNews()}
                    className=" uppercase py-2 px-4 rounded bg-blue-500 hover:bg-blue-700 text-white font-bold"
                  >
                  Create           
                  </button>                
                  <button                 
                    onClick={() => handleDeleteSelectedNews()}
                    className={`uppercase py-2 px-4 rounded ${
                      selectedNews.length === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-700"
                    } text-white font-bold`}
                    disabled={selectedNews.length === 0}
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
                        <th className="border-b border-gray-400">Date</th>
                        <th className="border-b border-gray-400">Edit</th>
                        <th className="border-b border-gray-400">To subscribers</th>
                      </tr>
                    </thead>
                    <tbody>         
                      {news.map((row, index) => (          
                        <tr key={row.id} className="h-[60px]">
                          <td className="border-b border-gray-400">
                            <input
                              type="checkbox"
                              onChange={() => handleNewsSelection(row.id)}
                              checked={selectedNews.includes(row.id)}
                            />
                          </td>
                          <td className="border-b border-gray-400">{index + 1}</td>
                          <td className="border-b border-gray-400">{row.titles.english}</td>                  
                          
                          <td className="border-b border-gray-400">{row.date}</td>
                          <td className="border-b border-gray-400">
                            <button className="uppercase bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  onClick={() => editNews(row.id)}>
                            Edit            
                            </button>
                          </td>
                          <td className="border-b border-gray-400">{row.subscription ? "Sent" : "Not sent"}</td>
                        </tr>   
                      ))}                 
                    </tbody>
                  </table>
                </div>: <div className="flex justify-center py-20 md:py-72" ><LoadingAnimation/></div>}
                                  
            </div> 
          </div>
        </div>
      </div>     
      
      <Footer />
    </>
  );
}

export default News;
