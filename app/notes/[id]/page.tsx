import css from './NoteDetails.module.css';
import { fetchNoteById } from '@/lib/api';
import { QueryClient } from '@tanstack/react-query';
import NoteDetailsClient from './NoteDetails.client';
// HydrationBoundary;
// dehydrate;
type Props = {
  params: Promise<{ noteId: string }>;
};

const NoteDetails = async ({ params }: Props) => {
  const { noteId } = await params;
  const note = await fetchNoteById(noteId);
  console.log(noteId);
  

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['note', noteId],
    queryFn: () => fetchNoteById(noteId),
  });


  return <NoteDetailsClient note={note}  />;
};

export default NoteDetails;
