import useUsers from "@/hooks/useUsers";

import Avatar from "../Avatar";

const FollowMe = () => {
    const { data: users = [] } = useUsers();
       
    if (users.length == 0) {
        return null;
    }

    return (
        <div className="px-6 py-3 hidden lg:block">
            <div className="bg-teal-500 rounded-xl p-2">
                <h2 className="text-white text-center justify-center text-lg font-semibold">
                    Follow Other Musicians</h2>
                    <div className="flex flex-col gap-6 mt-4">
                    {users.map((user: Record<string, any>) => (
                        <div key={user.id} className="flex flex-row gap-4">
                            <Avatar userId={user.id} />
                            <div className="flex flex-col">
                            <p className="
                            text-white
                            font-semibold
                            text-sm
                            ">
                                {user.name}
                            </p>
                            </div>
                            </div>
                    ))}
                
                    </div>
            </div>
        </div>
    );
}

export default FollowMe;