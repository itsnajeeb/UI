export const UserChildrenPanel = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="p-6 bg-[#111] text-white rounded-lg">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">
          User {user.name} – Team
        </h2>
        <button onClick={onClose}>✕</button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {(user.children || []).map((child) => (
          <div
            key={child.name}
            className="p-3 bg-gray-800 rounded text-center"
          >
            <div className="font-semibold">{child.name}</div>
            <div className="text-sm text-gray-400">
              Status: {child.attributes?.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
