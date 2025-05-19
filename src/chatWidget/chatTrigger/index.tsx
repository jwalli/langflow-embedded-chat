import { MessageSquare, X } from "lucide-react"

// Suche nach der Interface-Definition
interface ChatTriggerProps {
  style?: React.CSSProperties;
  open: boolean;
  setOpen: Function;
  triggerRef: React.RefObject<HTMLButtonElement> | null;
  // Füge onClick hinzu:
  onClick?: () => void;
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
      ref={triggerRef}
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