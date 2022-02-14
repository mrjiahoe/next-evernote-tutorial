import { useEffect, useState } from "react";
import { app, database } from "../../firebaseConfig";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const dbInstance = collection(database, "notes");

export default function NoteDetails({ ID }) {
	const [singleNote, setSingleNote] = useState({});

	const getSingleNote = async () => {
		if (ID) {
			const singleNote = doc(database, "notes", ID);
			const noteData = await getDoc(singleNote);
			setSingleNote({ ...noteData.data(), id: noteData.id });
		}
	};

	const getNotes = () => {
		getDocs(dbInstance).then((data) => {
			setSingleNote(
				data.docs.map((item) => {
					return { ...item.data(), id: item.id };
				})[0]
			);
		});
	};

	useEffect(() => {
		getSingleNote();
	}, [ID]);

	useEffect(() => {
		getNotes();
	}, []);

	return (
		<>
			<h2>{singleNote.noteTitle}</h2>
			<div dangerouslySetInnerHTML={{ __html: singleNote.noteDesc }}></div>
		</>
	);
}
