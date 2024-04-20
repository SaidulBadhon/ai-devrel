export default function ChatHeader(props: PropsType) {
  const { title, avatar, isActive } = props;

  return (
    <div className="flex items-center justify-between border-b p-4">
      <div className="flex items-center">
        <img src={avatar} alt={title} className="h-12 w-12 rounded-full" />
        <div className="ml-2">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-sm text-gray-500">
            {/* SShow a green dot if onlihne */}
            {isActive && (
              <span className="mr-1 inline-block h-2 w-2 rounded-full bg-green-500"></span>
            )}
            {isActive ? "Active Now" : "Offline"}
          </p>
        </div>
      </div>

      {/* Logout button
      <button
        className="text-cyan-600 hover:text-cyan-700"
        onClick={() => logout()}
      >
        Logout
      </button> */}
    </div>
  );
}
