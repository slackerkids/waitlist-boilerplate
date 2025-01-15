export type SubmissionStatus = "success" | "error" | "duplicate" | null;

export interface WaitlistFormProps {
  className?: string;
}

export interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  status: SubmissionStatus;
  message: string;
}
