import { Suspense } from "react"
import Navbar from "./Components/Navbar/Navbar"
import LoadData from "./Components/LoadData/LoadData"
import { ToastContainer } from "react-toastify"

const fetchData = async () => {
  const res = await fetch("/blogs.json")
  return res.json()
}


function App() {

  const promiseData = fetchData()

  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>

    {/* LoadData */}
      <Suspense>
        <LoadData promiseData={promiseData}></LoadData>
      </Suspense>



      <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </div>
  )
}

export default App
