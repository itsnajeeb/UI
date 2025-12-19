import { Play } from "lucide-react";

export default function VideoCard({play, setPlay}) {

  return (
    <div className="w-full lg:h-67.5 rounded-xl overflow-hidden relative bg-black h-48 md:h-56">

      {/* THUMBNAIL */}
      {!play && (
        <div
          className="absolute inset-0 cursor-pointer"
          onClick={() => setPlay(true)}
        >
          <img
            src="https://img.youtube.com/vi/uCd6tbUAy6o/maxresdefault.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-primary-bg rounded-full flex items-center justify-center text-white text-2xl shadow-xl hover:scale-110 transition-all">
              <Play/>
            </div>
          </div>
        </div>
      )}

      {/* VIDEO */}
      {play && (
        <iframe
          className="absolute inset-0 w-full h-full animate-zoom"
          src="https://www.youtube.com/embed/uCd6tbUAy6o?autoplay=1&mute=1&controls=1"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}
