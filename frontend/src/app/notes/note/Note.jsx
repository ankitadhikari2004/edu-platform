import React from 'react';
import { IoDocumentTextOutline } from "react-icons/io5";

export const Note = () => {
  const notes = [
    {
      id: 1,
      subject: 'Mathematics',
      chapter: 'Algebra',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel nunc semper, aliquet odio sed, vehicula nunc. Sed ac posuere elit. Sed nec dui vitae nunc ultricies fermentum.',
      attachmentUrl: 'https://example.com/attachments/mathematics-algebra.pdf', // Example URL
    },
    {
      id: 2,
      subject: 'Science',
      chapter: 'Physics',
      content: 'Sed convallis odio eget eros interdum, vitae volutpat mauris tincidunt. Ut in mauris pretium, blandit risus sed, eleifend purus. Curabitur vehicula mauris ut felis tempus, sed congue ex sodales.',
      attachmentUrl: '', // No attachment provided
    },
    {
      id: 3,
      subject: 'English',
      chapter: 'Literature',
      content: 'Pellentesque ultricies eros eget mauris tempus bibendum. Phasellus consectetur sapien eu ante lacinia, nec malesuada enim fermentum. Fusce condimentum justo at ex eleifend, nec interdum quam tempor.',
      attachmentUrl: 'https://example.com/attachments/english-literature.docx', // Example URL
    },
    {
      id: 4,
      subject: 'History',
      chapter: 'Ancient Civilizations',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel nunc semper, aliquet odio sed, vehicula nunc. Sed ac posuere elit. Sed nec dui vitae nunc ultricies fermentum.',
      attachmentUrl: '', // No attachment provided
    },
    {
      id: 5,
      subject: 'Geography',
      chapter: 'Physical Geography',
      content: 'Sed convallis odio eget eros interdum, vitae volutpat mauris tincidunt. Ut in mauris pretium, blandit risus sed, eleifend purus. Curabitur vehicula mauris ut felis tempus, sed congue ex sodales.',
      attachmentUrl: 'https://example.com/attachments/geography-physical-geography.pdf', // Example URL
    },
    {
      id: 6,
      subject: 'Chemistry',
      chapter: 'Chemical Reactions',
      content: 'Pellentesque ultricies eros eget mauris tempus bibendum. Phasellus consectetur sapien eu ante lacinia, nec malesuada enim fermentum. Fusce condimentum justo at ex eleifend, nec interdum quam tempor.',
      attachmentUrl: '', // No attachment provided
    },
    {
      id: 7,
      subject: 'Biology',
      chapter: 'Ecology',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel nunc semper, aliquet odio sed, vehicula nunc. Sed ac posuere elit. Sed nec dui vitae nunc ultricies fermentum.',
      attachmentUrl: 'https://example.com/attachments/biology-ecology.pdf', // Example URL
    },
    {
      id: 8,
      subject: 'Physics',
      chapter: 'Electricity and Magnetism',
      content: 'Sed convallis odio eget eros interdum, vitae volutpat mauris tincidunt. Ut in mauris pretium, blandit risus sed, eleifend purus. Curabitur vehicula mauris ut felis tempus, sed congue ex sodales.',
      attachmentUrl: '', // No attachment provided
    },
    {
      id: 9,
      subject: 'English',
      chapter: 'Grammar',
      content: 'Pellentesque ultricies eros eget mauris tempus bibendum. Phasellus consectetur sapien eu ante lacinia, nec malesuada enim fermentum. Fusce condimentum justo at ex eleifend, nec interdum quam tempor.',
      attachmentUrl: 'https://example.com/attachments/english-grammar.pdf', // Example URL
    },
    {
      id: 10,
      subject: 'Mathematics',
      chapter: 'Geometry',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel nunc semper, aliquet odio sed, vehicula nunc. Sed ac posuere elit. Sed nec dui vitae nunc ultricies fermentum.',
      attachmentUrl: '', // No attachment provided
    },
    {
      id: 11,
      subject: 'Chemistry',
      chapter: 'Periodic Table',
      content: 'Sed convallis odio eget eros interdum, vitae volutpat mauris tincidunt. Ut in mauris pretium, blandit risus sed, eleifend purus. Curabitur vehicula mauris ut felis tempus, sed congue ex sodales.',
      attachmentUrl: '', // No attachment provided
    },
    {
      id: 12,
      subject: 'Biology',
      chapter: 'Cell Biology',
      content: 'Pellentesque ultricies eros eget mauris tempus bibendum. Phasellus consectetur sapien eu ante lacinia, nec malesuada enim fermentum. Fusce condimentum justo at ex eleifend, nec interdum quam tempor.',
      attachmentUrl: 'https://example.com/attachments/biology-cell-biology.pdf', // Example URL
    },
    {
      id: 13,
      subject: 'History',
      chapter: 'World War II',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel nunc semper, aliquet odio sed, vehicula nunc. Sed ac posuere elit. Sed nec dui vitae nunc ultricies fermentum.',
      attachmentUrl: 'https://example.com/attachments/history-world-war-ii.pdf', // Example URL
    },
  ];


  return (
    <div>
      <h1 className="text-3xl font-semibold text-center mt-10">All Notes</h1>
      <div className="flex flex-col items-center w-full px-4 py-8">
        {notes.map(note => (
          <NoteCard
            key={note.id}
            subject={note.subject}
            chapter={note.chapter}
            content={note.content}
            attachmentUrl={note.attachmentUrl}
          />
        ))}
      </div>
    </div>
  );
};

const NoteCard = ({ subject, chapter, content, attachmentUrl }) => {
  const handleDownload = () => {
    if (attachmentUrl) {
      window.open(attachmentUrl, '_blank');
    }
  };

  return (
    <div className='text-neutral-900 flex flex-col items-start justify-between w-[50%] h-fit px-3 py-3 gap-1 bg-gray-300 backdrop-blur-sm rounded-xl border border-neutral-600 mb-6'>
      <div className="flex items-start justify-between w-full">
        <div className="flex items-center gap-2">
          <span className="bg-slate-400/30 rounded-full p-2">
            <IoDocumentTextOutline fontSize={35} className="text-yellow-500" />
          </span>
          <div className="flex flex-col">
            <p className="text-xl font-semibold">{subject}</p>
            <p className="text-sm text-neutral-700 font-normal"><span className='font-medium text-neutral-800'>Chapter:</span> {chapter}</p>
          </div>
        </div>
        {attachmentUrl && (
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={handleDownload}
          >
            Download
          </button>
        )}
      </div>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};
