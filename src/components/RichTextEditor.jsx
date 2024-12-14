import { faAlignCenter, faAlignLeft, faAlignRight, faBold, faItalic, faUnderline } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RichTextEditor() {
    return <div className="flex items-center w-full text-gray-500">
        <div className="flex items-center gap-2 border-r pr-3">
            <button className="py-1 px-2.5 rounded-md bg-transparent hover:border-transparent hover:bg-zinc-200">
                <FontAwesomeIcon icon={faBold} />
            </button>
            <button className="py-1 px-2.5 rounded-md bg-transparent hover:border-transparent hover:bg-zinc-200">
                <FontAwesomeIcon icon={faItalic} />
            </button>
            <button className="py-1 px-2.5 rounded-md bg-transparent hover:border-transparent hover:bg-zinc-200">
                <FontAwesomeIcon icon={faUnderline} />
            </button>
            <span>16</span>
        </div>
        <div className="flex items-center gap-2 pl-3">
            <button className="py-1 px-2.5 rounded-md bg-transparent hover:border-transparent hover:bg-zinc-200">
                <FontAwesomeIcon icon={faAlignLeft} />
            </button>
            <button className="py-1 px-2.5 rounded-md bg-transparent hover:border-transparent hover:bg-zinc-200">
                <FontAwesomeIcon icon={faAlignCenter} />
            </button>
            <button className="py-1 px-2.5 rounded-md bg-transparent hover:border-transparent hover:bg-zinc-200">
                <FontAwesomeIcon icon={faAlignRight} />
            </button>
        </div>
    </div>
}