import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [addMinutes, setAddMinutes] = useState(0)

  const handleAddMinutes = (minutes) =>{
    const totalMinutes = addMinutes + minutes
    setAddMinutes(totalMinutes)
  }

  const handleBookmark = (blog) =>{
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark)
  }
  
 

  return (
    <>
      <Header></Header>
      
      <main className='container mx-auto px-7 p-5 md:px-12 grid gap-7 grid-cols-1 md:grid-cols-3'>
        <Blogs handleBookmark = {handleBookmark} handleAddMinutes={handleAddMinutes}></Blogs>
        <Bookmark bookmarks={bookmarks} addMinutes={addMinutes}></Bookmark>
      </main>
    </>
  )
}

export default App
