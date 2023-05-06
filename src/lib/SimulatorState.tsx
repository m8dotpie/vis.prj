import { VertexManager } from "./VertexManager";
import { SegmentManager } from "./SegmentManager";

export class SimulatorState {
  private _step: number;
  private _time: number;

  private _vertMan: VertexManager;
  private _segMan: SegmentManager;

  constructor(step, time, vertices, segments) {
    this._step = step;
    this._time = time;

    this._vertMan = new VertexManager(vertices);
    this._segMan = new SegmentManager(segments);
  }

  public recreate(step, time, vertices, segments) {
    this._step = step;
    this._time = time;

    this._vertMan.update(vertices);
    this._segMan.update(segments);

    this._vertMan.recreate();
    this._segMan.recreate();
  }

  public update(step, time, vertices, segments) {
    this._step = step;
    this._time = time;

    this._vertMan.update(vertices);
    this._segMan.update(segments);
  }

  public updateRender() {
    this._vertMan.updateRender();
    this._segMan.updateRender();
  }

  public render() {
    let vertices = this._vertMan.render();
    let segments = this._segMan.render();
    return [...vertices, ...segments];
  }

  public get step() {
    return this._step;
  }
}
