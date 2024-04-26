import { useEffect, useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import './App.css'

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },8000)
  },[])
  

  return (
    <div className="app">
      {
        loading ?
        <ClipLoader
        color={'#f37a24'}
        loading={loading}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

        :
        <header> Hello World</header>
      }
    </div>   
  )
}

export default App
