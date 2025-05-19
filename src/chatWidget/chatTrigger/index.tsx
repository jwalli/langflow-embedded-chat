import { MessageSquare, X } from "lucide-react";
import React from "react";

interface ChatTriggerProps {
  style?: React.CSSProperties;
  open: boolean;
  setOpen: Function;
  triggerRef?: React.RefObject<HTMLButtonElement> | null;
  onClick?: () => void;
}

export default function ChatTrigger({
  style,
  open,
  setOpen,
  triggerRef,
  onClick,
}: ChatTriggerProps) {
  // Verwende onClick oder setze den Standardwert
  const handleClick = onClick || (() => setOpen(!open));
  
  return (
    <button 
      onClick={handleClick}
      ref={triggerRef as any}
      style={style}
      onMouseDown={(e) => {
        e.preventDefault()
      }}
      className="cl-trigger"
    >
      <X className={"cl-trigger-icon " + (open ? "cl-scale-100" : "cl-scale-0")} />
      <MessageSquare className={"cl-trigger-icon " + (open ? "cl-scale-0" : "cl-scale-100")} />
    </button>
  );
}