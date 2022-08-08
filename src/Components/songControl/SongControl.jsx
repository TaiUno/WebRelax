import { memo } from "react";
const SongControl = ({onIsPlaying, onActionLeft, onActionRight, onPlayMusic}) => {

    return (
        <div className="flex items-center justify-center mt-6 w-full">
          <div className="flex items-center justify-between text-2xl bg-slate-400 rounded-2xl w-1/3 max-w-lg p-4">
          <svg
              onClick={onActionLeft}
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#a7582c] cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {onIsPlaying ? <svg
              onClick={onPlayMusic}
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#a7582c] cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg> : <svg
              onClick={onPlayMusic}
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#a7582c] cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>}
            <svg
              onClick={onActionRight}
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#a7582c] cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
    );
}

export default memo(SongControl)