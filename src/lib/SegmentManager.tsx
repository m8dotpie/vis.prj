import Segment from "@/components/simulator/Segment";
import { v4 as randomUUID } from "uuid";
import { useRef } from "react";
import * as THREE from "three";

export class SegmentManager {
  private _segments: Array<
    [[number, number, number], [number, number, number]]
  >;
  private _refs: Array<any>;
  private _objects: Array<any>;
  private _needsRecreate: boolean;

  constructor(
    segments: Array<[[number, number, number], [number, number, number]]>
  ) {
    this._segments = segments;
    this._needsRecreate = true;
  }

  private _constructRefs() {
    let pairs = this._segments.map((s) => {
      let thisRef = useRef();
      let _s = (
        <Segment
          start={s[0]}
          end={s[1]}
          innerRef={thisRef}
          key={randomUUID()}
        />
      );
      return [thisRef, _s];
    });
    this._refs = pairs.map((p) => p[0]);
    this._objects = pairs.map((p) => p[1]);
  }

  private _recreateRefs() {
    this._constructRefs();
  }

  private _updateRefs() {
    if (!this._refs || this._refs.length !== this._segments.length) {
      this._needsRecreate = true;
      return;
    }
    for (let i = 0; i < this._segments.length; i++) {
      this._refs[i].current.geometry.setFromPoints(
        [this._segments[i][0], this._segments[i][1]].map(
          (point) => new THREE.Vector3(...point)
        )
      );
    }
  }

  public update(
    segments: Array<[[number, number, number], [number, number, number]]>
  ) {
    // console.log("updating segments", segments, this._segments);
    this._segments = segments;
  }

  public updateRender() {
    this._updateRefs();
  }

  public recreate() {
    this._needsRecreate = true;
  }

  public render() {
    if (this._needsRecreate) {
      this._recreateRefs();
      this._needsRecreate = false;
    }
    return this._objects;
  }
}
