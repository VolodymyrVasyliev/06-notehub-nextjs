// import css from './NoteDetails.module.css';
import { fetchNoteById } from '@/lib/api';
import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import NoteDetailsClient from './NoteDetails.client';

type Props = {
  params: Promise<{ noteId: string }>;
};

const NoteDetails = async ({ params }: Props) => {
  const { noteId } = await params;
  console.log('noteId', noteId);
  

  const queryClient = new QueryClient();


  await queryClient.prefetchQuery({
    queryKey: ['notes', noteId],
    queryFn: () => fetchNoteById(noteId),
  });


  return (
     <HydrationBoundary state={dehydrate(queryClient)}>
    < NoteDetailsClient />
    </HydrationBoundary>

  )
};

export default NoteDetails;
