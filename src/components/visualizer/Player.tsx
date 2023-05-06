import Play from "@/components/svgs/icons8-play.svg";
import Replay from "@/components/svgs/icons8-replay.svg";
import Pause from "@/components/svgs/icons8-pause.svg";
import Step from "@/components/svgs/icons8-fast_forward.svg";
import Backstep from "@/components/svgs/icons8-rewind.svg";

import Image from "next/image";

export default function Player(props) {
  let { onPlay, onStep, onReplay, onBackstep, active } = props;

  return (
    <div className="flex flex-row justify-center items-center">
      <button onClick={onBackstep}>
        <Image src={Backstep} alt="Backstep" />
      </button>
      <button onClick={onPlay}>
        <Image src={active ? Pause : Play} alt="Play" />
      </button>
      <button onClick={onStep}>
        <Image src={Step} alt="Step" />
      </button>
      <button onClick={onReplay}>
        <Image src={Replay} alt="Replay" />
      </button>
    </div>
  );
}
