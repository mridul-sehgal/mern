import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-3">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
            <button onClick={()=> setColor("red")} className="px-4 py-1 rounded-lg bg-red-600 text-white shadow-lg">Red</button>
            <button onClick={()=> setColor("green")} className="px-4 py-1 rounded-lg bg-green-600 text-white shadow-lg">Green</button>
            <button onClick={()=> setColor("blue")} className="px-4 py-1 rounded-lg bg-blue-700 text-white shadow-lg">Blue</button>
            <button onClick={()=> setColor("orange")} className="px-4 py-1 rounded-lg bg-orange-400 text-white shadow-lg">Orange</button>
            <button onClick={()=> setColor("yellow")} className="px-4 py-1 rounded-lg bg-yellow-400 text-white shadow-lg">Yellow</button>
            <button onClick={()=> setColor("purple")} className="px-4 py-1 rounded-lg bg-purple-800 text-white shadow-lg">Purple</button>
            <button onClick={()=> setColor("pink")} className="px-4 py-1 rounded-lg bg-pink-400 text-white shadow-lg">Pink</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
