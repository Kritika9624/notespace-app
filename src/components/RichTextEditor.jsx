import {
  faAlignCenter,
  faAlignLeft,
  faAlignRight,
  faBold,
  faItalic,
  faUnderline,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function RichTextEditor({ formatting, setFormatting }) {
  const [active, setActive] = useState([]);

  function makeBold() {
    if (Object.hasOwn(formatting, "fontWeight")) {
      const prevData = { ...formatting };
      delete prevData["fontWeight"];
      setFormatting(prevData);
      setActive(active.filter((item) => item !== "bold"));
    } else {
      setFormatting((prev) => ({ ...prev, fontWeight: "bold" }));
      setActive([...active, "bold"]);
    }
  }

  function makeItalic() {
    setActive("italic");
    if (Object.hasOwn(formatting, "fontStyle")) {
      const prevData = { ...formatting };
      delete prevData["fontStyle"];
      setFormatting(prevData);
      setActive(active.filter((item) => item !== "italic"));
    } else {
      setFormatting((prev) => ({ ...prev, fontStyle: "italic" }));
      setActive([...active, "italic"]);
    }
  }

  function makeUnderlined() {
    setActive("underline");
    if (Object.hasOwn(formatting, "textDecoration")) {
      const prevData = { ...formatting };
      delete prevData["textDecoration"];
      setFormatting(prevData);
      setActive(active.filter((item) => item !== "underline"));
    } else {
      setFormatting((prev) => ({ ...prev, textDecoration: "underline" }));
      setActive([...active, "underline"]);
    }
  }

  function alignText(action) {
    const alignmentActions = ["left", "right", "center"];
    const remainingActions = [alignmentActions.filter(item => item !== action)];
    if (Object.hasOwn(formatting, "textAlign")) {
      const prevData = { ...formatting };
      delete prevData["textAlign"];
      setFormatting(prevData);
    }
    setFormatting((prev) => ({ ...prev, textAlign: action }));
    const prevData = [...active];
    const filteredArray = prevData.filter(item => remainingActions.includes(item));
    setActive([...active, ...filteredArray]);
  }
console.log(active);
  return (
    <div className="flex items-center text-gray-500">
      <div className="flex items-center gap-2 border-r pr-3">
        <button
          className={
            active.includes("bold")
              ? "py-1 px-2.5 rounded-md bg-fuchsia-500 text-white"
              : "py-1 px-2.5 rounded-md bg-transparent hover:border-transparent hover:bg-zinc-200"
          }
          onClick={makeBold}
        >
          <FontAwesomeIcon icon={faBold} />
        </button>
        <button
          className={
            active.includes("italic")
              ? "py-1 px-2.5 rounded-md bg-fuchsia-500 text-white"
              : "py-1 px-2.5 rounded-md bg-transparent hover:border-transparent hover:bg-zinc-200"
          }
          onClick={makeItalic}
        >
          <FontAwesomeIcon icon={faItalic} />
        </button>
        <button
          className={
            active.includes("underline")
              ? "py-1 px-2.5 rounded-md bg-fuchsia-500 text-white"
              : "py-1 px-2.5 rounded-md bg-transparent hover:border-transparent hover:bg-zinc-200"
          }
          onClick={makeUnderlined}
        >
          <FontAwesomeIcon icon={faUnderline} />
        </button>
        <span>16</span>
      </div>
      <div className="flex items-center gap-2 pl-1">
        <button
          className={
            active === "left"
              ? "py-1 px-2.5 rounded-md bg-fuchsia-500 text-white"
              : "py-1 px-2.5 rounded-md bg-transparent hover:border-transparent hover:bg-zinc-200"
          }
          onClick={() => alignText("left")}
        >
          <FontAwesomeIcon icon={faAlignLeft} />
        </button>
        <button
          className={
            active === "center"
              ? "py-1 px-2.5 rounded-md bg-fuchsia-500 text-white"
              : "py-1 px-2.5 rounded-md bg-transparent hover:border-transparent hover:bg-zinc-200"
          }
          onClick={() => alignText("center")}
        >
          <FontAwesomeIcon icon={faAlignCenter} />
        </button>
        <button
          className={
            active === "right"
              ? "py-1 px-2.5 rounded-md bg-fuchsia-500 text-white"
              : "py-1 px-2.5 rounded-md bg-transparent hover:border-transparent hover:bg-zinc-200"
          }
          onClick={() => alignText("right")}
        >
          <FontAwesomeIcon icon={faAlignRight} />
        </button>
      </div>
    </div>
  );
}
