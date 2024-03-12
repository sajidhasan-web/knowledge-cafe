import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Header from './components/Header/Header'

function App() {
  

  return (
    <>
      <Header></Header>
      
      <main className='container mx-auto px-7 p-5 md:px-12 grid gap-7 md:grid-cols-3'>
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </main>
    </>
  )
}

export default App
