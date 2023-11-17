import './App.css';
import {useState, useEffect, useRef} from "react";
import ring1 from "./sounds/Heater-1.mp3";
import ring2 from "./sounds/Heater-2.mp3";
import ring3 from "./sounds/Heater-3.mp3";
import ring4 from "./sounds/Heater-4_1.mp3";
import ringClap from "./sounds/Heater-6.mp3";
import ringOpenHH from "./sounds/Dsc_Oh.mp3";
import ringKickNHat from "./sounds/Kick_n_Hat.mp3";
import ringKick from "./sounds/RP4_KICK_1.mp3";
import ringClosedHH from "./sounds/Cev_H2.mp3";
const heater1 = new Audio(ring1);
const heater2 = new Audio(ring2);
const heater3 = new Audio(ring3);
const heater4 = new Audio(ring4);
const clap = new Audio(ringClap);
const openHH = new Audio(ringOpenHH);
const kickNHat = new Audio(ringKickNHat);
const kick = new Audio(ringKick);
const closedHH = new Audio(ringClosedHH);

function App() {
    const [audioVolume, setVolume] = useState(0.3);
    const refQ = useRef();
    const refW = useRef();
    const refE = useRef();
    const refA = useRef();
    const refS = useRef();
    const refD = useRef();
    const refZ = useRef();
    const refX = useRef();
    const refC = useRef();
    const displayRef = useRef();
    const volumeRef = useRef();

    useEffect(() => {
        window.addEventListener('keypress', e => {
            const key = e.key.toUpperCase();
            playKey(key)
        });
    }, []);

    function changeVolume() {
        const newVolume = volumeRef.current.value;
        setVolume(newVolume);
    }

    function playKey(keyValue) {
        let element = null;
        if (keyValue === 'Q') {
            element = refQ.current;
            heater1.volume = volumeRef.current.value;
            heater1.play();
            displayRef.current.textContent = "Heater 1";
        } else if (keyValue === 'W') {
            element = refW.current;
            heater2.volume = volumeRef.current.value;
            heater2.play();
            displayRef.current.textContent = "Heater 2";
        } else if (keyValue === 'E') {
            element = refE.current;
            heater3.volume = volumeRef.current.value;
            heater3.play();
            displayRef.current.textContent = "Heater 3";
        } else if (keyValue === 'A') {
            element = refA.current;
            heater4.volume = volumeRef.current.value;
            heater4.play();
            displayRef.current.textContent = "Heater 4";
        } else if (keyValue === 'S') {
            element = refS.current;
            clap.volume = volumeRef.current.value;
            clap.play();
            displayRef.current.textContent = "Clap";
        } else if (keyValue === 'D') {
            element = refD.current;
            openHH.volume = volumeRef.current.value;
            openHH.play();
            displayRef.current.textContent = "Open HH";
        } else if (keyValue === 'Z') {
            element = refZ.current;
            kickNHat.volume = volumeRef.current.value;
            kickNHat.play();
            displayRef.current.textContent = "Kick n' Hat";
        } else if (keyValue === 'X') {
            element = refX.current;
            kick.volume = volumeRef.current.value;
            kick.play();
            displayRef.current.textContent = "Kick";
        } else if (keyValue === 'C') {
            element = refC.current;
            closedHH.volume = volumeRef.current.value;
            closedHH.play();
            displayRef.current.textContent = "Closed HH";
        }

        if (element) {
            element.className = "clicked";
            setTimeout(() => {
                element.className = "not-clicked"
            }, 200);
        }
    }

    return (
        <div className="container">
            <div id="drum-machine">
                <div className="drum-pad">
                    <div id="Q" className="not-clicked" ref={refQ} onClick={() => playKey('Q')}>Q</div>
                    <div id="W" className="not-clicked" ref={refW} onClick={() => playKey('W')}>W</div>
                    <div id="E" className="not-clicked" ref={refE} onClick={() => playKey('E')}>E</div>
                    <div id="A" className="not-clicked" ref={refA} onClick={() => playKey('A')}>A</div>
                    <div id="S" className="not-clicked" ref={refS} onClick={() => playKey('S')}>S</div>
                    <div id="D" className="not-clicked" ref={refD} onClick={() => playKey('D')}>D</div>
                    <div id="Z" className="not-clicked" ref={refZ} onClick={() => playKey('Z')}>Z</div>
                    <div id="X" className="not-clicked" ref={refX} onClick={() => playKey('X')}>X</div>
                    <div id="C" className="not-clicked" ref={refC} onClick={() => playKey('C')}>C</div>
                </div>
                <div id="controls">
                    <div id="display" ref={displayRef}></div>
                    <div className="volume-slider">
                        <input type="range" min="0" max="1" step="0.01" value={audioVolume} ref={volumeRef} onChange={changeVolume}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
