import Head from "next/head";
import styles from "../styles/Evernote.module.scss";
import NoteOperations from "./components/NoteOperations";

export default function Home() {
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
						<NoteOperations />
					</div>
					<div className={styles.right}>Right</div>
				</div>
			</main>
		</div>
	);
}
