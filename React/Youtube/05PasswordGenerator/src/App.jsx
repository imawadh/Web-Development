import { useState , useEffect} from "react";

function App() {
  const[currentPwd,setCurrentPwd] = useState("");
  const [currentLength, setCurrentLength] = useState(8);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeSpecialChar, setincludeSpecialChar] = useState(false);

  function generatePwd() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pwd = "";
  
    if (includeSpecialChar) {
      chars += "~`!@#$%^&*()+-_}{|?><.:;'";
    }
    if (includeNumber) {
      chars += "1234567890";
    }
  
    for (let i = 0; i < currentLength; i++) {
      let idx = Math.floor(Math.random() * chars.length);
      pwd += chars[idx];
    }
  
    setCurrentPwd(pwd);
  }
  const copyToClipBoard = ()=>{
    console.log("Copying to clipboard");
    navigator.clipboard.writeText(currentPwd);
  }
  
  useEffect(()=>{
    generatePwd();
  },[currentLength,includeNumber, includeSpecialChar]);

  return (
    <div className="flex justify-center items-center h-[100vh] w-[100vw]">
      <section className="w-[100vw]">

        {/* Heading */}
        <div className="mb-2">
          <h1 className="text-center text-3xl font-bold">Password Generator</h1>
        </div>

        {/* Input + Copy Button */}
        <div className="w-[100vw] flex justify-center items-center">
          <input 
            type="text" 
            value={currentPwd}
            readOnly
            className="border p-3 rounded m-2 w-[80vw]"
          />
          <button className="bg-blue-700 text-white p-3 rounded hover:cursor-pointer" type="button" title="Copy to clipboard" onClick={()=>{copyToClipBoard()}}>
            Copy
          </button>
        </div>

        {/* Options Section */}
        <div className="flex justify-around items-center flex-wrap mt-4"> 
          
          {/* Slider */}
          <div>
            <input 
              type="range" 
              min={8} 
              max={100} 
              value={currentLength} 
              onChange={(e) => setCurrentLength(e.target.value)}
            />
          </div>

          {/* Display Length */}
          <div>
            <p>Length = {currentLength}</p>
          </div>

          {/* Checkboxes */}
          <div>
            <label>
              <input type="checkbox" className="mr-1"  checked={includeNumber} onChange={(e) => setIncludeNumber(e.target.checked)}/> Numbers
            </label>
          </div>

          <div>
            <label>
              <input type="checkbox" className="mr-1" checked={includeSpecialChar} onChange={(e) => setincludeSpecialChar(e.target.checked)}/> Special Symbols
            </label>
          </div>

        </div>

      </section>
    </div>
  )
}

export default App;
