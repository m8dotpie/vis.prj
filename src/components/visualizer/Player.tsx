import Play from "@/components/svgs/icons8-play.svg";
import Replay from "@/components/svgs/icons8-replay.svg";
import Pause from "@/components/svgs/icons8-pause.svg";
import Step from "@/components/svgs/icons8-fast_forward.svg";
import Backstep from "@/components/svgs/icons8-rewind.svg";

import { useContext } from "react";
import { ThemeContext } from "@/components/dom/Layout";

import Image from "next/image";

export default function Player(props) {
  const theme = useContext(ThemeContext);
  let { onPlay, onStep, onReplay, onBackstep, active } = props;

  return (
    <div className="w-full flex flex-row justify-center items-center">
      <button onClick={onBackstep}>
        <Backstep fill={theme.extend.colors.shadow} />
      </button>
      <button onClick={onPlay}>
        {active ? (
          <Pause fill={theme.extend.colors.shadow} />
        ) : (
          <Play fill={theme.extend.colors.shadow} />
        )}
      </button>
      <button onClick={onStep}>
        <Step fill={theme.extend.colors.shadow} />
      </button>
      <button onClick={onReplay}>
        <Replay fill={theme.extend.colors.shadow} />
      </button>
    </div>
  );
}
