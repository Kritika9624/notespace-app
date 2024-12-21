import { TextField } from "@mui/material";
import RichTextEditor from "./RichTextEditor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../redux/NotesSlice";

export default function NewNote({handleCreateNote}) {
  const [formatting, setFormatting] = useState({});
  // const [highlightedText, setHighlightedText] = useState(null);
  const dispatch = useDispatch();
  const selectedNoteId = useSelector(state => state.notes.selectedId);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
  });

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

  useEffect(() => {
    if(selectedNoteId){
      const storedNotes = localStorage.getItem("notes");
      const notesArray = JSON.parse(storedNotes);
      const noteItem = notesArray.find((item) => item.id === selectedNoteId);
      reset({
        title: noteItem.title,
        description: noteItem.description,
        date: noteItem.date,
      })
    }
  }, []);

  const generateUniqueId = () => Date.now() + Math.random().toString(36).slice(2, 11);

  //submit form data
  const onSubmit = (data) => {
    const savedData = localStorage.getItem("notes");
    const notesArray = savedData ? JSON.parse(savedData) : [];
    const updatedData = {
      title: data.title,
      description: data.description,
      date: `${date}, ${time}`,
      id: generateUniqueId()
    }
    notesArray.push(updatedData);
    //update all notes state
    dispatch(addNote(notesArray));
    // add to local storage
    localStorage.setItem("notes", JSON.stringify(notesArray));
    handleCreateNote(false);
    //notify user
    alert("Note saved!");
  };

  // const highlightTerms = (keyTerms) => {
  //   let processedText = inputText;
  //   keyTerms.forEach((term) => {
  //     const regex = new RegExp(`\\b${term}\\b`, "gi");
  //     processedText = processedText.replace(
  //       regex,
  //       `<span className="bg-yellow">${term}</span>`
  //     );
  //   });

  //   // Store processed text
  //   setHighlightedText(processedText);
  // };

  // const fetchKeyTerms = async () => {
  //   try {
  //     const response = await axios.post(
  //       "https://api.groq.com/identify-key-terms",
  //       {
  //         text: "highlight key terms like google facebook china USA India", // Input text payload
  //       },
  //       {
  //         headers: {
  //           "Authorization": `Bearer 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`, // Authenticate with the API key
  //           "Content-Type": "application/json", // Ensure JSON format
  //         },
  //       }
  //     );

  //     // Process the API response
  //     const keyTerms = response.data.keyTerms; // Assume API returns key terms
  //     highlightTerms(keyTerms);
  //   } catch (error) {
  //     console.error("Error fetching key terms:", error);
  //   }
  // };

  return (
    <div className="px-8 py-4">
      <p className="text-gray-500">{`${date}, ${time}`}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-between">
          <div className="">
            <TextField
              {...register("title", { required: true })}
              autoFocus
              placeholder="New Note"
              variant="standard"
              sx={{ paddingY: 1 }}
              slotProps={{
                input: {
                  sx: { fontSize: 40 },
                  disableUnderline:
                    errors?.title?.type === "required" ? false : true,
                },
              }}
            />
            {errors?.title?.type === "required" && (
              <p className="text-rose-600 mb-3">Required</p>
            )}
          </div>
          <button className="px-3 py-2 rounded bg-rose-100 text-rose-500 hover:border-transparent">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
        <div className="py-3 px-5 bg-zinc-100 rounded-lg">
          {/* <div className=""> */}
          {/* {highlightedText ? (
            <p dangerouslySetInnerHTML={{ __html: highlightedText }}></p>
          ) : (
            <p>Enter text and click the button to highlight key terms.</p>
          )} */}
          <TextField
            {...register("description")}
            fullWidth
            variant="standard"
            multiline
            rows={10}
            placeholder="Share your thoughts..."
            slotProps={{
              input: {
                disableUnderline: true,
                inputProps: {
                  style: formatting,
                },
              },
            }}
          />
          {/* </div> */}
          <div className="flex items-center justify-between">
            <RichTextEditor
              formatting={formatting}
              setFormatting={setFormatting}
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 rounded bg-indigo-500 text-white text-sm font-bold"
              // onClick={fetchKeyTerms}
            >
              <FontAwesomeIcon icon={faCheck} />
              <span>Save</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
