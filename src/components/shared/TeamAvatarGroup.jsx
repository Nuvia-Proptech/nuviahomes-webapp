import Image from "next/image";

export const TeamAvatarGroup = ({ members, maxDisplay = 3, size = "md" }) => {
  const displayedMembers = members.slice(0, maxDisplay);
  const remainingCount = Math.max(0, members.length - maxDisplay);

  // Size classes
  const sizeClasses = {
    sm: {
      avatar: "w-6 h-6",
      text: "text-xs",
      overlap: "-mr-2",
    },
    md: {
      avatar: "w-7 h-7",
      text: "text-sm",
      overlap: "-mr-3",
    },
    lg: {
      avatar: "w-8 h-8",
      text: "text-sm",
      overlap: "-mr-3",
    },
  };

  return (
    <div className="flex -space-x-3">
      {displayedMembers.map((member, index) => (
        <div
          key={member.id}
          className={`
              relative rounded-full border-2 border-white bg-[#C4C4C4]
              ${sizeClasses[size].avatar}
              ${index > 0 ? sizeClasses[size].overlap : ""}
              transition-transform hover:scale-110 hover:z-10
            `}
            style={{ 
                zIndex: displayedMembers.length + index // First item has Lowest-index
              }}
        >
          <Image
            src={member.avatar}
            alt={member.name}
            fill
            className="object-cover rounded-full"
          />
        </div>
      ))}

      {remainingCount > 0 && (
        <div
          className={`
              relative rounded-full border-2 border-white bg-[#C4C4C4]
              flex items-center justify-center text-black font-medium
              ${sizeClasses[size].avatar}
              ${sizeClasses[size].text}
              ${sizeClasses[size].overlap}
               transition-colors
            `}
            style={{ zIndex: 100 }} // Remaining count has highest z-index
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
};

 