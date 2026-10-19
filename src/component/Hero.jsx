import Contribute from "./Contribute";
import Intro from "./Intro";
import Stats from "./Stats";
import { useState } from "react";
import Controls from "./Controls";
function Hero() {
  const [stars, setStars] = useState(0);
  const [downloads, setDownloads] = useState(0);
  const [issues, setIssues] = useState(5);
 

  function handleStar() {
    setStars(stars + 1);
  }

  function handleDownload() {
    setDownloads(downloads + 1);
  }

  function handleReport() {
    setIssues(issues + 1);
  }

  function handleReset() {
    setStars(0);
    setDownloads(0);
    setIssues(5);
  }
 

   
  return (
    <div>
        <Intro author="Emman Roy Pielago" />
        <div className="flex justify-center gap-4 py-6">
        <Controls text="Star" onClick={handleStar}></Controls>
        <Controls text="Download" onClick={handleDownload}></Controls>
        <Controls text="Report issue" onClick={handleReport}></Controls>
        <Controls text="Reset" onClick={handleReset}></Controls>
       
      </div>
        <Stats stars={stars} downloads={downloads} issues={issues} />
        <Contribute issues={issues} />
      </div>
      
    );
    
      
        };
 export default Hero;