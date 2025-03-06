import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { BsInfoCircle } from "react-icons/bs";
import { Modal } from "../components/Modal";
import { productData, getFileIcon } from "../utils/utils";

export const Products = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isFileInputVisible, setIsFileInputVisible] = useState(false);

    const handleAddClick = () => {
        setIsFileInputVisible(true);
        document.getElementById("fileInput").click();
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        handleFileSelection(droppedFile);
    };

    const OpenModal = (file) => {
        setSelectedFile(file);
        setIsModalOpen(true);
    };

    return (
        <div className='relative w-full pr-5 flex items-center justify-center gap-8 flex-col'>
            <div
                onClick={handleAddClick}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="w-full h-28 border-2 border-dashed border-black rounded-xl flex justify-center items-center cursor-pointer"
            >
                <input
                    type="file"
                    id="fileInput"
                    onChange={(e) => handleFileSelection(e.target.files[0])}
                    style={{ display: "none" }}
                />
                <div className="flex justify-center items-center border-dashed border-2 border-black rounded-full w-[4em] h-[4em]">
                    <IoIosAdd fontSize={80} />
                </div>
            </div>

            <div className='w-full flex items-center justify-center gap-2 flex-col'>
                {productData.map((item, index) => (
                    <div key={index} className="wrapper w-full border border-black rounded-xl flex justify-between ">
                        <div className="type border-r px-2 border-black w-[10%] text-center py-3 flex items-center justify-center">
                            {getFileIcon(item.file)}
                        </div>
                        <div className="name w-[40%] px-3 text-center py-3 flex items-center justify-center break-word">
                            {item.file}
                        </div>
                        <div className="subject border-x px-3 border-black w-[40%] text-center py-3 flex items-center break-word justify-center">
                            {item.subject}
                        </div>
                        <div className="info w-[10%] px-2 text-center py-3 flex items-center justify-center">
                            <button
                                onClick={() => OpenModal(item)}
                                className='p-2 hover:bg-neutral-900/10 transition-all rounded-full'
                            >
                                <BsInfoCircle />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && <Modal selectedFile={selectedFile} setIsModalOpen={setIsModalOpen} />}
        </div>
    )
}
