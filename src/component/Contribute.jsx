import { useState } from "react";

function Contribute({issues}) {
 
  const [contribute, setContribute] = useState(0);
 function handleContribute() {
    setContribute(contribute + 1);
  }
  function handleClear(){
    setContribute(0);
  }

    return (
        <div className= "mx-20 mb-8 flex items-center justify-between rounded-xl bg-[#800020] p-6 text-[#FFF9F2]">
            <div>
            <h3 className="text-xl font-bold">Want to contribute?</h3>
            <p className="mt-1 text-xl">fix an open issue on
            <a href="https://github.com/mannigoy/CSIT340-G5-Midterm-Pielago.git" target="_blank"  onClick={handleContribute} className="font-bold underline">GitHub</a>
            </p>
            </div>

            <div className="flex items-center gap-8">
                <p className="text-xl">Contributions: 
                    <span className="font-bold"> {contribute}</span>
                </p>
                 <p className="text-xl">Open Issues: 
                    <span className="font-bold"> {Math.max(0, issues - contribute)}</span>
                </p>
                
                <button className="cursor-pointer rounded-lg border-2 border-[#FFF9F2] px-8 py-3 text-xl font-bold" onClick={handleClear}>
                    Clear
                </button>
            </div>
        </div>
        
        
    )
}
export default Contribute;