import { MessageSquare, X } from "lucide-react";
import React from "react";

interface ChatTriggerProps {
  style?: React.CSSProperties;
  open: boolean;
  setOpen: Function;
  triggerRef: React.RefObject<HTMLButtonElement> | null;
  onClick?: () => void;
  // Die ref-Prop muss hier nicht hinzugefügt werden, da wir triggerRef verwenden
}

export default function ChatTrigger({
  style,
  open,
  setOpen,
  triggerRef,
  onClick,
}: ChatTriggerProps) {
  // Im Funktionskörper verwende onClick, falls vorhanden:
  const handleClick = onClick || (() => setOpen(!open));
  
  // Verwende handleClick im Button:
  return (
    <button 
      onClick={handleClick}
      ref={triggerRef as any}  // Den Cast zu any behalten
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