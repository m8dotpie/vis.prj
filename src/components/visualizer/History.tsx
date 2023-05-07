import { useRef } from "react";
import { v4 as randomUUID } from "uuid";

export default function History(props) {
  let { hMan, onClick } = props;

  let elements = hMan.getElements();

  return (
    <div
      className={`flex flex-col justify-start items-start overflow-auto max-h-20 w-full`}
    >
      {elements.map(({ id, name }) => {
        return (
          <>
            <hr className="w-full bg-shadow" />
            <HistoryElement
              innerId={id}
              name={name}
              onClick={onClick}
              key={randomUUID()}
            />
          </>
        );
      })}
    </div>
  );
}

function HistoryElement(props) {
  let { innerId, name, onClick } = props;
  let ref = useRef<any>();

  function handleClick() {
    onClick(ref.current.id);
  }

  return (
    <div ref={ref} id={innerId} className="px-2 py-1 w-full">
      <button onClick={() => handleClick()}>
        {" "}
        {">"} {name}
      </button>
    </div>
  );
}

export class HistoryManager {
  private _history: { id: number; data: any }[];

  constructor() {
    this._history = [];
  }

  public setHistory(history: { id: number; data: any }[]) {
    this._history = history;
  }

  public push(id: number, data: any) {
    this._history.push({ id, data });
  }

  public access(id) {
    let element = this._history.find((element) => element.id === id);
    // if (element) {
    //   this._history = this._history.filter((element) => element.id !== id);
    // }
    return element;
  }

  public getElements() {
    return this._history.map(({ id, data }) => {
      return { id, name: data.name };
    });
  }
}
