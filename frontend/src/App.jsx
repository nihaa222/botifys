import { useEffect, useState } from "react";
import "./App.css";
import { gsap } from "gsap";
import Open from "../Components/Open";
import Header from "../Components/Header";

function App() {
  const [opened, setOpen] = useState(false)

  useEffect(() => {
    const audio = new Audio("/speech.mp3"); // Replace with your actual file path

    const playAudio = () => {
      audio.play().catch(error => console.error("Audio play failed:", error));
      document.removeEventListener("click", playAudio); // Remove event listener after first play
    };

    document.addEventListener("click", playAudio);

    return () => document.removeEventListener("click", playAudio);
  }, []);

  

  useEffect(() => {
    // Slide in the two divs from the sides
    gsap.fromTo(
      ".left-div",
      { x: "-100%" },
      { x: 0, duration: 1, ease: "power4.out" }
    );
    gsap.fromTo(
      ".right-div",
      { x: "100%" },
      { x: 0, duration: 1, ease: "power4.out", delay: 0.2 }
    );

    // Fade in the circle at the center
    gsap.fromTo(
      ".circle",
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.5, delay: 1.2 }
    );
  }, []);
  

  return (
    <>{!opened && (<Open open={opened} setOpen={setOpen}/>)}
     {opened && (
          <>
              
               <Header/>
          </>
     
      )}

    </>
  );
}

export default App;
