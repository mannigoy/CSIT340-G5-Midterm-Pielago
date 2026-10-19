import Intro from "./Intro";
import Stats from "./Stats";
import { useState } from "react";
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
        <Stats stars={stars} downloads={downloads} issues={issues} />
      </div>
  )
        };
 export default Hero;