import styles from "../../styles/Evernote.module.scss";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { app, database } from "../../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

const dbInstance = collection(database, "notes");

export default function NoteOperations() {
	const [isInputVisible, setInputVisible] = useState(false);
	const [noteTitle, setNoteTitle] = useState("");
	const [noteDesc, setNoteDesc] = useState("");
	const [notesArray, setNotesArray] = useState([]);

	const inputToggle = () => {
		setInputVisible(!isInputVisible);
	};

	const saveNote = () => {
		addDoc(dbInstance, {
			noteTitle: noteTitle,
			noteDesc: noteDesc,
		}).then(() => {
			setNoteTitle("");
			setNoteDesc("");
			getNotes();
			setInputVisible(!isInputVisible);
		});
	};

	const addDesc = (value) => {
		setNoteDesc(value);
	};

	const getNotes = () => {
		getDocs(dbInstance).then((data) => {
			setNotesArray(
				data.docs.map((item) => {
					return { ...item.data(), id: item.id };
				})
			);
		});
	};
	useEffect(() => {
		getNotes();
	}, []);

	return (
		<>
			<div className={styles.btnContainer}>
				<button onClick={inputToggle} className={styles.button}>
					Add a New Note
				</button>
			</div>

			{isInputVisible ? (
				<>
					<div className={styles.inputContainer}>
						<input
							className={styles.input}
							placeholder="Enter the Title..."
							onChange={(e) => setNoteTitle(e.target.value)}
							value={noteTitle}
						/>
					</div>
					<div className={styles.ReactQuill}>
						<ReactQuill onChange={addDesc} value={noteDesc} />
					</div>
					<button onClick={saveNote} className={styles.saveBtn}>
						Save Note
					</button>
				</>
			) : (
				<></>
			)}

			<div className={styles.notesDisplay}>
				{notesArray.map((note) => {
					return (
						<div className={styles.notesInner}>
							<h3>{note.noteTitle}</h3>
							<div dangerouslySetInnerHTML={{ __html: note.noteDesc }}></div>
						</div>
					);
				})}
			</div>
		</>
	);
}
