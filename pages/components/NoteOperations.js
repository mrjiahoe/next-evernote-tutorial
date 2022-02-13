import styles from "../../styles/Evernote.module.scss";
import { useState } from "react";

import { app, database } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function NoteOperations() {
	const [isInputVisible, setInputVisible] = useState(false);
	const inputToggle = () => {
		setInputVisible(!isInputVisible);
	};

	const [noteTitle, setNoteTitle] = useState("");
	const dbInstance = collection(database, "notes");

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
			<button className={styles.saveBtn}>Save Note</button>
		</>
	);
}
