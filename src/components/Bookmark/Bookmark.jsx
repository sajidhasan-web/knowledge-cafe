import { useState } from "react";

const Bookmark = ({bookmarks, addMinutes}) => {



    return (
        <div>
           <div className="bg-[#6047EC1A] p-6 text-2xl font-bold text-blue-500 border-2 rounded-lg border-blue-800 mb-4">
              <h3>Spent time on read : <span>{addMinutes}</span>min</h3>
           </div>
                <div className="bg-[#1111110D] py-6 px-4 md:h-[500px] rounded-lg overflow-y-scroll">
                    <h3 className="text-3xl font-medium">Bookmark Blogs: {bookmarks.length}</h3>
                
                {
                    bookmarks.map((bookmark, idx) => <p className="p-4 bg-white text-xl font-semibold mt-3 rounded-lg" key={idx}>{bookmark.title}</p>)
                }
                    
                </div>
        </div>
    );
};

export default Bookmark;