import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen" style={{backgroundColor:color}}>
      <div className="w-full fixed bottom-2 flex justify-center flex-wrap items-center">
          <div className="bg-white rounded-full">

            <button className="p-2 border rounded-3xl m-2 outline-none border-none bg-red-800 text-white" onClick={()=>setColor("red")}>Red</button>

            <button className="p-2 border rounded-3xl m-2 outline-none border-none bg-green-800 text-white" onClick={()=>setColor("green")}>Green</button>

            <button className="p-2 border rounded-3xl m-2 outline-none border-none bg-blue-800 text-white" onClick={()=>setColor("blue")}>Blue</button>

            <button className="p-2 border rounded-3xl m-2 outline-none border-none bg-yellow-500 text-white" onClick={()=>setColor("Yellow")}>Yellow</button>

            <button className="p-2 border rounded-3xl m-2 outline-none border-none bg-sky-400 text-white" onClick={()=>setColor("#87CEEB")}>Sky</button>

            <button className="p-2 border rounded-3xl m-2 outline-none border-none bg-slate-400 text-white" onClick={()=>setColor("Gray")}>Gray</button>

            <button className="p-2 border rounded-3xl m-2 outline-none border-none bg-pink-400 text-white" onClick={()=>setColor("pink")}>Pink</button>

          </div>

        </div>
    </div>
  )
}

export default App
