import { Box, Grid2 } from "@mui/material";
import logo from '../assets/logo_notespace.png'
import NoNoteSelectedView from "../components/NotSelectedView";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import NewNote from "../components/NewNote";

export default function Dashboard() {
    const [createNote, setCreateNote] = useState(false);

    function handleCreateNote() {
        setCreateNote(true);
    }

    return <Box sx={{ height: '100vh', overflowY: 'hidden', boxSizing: 'border-box' }}>
        {/* appbar */}
        <Box className="px-6 py-2 border-b">
            <Box className="flex items-center gap-3 w-fit">
                <img src={logo} alt="notespace logo" width={50} height={50} />
                <span className="text-xl inter-600">NoteSpace</span>
            </Box>
        </Box>
        <Grid2 container sx={{ height: 'calc(100vh - 67px)', boxSizing: 'border-box', }}>
            <Grid2 size={{ xs: 6, md: 2.5 }} className="border-r px-4 pt-7">
                <Sidebar />
            </Grid2>
            <Grid2 size={{ xs: 6, md: 9.5 }} sx={{ padding: '16px 0' }}>
                <main className="h-full">
                    {createNote ? <NewNote /> : <NoNoteSelectedView handleCreateNote={handleCreateNote} />}
                </main>
            </Grid2>
        </Grid2>
    </Box>
}