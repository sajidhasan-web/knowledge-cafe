import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";


const Blog = ({blog, handleBookmark, handleAddMinutes}) => {
    console.log(blog)
    const {cover, title, author_img, author, posted_date, reading_time, hashtags} = blog
    return (
        <div className='mb-10 md:mb-20'>
           <img className='w-full max-h-[500px] rounded-lg mb-6 md:mb-8'  src={cover} alt="" />
           <div className='flex justify-between items-center mb-4 md:mb-6'>
                <div className='flex gap-4 md:gap-7'>
                        <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                        <div>
                                <h4 className='font-bold text-xl md:text-2xl'>{author}</h4>
                                <p className='font-semibold text-[#11111196]'>{posted_date}</p>
                        </div>
                </div>
                <div className='flex gap-3 md:gap-5'>
                    <p className='text-[#11111196] md:text-xl'>{reading_time}  min read</p>
                    <button onClick={()=>handleBookmark(blog)} className='text-2xl text-blue-500'><FaRegBookmark /></button>
                </div>
           </div>
           <h3 className='font-bold text-2xl md:text-4xl'>{title}</h3>
           
            <p className='flex flex-wrap gap-2  md:gap-3 md:text-xl font-medium text-[#11111196] mt-4 md:mt-6'>
                {
                    hashtags.map((hashtag, idx) =><p key={idx}><a href="">#{hashtag}</a></p>)
                }
            </p>

            <button onClick={()=>handleAddMinutes(reading_time)} className='text-blue-600 text-xl font-semibold underline mt-5'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
 blog: PropTypes.object.isRequired,
 handleBookmark: PropTypes.func.isRequired
}


export default Blog;