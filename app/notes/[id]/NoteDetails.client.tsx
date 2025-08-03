'use client';
import React from 'react';
import css from './NoteDetails.module.css';
import { fetchNoteById } from '@/lib/api';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';



const NoteDetailsClient = () => {
    const { noteId } = useParams<{ noteId: string }>()
    
      const { data: note } = useQuery({
        queryKey: ['notes', noteId],
        queryFn: () => fetchNoteById(noteId),
        refetchOnMount: false,
      });
    
  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note?.title}</h2>
        </div>
        <p className={css.content}>{note?.content}</p>
        <p className={css.date}>{note?.createdAt}</p>
        createdAt
      </div>
    </div>
  );
};

export default NoteDetailsClient;
