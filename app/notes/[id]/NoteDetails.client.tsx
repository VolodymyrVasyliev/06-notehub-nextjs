// import css from './NoteDetails.module.css';
// import { fetchNoteById } from '@/lib/api';
// import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';

// type Props = {
//   params: Promise<{ noteId: string }>;
// };

// const NoteDetails = async ({ params }: Props) => {
//     const { noteId } = await params;
//     console.log(noteId);

//   const note = await fetchNoteById(noteId);

//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery({
//     queryKey: ['note', noteId],
//     queryFn: () => fetchNoteById(noteId),
//   });

//   return (
//     <div className={css.container}>
//       <div className={css.item}>
//         <div className={css.header}>
//           <h2>{note.title}</h2>
//         </div>
//         <p className={css.content}>{note.content}</p>
//         <p className={css.date}>{note.createdAt}</p>
//         createdAt
//       </div>
//     </div>
//   );
// };

// export default NoteDetails;

import React from "react";
import css from './NoteDetails.module.css';
import type { Note } from '@/type/note';


interface NoteListProps {
    note: Note;
   
    }


const NoteDetailsClient = ({ note }: NoteListProps) => {
  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
        </div>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>{note.createdAt}</p>
        createdAt
      </div>
    </div>
  );
};

export default NoteDetailsClient;


