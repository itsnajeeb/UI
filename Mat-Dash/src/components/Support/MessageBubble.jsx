export default function MessageBubble({ msg, avatar, }) {
    
    let currentDate = new Date().toLocaleDateString("en-IN", {
        month: "short",
        day: "numeric",
        year: "numeric",
    })

    const isMe = msg.sender === "me";

    return (
        <div className={` flex ${isMe ? "justify-end" : "justify-start"}`}>

            <div className="flex flex-col manrope-fontFamliy">
                <div
                    className={`px-4 py-3 rounded-lg max-w-xs text-sm flex gap-2 items-center 
                ${isMe ? "bg-teal-100" : "bg-[#E8E7FF]"} `} >
                    {!isMe && <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img src={`/Images/profile/${avatar}`} alt="Profile Image" className="w-full h-full" />
                    </div>}
                    {msg.text}
                </div>
                <p className="text-xs text-[#29343d] font-normal mt-1 ml-2">{msg.date || currentDate}</p>
            </div>
        </div >
    );
}
