import { ChevronDown } from "lucide-react";

export default function ScrollDownArrow() {
  return (
    <div className="relative bottom-0  left-1/2 -translate-x-1/2 z-20">
      
      <div className="flex flex-col items-center leading-none ">
        <span className="scroll-arrow delay-0"><ChevronDown/></span>
        <span className="scroll-arrow delay-1"><ChevronDown/></span>
        <span className="scroll-arrow delay-2"><ChevronDown/></span>
      </div>

    </div>
  );
}
