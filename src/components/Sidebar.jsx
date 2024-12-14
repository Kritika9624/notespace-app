import CreateNoteButton from "./CreateNoteButton";

export default function Sidebar() {
    return <aside>
        <div className="flex items-center justify-between pl-2">
            <h4 className="font-medium">All Notes</h4>
            <CreateNoteButton />
        </div>
        <div className="pt-7 flex flex-col gap-2 text-[14px]">
            {/* ul of notes */}
            <span className="rounded px-2.5 py-1 border border-blue-100 bg-blue-50 text-blue-600 font-medium">Clean Table</span>
            <span className="rounded px-2.5 py-1 border border-white">Clean Bed</span>
            <span className="rounded px-2.5 py-1 border border-white">Create website</span>
        </div>
    </aside>
}