import { useContext } from "react";
import image from "../assets/profile.png";
import { Context } from '../context/Context';

export const Profile = () => {
    const { user } = useContext(Context);
    return (
        <div className=" flex items-center justify-center h-full">
            <div className="bg-neutral-500/10 flex items-center justify-start h-[28rem] w-[50rem] rounded-lg p-[4%] gap-10">
                <div className=" h-full w-[25%]">
                    <img className="h-44 w-44" src={image} alt={user?.username} />
                </div>
                <div className=" flex flex-col h-full flex-1">
                    <h1 className="text-3xl font-semibold mb-2">{user?.username && user.username.charAt(0).toUpperCase() + user.username.slice(1)}</h1>

                    <div key={user?.id} className="flex gap-10">
                        <div>
                            <p>Username : </p>
                            <p>Email : </p>
                            <p>{(user?.isAdmin) && "Role :"}</p>
                            <p>{(user?.rootUser) && "Super Admin :"}</p>
                            <p>Admin Since : </p>
                        </div>
                        <div>
                            <p>{user?.username}</p>
                            <p>{user?.email} </p>
                            <p>{(user?.isAdmin) && "Admin"} </p>
                            <p>{(user?.rootUser) && "Super Admin"} </p>
                            <p>{user?.createdAt && new Date(user?.createdAt).toLocaleString(undefined, { hour12: 'true' })}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};