import React, { useState } from 'react'
import { TextField, Button } from "@mui/material";
import { createNote } from '../api/Note';

const NoteForm = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [titleError, setTitleError] = useState(false);
    const [contentError, setContentError] = useState(false);
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState();
    
    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData();

        setTitleError(false)
        setContentError(false)

        if (title == '') {
            setTitleError(true);
        }
        if (content == '') {
            setContentError(true);
        }

        if (title && content) {
            console.log(title, content);
        }

        // const response = await createNote({title, content});

        formData.append('File', selectedFile);
        console.log(formData);
    }

    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <h2>Note Form</h2>
                <input type='file' name='file' onChange={changeHandler} />
                { isFilePicked ? (
                    <div>
                        <p>Filename: {selectedFile.name}</p>
                        <p>Filetype: {selectedFile.type}</p>
                        <p>Size in bytes: {selectedFile.size}</p>
                        <p>
                            lastModifiedDate: {' '}
                            {selectedFile.lastModifiedDate.toLocalDateString()}
                        </p>
                    </div>
                ) : (
                    <p>Select a file to upload</p>
                )}
                <TextField 
                    label="Title"
                    onChange={e => setTitle(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    sx={{mb: 3}}
                    fullWidth
                    value={title}
                    error={titleError}
                />
                <TextField 
                    label="Content"
                    onChange={e => setContent(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    value={content}
                    error={contentError}
                    sx={{mb: 3}}
                    multiline
                    fullWidth
                    rows={10}
                    maxRows={10}
                />
                <Button variant="outlined" color="secondary" type="submit">Create Note</Button>
            
        </form>
    )
}

export default NoteForm;