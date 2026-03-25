import { useState, useEffect, useRef } from "react";

const FocusInput = () => {
    // Create a ref to store the input element
    const inputRef = useRef(null)

    const handleFocus = () => {
        // Access the actual DOM element with .current
        console.log("INPUT Element :", inputRef.current)

        inputRef.current.focus();
    }
    return (
        <>
            <h2>Focus and select input</h2>
            <input ref={inputRef} type="text" placeholder="focus input with use ref" />
            <button onClick={(handleFocus)}>Focus and select input</button>
        </>

    )
}




function UncontrolledInput() {
    const nameRef = useRef(null);
    const emailRef = useRef(null)
    const [submitdata, setsubmitdata] = useState(null)   //To store and display submitted values

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;

        console.log("Name ", name)
        console.log("Emial :", email)

        setsubmitdata({ name, email });

        nameRef.current.value = "";
        emailRef.current.value = "";
    }
    return (
        <><br />
            --------------------------------------------------------------------------------------------------
            <form onSubmit={handleSubmit}>
                <h1>uncontrolled Form</h1>
                <input ref={nameRef} type="text" placeholder="enter your name" />

                <input ref={emailRef} type="email" placeholder="write ur emial here" />

                <button type="submit">submit</button>
            </form>
            {submitdata && (<div>


                <h1>submitted :
                </h1>
                <p>Name : {submitdata.name}</p>
                <p>Email : {submitdata.email}</p>
                <br />

            </div>
            )}
        </>
    )
}


// ====================================================================================
function PreviousValue() {
    const [count, setcount] = useState(0)
    const prefCountRef = useRef(0)


    useEffect(() => {

        // After every render, save the current count as "previous"
        prefCountRef.current = count;
        console.log(prefCountRef)
    }, [count])



    return (
        <><div>
            <br />
            ----------------------------------------------------
            <br />
            <div>current value:{count}</div><br />
            <div> Previous value :{prefCountRef.current}</div>

            <button onClick={() => setcount(count + 1)}>Increment+</button>
            <button onClick={() => setcount(count - 1)}>Decrement-</button>
            <button onClick={() => setcount(0)}>Reset</button>
            <p>Counter : {count}</p>
        </div>
        </>
    )
}


function RefVsState() {
    const [count, setcount] = useState(0);
    const refcount = useRef(0)

    const incrementState = () => {
        setcount(count + 1)
        console.log("State incremented → Component will RE-RENDER   ")
    }


    const IncrementRef = () => {
        refcount.current = refcount.current + 1;
        console.log("Ref incremented → Component will NOT re-render");
        console.log("New ref value:", refcount.current);
    }
    return (<>
        -----------------------------------------------------------------------------
        <div>Usestate causes Rerender <br />
            count : {count}
            <br />
            <button onClick={incrementState}> increment state</button></div>
        <br />
        count : {refcount.current}
        <br />
        <button onClick={IncrementRef}>Increment ref</button><br />

    </>

    )
}

function VideoPlayer() {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false);  //Tracks play/pause button
    const [currentTime, setCurrentTime] = useState(0); //Current video time
    const [duration, setDuration] = useState(0);
      const [volume, setVolume] = useState(1);


      
  // Play/Pause
    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
        }
        else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying)
    }

    const handleTimeUpdate = () => {
        setCurrentTime(videoRef.current.currentTime);
    };



    // Set duration when video loads
    const handleLoadedMetadata = () => {
        setDuration(videoRef.current.duration);
    };

    // Format time
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    // Fullscreen
    const toggleFullscreen = () => {
        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        }
    };

     // Volume control
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  };
    
    return (
        <>--------------------------------------------------------------------------------------------------------------------------------------------
            <br />
            <h3>Custom Video Player</h3>
            <br />
            <div>
                <video ref={videoRef} src="https://www.w3schools.com/html/mov_bbb.mp4" width="320" height="240" type="video/mp4"></video>
            </div>
    <div>
                <button onClick={togglePlay}> {isPlaying ? "⏸️ Pause" : "▶️ Play"}</button>
          


            <span>
                {formatTime(currentTime)} / {formatTime(duration)}
            </span>
            <button onClick={toggleFullscreen}>
                ⛶ Fullscreen
            </button>

                  {/* Volume Control */}
          <div>
            <span>🔊</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              
            />
            <span>{Math.round(volume * 100)}%</span>
          </div>



  </div>
        </>
    )

}







// =====================================================================================

// use of the custom hook which denoted as UseCounter in CounterHook
import useCounter from "./CounterHook";

function UseOfCustomHook() {
    

const [count,increment , decrement] = useCounter();

return(<>
==================================================================

<br />
<h3>Here i am accesing the counter using custom hook</h3>
<h1>counter ;{count}</h1>
<button onClick={increment}>+</button>
<button onClick={decrement}>-</button>
</>)

}




export default FocusInput;
export { UncontrolledInput };
export { PreviousValue }
export { RefVsState }
export { VideoPlayer }
export {UseOfCustomHook};
