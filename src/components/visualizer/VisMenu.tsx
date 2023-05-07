import { Simulator } from "@/lib/Simulator";
import { useEffect, useState, useRef } from "react";
import Draggable from "react-draggable";
import { FileUploader } from "react-drag-drop-files";
import { Slider } from "@mui/material";
import Image from "next/image";

import { v4 as randomUUID } from "uuid";

import History from "@/components/visualizer/History";
import Upload from "@/components/svgs/icons8-upload.svg";
import { HistoryManager } from "@/components/visualizer/History";
import Player from "./Player";

export default function VisMenu(props) {
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
    <Draggable handle="strong">
      <div
        className={`m-4 px-4 py-2 w-[12rem] absolute z-[10000] flex flex-col justify-start items-start bg-gray-400 rounded-md border border-gray-200`}
      >
        <strong className="text-white select-none">VisMenu</strong>
        <FileUploader
          children={
            <div className="flex flex-row">
              <Image src={Upload} alt="Upload" />
              <div className="flex flex-row justify-center items-center text-white">
                Upload JSON
              </div>
            </div>
          }
          label={"Upload JSON"}
          handleChange={handleFile}
          name="file"
          types={["JSON"]}
        />

        <div className="flex flex-row justify-center items-center text-white">
          <input
            id="minmax-range"
            type="range"
            min={0}
            max={sim.length - 1}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-200"
            ref={sliderRef}
            onChange={(e) => {
              sim.setStep(parseInt(e.target.value));
            }}
          />
          <input
            type="number"
            className="w-10 h-5 m-2 text-black bg-gray-200 rounded-md text-xs"
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
