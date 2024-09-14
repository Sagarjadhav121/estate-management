import { useSelector } from "react-redux";
const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="p-3 mx-w-lg mx-auto">
      <h1 className="text-center text-3xl font-bold font-1 my-7">Profile</h1>
      <form className="flex flex-col gap-4 ">
        <img
          src={currentUser.avatar}
          alt=""
          className="h-24 w-24 rounded-full object-cover cursor-pointer self-center mt-2"
        />
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          className="border p-3 rounded-lg "
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="email"
          className="border p-3 rounded-lg "
        />
        <input
          type="text"
          name="password"
          id="password"
          placeholder="password"
          className="border p-3 rounded-lg "
        />
        <button
          type="button"
          className="bg-slate-700 text-white uppercase p-3 rounded-lg hover:bg-slate-500"
        >
          update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer hover:text-red-500">
          Delete Account
        </span>
        <span className="text-red-700 cursor-pointer hover:text-red-500">
          Sign Out
        </span>
      </div>
    </div>
  );
};

export default Profile;
