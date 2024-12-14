import { TextField } from "@mui/material";
import RichTextEditor from "./RichTextEditor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function NewNote() {
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const time = currentDate.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true, // Enables 12-hour clock with AM/PM
    });

    return <div className="px-8 py-4">
        <p className="text-gray-500">{`${date}, ${time}`}</p>
        <div className="flex items-center justify-between">
            <TextField autoFocus placeholder="New Note" variant="standard" sx={{ paddingY: 1 }} slotProps={{
                input: {
                    sx: { fontSize: 40, },
                    disableUnderline: true,
                },
            }} />
            <button className="px-3 py-2 rounded bg-rose-100 text-rose-500 hover:border-transparent">
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
        <div className="py-3 px-5 bg-zinc-100 rounded-lg">
            <TextField variant="standard" multiline rows={10} fullWidth placeholder="Share your thoughts..." slotProps={{
                input: {
                    disableUnderline: true,
                }
            }} />
            <RichTextEditor />
        </div>
    </div>;
}