import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Evernote.module.scss";
import NoteDetails from "./components/NoteDetails";
import NoteOperations from "./components/NoteOperations";

export default function Home() {
	const [ID, setID] = useState(null);

	const getSingleNote = (id) => {
		setID(id);
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Evernote Clone</title>
				<meta
					name="description"
					content="This is an Evernote Clone using Next Js and firebase"
				/>
				<link rel="icon" href="/tako.gif" type="image/gif" />
			</Head>

			<main className={styles.main}>
				<div className={styles.container}>
					<div className={styles.left}>
						<NoteOperations getSingleNote={getSingleNote} />
					</div>
					<div className={styles.right}>
						<NoteDetails ID={ID} />
					</div>
				</div>
			</main>
		</div>
	);
}
