import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CreateNoteButton({ onClick }) {
    return <button className="bg-indigo-500 text-[12.5px] text-white py-1.5 px-2.5 rounded-md flex items-center justify-center gap-1.5" onClick={onClick}>
        <span>
            <FontAwesomeIcon icon={faPenToSquare} />
        </span>
        <span className="font-bold">New</span>
    </button>
}