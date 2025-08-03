import css from './NoteDetails.module.css';
import { fetchNoteById } from '@/lib/api';

type Props = {
  params: Promise<{ noteId: string }>;
};

const NoteDetails = async ({ params }: Props) => {
  const { noteId } = await params;
  console.log('note id', noteId);
  
  const note = await fetchNoteById(noteId);
  console.log(note);
  

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
        </div>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>{note.createAt}</p>
      </div>
    </div>
  );
};

export default NoteDetails;
