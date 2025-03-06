import { Sidebar } from "../../components/Sidebar"
import { Outlet } from 'react-router-dom';

export const Layout = ({ children }) => {
    return (
        <div className="relative flex h-[86vh] flex-row gap-5 mx-4 my-6">
            <Sidebar />
            <div className='scrollContainer border flex flex-1 flex-col h-full border-neutral-900/20 shadow-md rounded-md bg-neutral-200 gap-5 px-3 py-5 overflow-y-scroll'>
                <Outlet/>
                {children}
            </div>
        </div>
    )
}
