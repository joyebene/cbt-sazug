interface ModalProps {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

export function Modal({
  open,
  title,
  children,
  onClose,
}: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-[500px]">
        <div className="flex justify-between mb-4">
          <h2>{title}</h2>

          <button onClick={onClose}>
            ✕
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}