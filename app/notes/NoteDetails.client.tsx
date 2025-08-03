// import css from './NoteDetails.module.css';
// // import type {Note} from "../../../type/note.ts"
// import { fetchNoteById } from '@/lib/api';

// type Props = {
//   params: Promise<{ noteId: string }>;
// };

// const NoteDetails = async ({ params }: Props) => {
//   const { noteId } = await params;
//   const note = await fetchNoteById(noteId);

//   return (
//     <div className={css.container}>
//       <div className={css.item}>
//         <div className={css.header}>
//           <h2>{note.title}</h2>
//         </div>
//         <p className={css.content}>{note.content}</p>
//         <p className={css.date}>{note.creatrAt}</p>
//       </div>
//     </div>
//   );
// };

// export default NoteDetails;
