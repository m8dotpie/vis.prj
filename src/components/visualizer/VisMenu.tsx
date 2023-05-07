import { Simulator } from "@/lib/Simulator";
import { useEffect, useState, useRef, useContext } from "react";
import Draggable from "react-draggable";
import { FileUploader } from "react-drag-drop-files";

import { ThemeContext } from "@/components/dom/Layout";

import { v4 as randomUUID } from "uuid";

import History from "@/components/visualizer/History";
import Upload from "@/components/svgs/icons8-upload.svg";
import { HistoryManager } from "@/components/visualizer/History";
import Player from "./Player";

export default function VisMenu(props) {
  const theme = useContext(ThemeContext);
  const [autoStepping, setAutoStepping] = useState(false);
  let [file, setFile] = useState(null);
  let [simData, setSimData] = useState(null);
  let [sim, setSim] = props.sim;

  let [hMan, setHMan] = useState(new HistoryManager());

  const sliderRef = useRef<any>();
  const inputRef = useRef<any>();

  sim.setStepCallback((step) => {
    // console.log(sliderRef, sliderRef.current);
    if (sliderRef.current) {
      sliderRef.current.value = step;
    }
    if (inputRef.current) {
      inputRef.current.value = step;
    }
    // sliderRef.current
    // sliderRef.current.ariaValueNow = step;
  });

  const backupAndSetSimData = (data) => {
    console.log("Trying to backup the data.");
    if (simData && !simData.id) {
      if (!simData.name) {
        simData.name = "Untitled";
      }
      setHMan((hMan) => {
        hMan.push(randomUUID(), simData);
        return hMan;
      });
    }

    setSimData(data);
  };

  const handleFile = async (file) => {
    setFile(file);
    let data = await file.text();
    backupAndSetSimData(JSON.parse(data));
  };

  useEffect(() => {
    if (sim._autoStepping) {
      setAutoStepping(true);
    }
  }, [sim._autoStepping]);

  useEffect(() => {
    if (simData) {
      // simdata changed
      setSim(new Simulator(simData));
    }
  }, [simData]);

  function loadHistory(id) {
    let historyElement = hMan.access(id);
    historyElement.data.id = id;
    // console.log("Trying to set this data:", historyElement.data);
    backupAndSetSimData(historyElement.data);
  }

  return (
    <Draggable handle=".handle">
      <div
        className={`m-4 w-[12rem] absolute z-[10000] flex flex-col justify-start items-start bg-primary rounded-md shadow-md shadow-shadow`}
      >
        <div className="handle flex flex-row justify-center items-center w-full">
          <p className="text-black select-none font-bold">Controller</p>
        </div>
        <hr className="bg-shadow w-full"></hr>
        <div className="py-2 pr-2 w-full flex flex-row justify-center items-center">
          <FileUploader
            children={
              <div className="flex flex-row">
                <Upload fill={theme.extend.colors.shadow} />
                <div className="flex flex-row justify-center items-center text-black">
                  Upload JSON
                </div>
              </div>
            }
            label={"Upload JSON"}
            handleChange={handleFile}
            name="file"
            types={["JSON"]}
          />
        </div>

        <div className="flex flex-row justify-center items-center text-white px-2">
          <input
            id="minmax-range"
            type="range"
            min={0}
            max={sim.length - 1}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-secondary accent-shadow"
            ref={sliderRef}
            onChange={(e) => {
              sim.setStep(parseInt(e.target.value));
            }}
          />
          <input
            type="number"
            className="w-10 h-5 m-2 text-black bg-secondary rounded-md text-xs"
            onChange={(e) => {
              sim.setStep(parseInt(e.target.value));
            }}
            ref={inputRef}
          />
        </div>

        <Player
          active={autoStepping}
          onPlay={() => {
            setAutoStepping(!autoStepping);
            sim.toggleAutoStep();
          }}
          onStep={() => sim.oneStep()}
          onBackstep={() => sim.oneBackstep()}
          onReplay={() => sim.reset()}
        />
        <History hMan={hMan} onClick={loadHistory} />
      </div>
    </Draggable>
  );
}
