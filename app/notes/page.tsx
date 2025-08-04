import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';

const NotesPage = async () => {
  const initialPage = 1;
  const initialSearch = '';

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', initialPage, initialSearch],
    queryFn: () => fetchNotes(initialPage, initialSearch),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient initialPage={initialPage} initialSearch={initialSearch} />
    </HydrationBoundary>
  );
};

export default NotesPage;
