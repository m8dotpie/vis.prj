import { useFrame } from "@react-three/fiber";
import { SimulatorState } from "./SimulatorState";
import Axes from "@/components/visualizer/Axes";

export class Simulator {
  private _ts: Array<number>;
  private _dt: number;
  private _vertices: Array<[number, number, number]>;
  private _segments: Array<
    [[number, number, number], [number, number, number]]
  >;
  private _state: any;
  private _autoStepping: boolean;
  private _loop: boolean;
  private _stepCallback: any;

  constructor(data: any) {
    this._ts = data.ts;
    this._dt = 0.01;
    this._vertices = data.vertices;
    this._segments = data.segments;

    if (this._ts.length == 0) {
      this._state = new SimulatorState(0, 0, [], []);
    } else {
      this._state = new SimulatorState(
        0,
        this._ts[0],
        this._vertices[0],
        this._segments[0]
      );
    }

    this._autoStepping = false;
    this._loop = true;

    this.render = this.render.bind(this);
    this.oneStep = this.oneStep.bind(this);
    this.oneBackstep = this.oneBackstep.bind(this);
    this.reset = this.reset.bind(this);
    this._autoStep = this._autoStep.bind(this);
    this.toggleAutoStep = this.toggleAutoStep.bind(this);

    this._autoStep();
  }

  public update(data: any) {
    console.log("Trying to update simulator: ", data);
    this._ts = data.ts;
    this._vertices = data.vertices;
    this._segments = data.segments;

    console.log("Previous state: ", this._state);
    this._state.recreate(0, this._ts[0], this._vertices[0], this._segments[0]);
    console.log("New state: ", this._state);
  }

  private async _autoStep() {
    if (this._autoStepping) {
      this.oneStep();
    }
    setTimeout(this._autoStep, this._dt * 1000);
  }

  public async toggleAutoStep() {
    this._autoStepping = !this._autoStepping;
  }

  public setStep(step: number) {
    if (step < 0 || step >= this._ts.length) {
      if (this._loop) {
        step = step % this._ts.length;
      } else {
        return;
      }
    }
    if (this._stepCallback) {
      this._stepCallback(step);
    }
    this._state.update(
      step,
      this._ts[step],
      this._vertices[step],
      this._segments[step]
    );
  }

  public setStepCallback(callback: any) {
    this._stepCallback = callback;
  }

  public get step() {
    return this._state.step;
  }

  public get length() {
    return this._ts.length;
  }

  public oneStep() {
    this.setStep(this._state.step + 1);
  }

  public oneBackstep() {
    this.setStep(this._state.step - 1);
  }

  public reset() {
    this.setStep(0);
  }

  public render() {
    let axes = <Axes />;
    let objects = this._state.render();

    useFrame(() => {
      this._state.updateRender();
    });

    return [...objects, axes];
  }
}
