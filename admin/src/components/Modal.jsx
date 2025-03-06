import { useState } from "react";
import { getFileIcon } from "../utils/utils";

export const Modal = ({ selectedFile, setIsModalOpen }) => {
    const [edit, setEdit] = useState(false);

    const stopPropagation = (e) => {
        // Prevent the click event from propagating to the outer div
        e.stopPropagation();
    };

    return (
        <div onClick={() => setIsModalOpen(false)} className="fixed z-10 ml-2 backdrop-blur-sm top-0 w-[-webkit-fill-available] h-full rounded-lg flex items-center justify-center">
            {
                edit ? <EditDetails selectedFile={selectedFile} stopPropagation={stopPropagation} setEdit={setEdit} /> : <ShowDetails selectedFile={selectedFile} stopPropagation={stopPropagation} setEdit={setEdit} />
            }
        </div>
    );
};

const ShowDetails = ({ selectedFile, stopPropagation, setEdit }) => {
    return (
        <div onClick={stopPropagation} className="z-20 bg-slate-300 border border-neutral-900/50 h-[55vh] w-[60vh] rounded-2xl">
            <div className="p-12">
                <div className="flex w-full flex-row items-center gap-4">
                    <div className="flex items-center justify-center w-[3em] h-[3em] bg-neutral-900/10 rounded-full">{getFileIcon(selectedFile.file)}</div>
                    <div className="flex items-center text-xl font-semibold">{selectedFile.file}</div>
                </div>
                <div className="flex flex-col gap-1 mt-8">
                    <p className="flex gap-3 text-md">
                        <span className="font-medium">Time:</span>
                        <span>{selectedFile.time}</span>
                    </p>
                    <p className="flex gap-3 text-md">
                        <span className="font-medium">Date:</span>
                        <span>{selectedFile.date}</span>
                    </p>
                    <p className="flex gap-3 text-md">
                        <span className="font-medium">Course:</span>
                        <span>{selectedFile.course}</span>
                    </p>
                    <p className="flex gap-3 text-md">
                        <span className="font-medium">Branch:</span>
                        <span>{selectedFile.branch}</span>
                    </p>
                    <p className="flex gap-3 text-md">
                        <span className="font-medium">Subject:</span>
                        <span>{selectedFile.subject}</span>
                    </p>
                </div>
            </div>
            <div className="px-12 flex justify-between">
                <button className="bg-red-500  w-[30%] rounded-md px-6 py-2 text-neutral-100">
                    Delete
                </button>
                <button onClick={() => setEdit(true)} className="bg-blue-500 w-[30%]  rounded-md px-6 py-2 text-neutral-100">
                    Edit
                </button>
            </div>
        </div>
    )
}

const EditDetails = ({ selectedFile, stopPropagation, setEdit }) => {
    return (
        <div onClick={stopPropagation} className="z-20 bg-slate-300 border border-neutral-900/50 h-max w-[60vh] rounded-2xl">
            <div className="p-12">
                <div className="flex w-full flex-row items-center justify-between gap-4">
                    <div className="flex items-center justify-center w-[3em] h-[3em] bg-neutral-900/10 rounded-full">{getFileIcon(selectedFile.file)}</div>
                    <input type="file" onChange={()=>{}} id="time" className="w-[77%]  text-lg font-semibold bg-neutral-900/10 rounded-md px-2 py-1 focus-within:outline-blue-600" />
                </div>
                <div className="flex flex-col gap-2 mt-8">
                    <div className="flex gap-3 text-md">
                        <label htmlFor='Course' className="w-[20%] font-medium">Course:</label>
                        <input type="text" id="Course" className="w-[80%] bg-neutral-900/10 rounded-md px-2 py-1 focus-within:outline-blue-600" value={selectedFile.course} />
                    </div>
                    <div className="flex gap-3 text-md">
                        <label htmlFor='Branch' className="w-[20%] font-medium">Branch:</label>
                        <input type="text" id="Branch" className="w-[80%] bg-neutral-900/10 rounded-md px-2 py-1 focus-within:outline-blue-600" value={selectedFile.branch} />
                    </div>
                    <div className="flex gap-3 text-md">
                        <label htmlFor='Subject' className="w-[20%] font-medium">Subject:</label>
                        <input type="text" id="Subject" className="w-[80%] bg-neutral-900/10 rounded-md px-2 py-1 focus-within:outline-blue-600" value={selectedFile.subject} />
                    </div>
                </div>
            </div>
            <div className="pb-8 flex justify-center items-center">
                <button onClick={() => setEdit(false)} className="bg-blue-500 w-[50%]  rounded-md px-6 py-2 text-neutral-100">
                    Save
                </button>
            </div>
        </div>
    )
}
