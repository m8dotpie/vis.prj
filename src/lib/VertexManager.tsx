import Vertex from "@/components/simulator/Vertex";
import { v4 as randomUUID } from "uuid";
import { useRef } from "react";

export class VertexManager {
  private _vertices: Array<[number, number, number]>;
  private _refs: Array<any>;
  private _objects: Array<any>;
  private _needsRecreate: boolean;

  constructor(vertices: Array<[number, number, number]>) {
    this._vertices = vertices;

    this._needsRecreate = true;
  }

  private _constructRefs() {
    let pairs = this._vertices.map((v) => {
      let thisRef = useRef();
      let _v = <Vertex position={v} innerRef={thisRef} key={randomUUID()} />;
      return [thisRef, _v];
    });
    this._refs = pairs.map((p) => p[0]);
    this._objects = pairs.map((p) => p[1]);
  }

  private _recreateRefs() {
    this._constructRefs();
  }

  private _updateRefs() {
    if (!this._refs || this._refs.length !== this._vertices.length) {
      this._needsRecreate = true;
      return;
    }
    for (let i = 0; i < this._vertices.length; i++) {
      this._refs[i].current.position.set(
        this._vertices[i][0],
        this._vertices[i][1],
        this._vertices[i][2]
      );
    }
  }

  public update(vertices: Array<[number, number, number]>) {
    this._vertices = vertices;
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
