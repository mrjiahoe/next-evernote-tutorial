import styles from "../../styles/Evernote.module.scss";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { app, database } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function NoteOperations() {
	const [isInputVisible, setInputVisible] = useState(false);
	const [noteTitle, setNoteTitle] = useState("");
	const [noteDesc, setNoteDesc] = useState("");
	const dbInstance = collection(database, "notes");

	const inputToggle = () => {
		setInputVisible(!isInputVisible);
	};

	const saveNote = () => {
		addDoc(dbInstance, {
			noteTitle: noteTitle,
			noteDesc: noteDesc,
		});
	};

	const addDesc = (value) => {
		setNoteDesc(value);
	};

	return (
		<>
			<div className={styles.btnContainer}>
				<button onClick={inputToggle} className={styles.button}>
					Add a New Note
				</button>
			</div>

			{isInputVisible ? (
				<div className={styles.inputContainer}>
					<input
						className={styles.input}
						placeholder="Enter the Title..."
						onChange={(e) => setNoteTitle(e.target.value)}
					/>
				</div>
			) : (
				<></>
			)}
			<div className={styles.ReactQuill}>
				<ReactQuill onChange={addDesc} />
			</div>
			<button onClick={saveNote} className={styles.saveBtn}>
				Save Note
			</button>
		</>
	);
}
