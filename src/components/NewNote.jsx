import { TextField } from "@mui/material";
import RichTextEditor from "./RichTextEditor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function NewNote() {
  const [formatting, setFormatting] = useState({});
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
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

  const onSubmit = (data) => console.log(data);

  return (
    <div className="px-8 py-4">
      <p className="text-gray-500">{`${date}, ${time}`}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-between">
          <TextField
            {...register("title")}
            autoFocus
            placeholder="New Note"
            variant="standard"
            sx={{ paddingY: 1 }}
            slotProps={{
              input: {
                sx: { fontSize: 40 },
                disableUnderline: true,
              },
            }}
          />
          <button className="px-3 py-2 rounded bg-rose-100 text-rose-500 hover:border-transparent">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
        <div className="py-3 px-5 bg-zinc-100 rounded-lg">
          {/* <div className=""> */}
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
                  // sx: formatting,
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
              type="button"
              className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white text-sm font-bold"
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
