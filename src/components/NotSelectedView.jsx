import CreateNoteButton from "./CreateNoteButton";

export default function NoNoteSelectedView({ handleCreateNote }) {
    return <div className="flex flex-col items-center justify-center h-full">
        <div className="text-center text-gray-500">
            <p>Please select a note to view</p>
            <p>or</p>
            <p>Create a note</p>
        </div>
        <span className="flex justify-center my-4">
            <CreateNoteButton onClick={handleCreateNote}/>
        </span>
    </div>
}