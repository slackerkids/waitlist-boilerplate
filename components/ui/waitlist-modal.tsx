import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { WaitlistModalProps } from "@/types";
import { CheckCircle, XCircle } from "lucide-react";

export function WaitlistModal({
  isOpen,
  onClose,
  status,
  message,
}: WaitlistModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div
            className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full 
            ${status === "success" ? "bg-green-100" : "bg-red-100"}`}
          >
            {status === "success" ? (
              <CheckCircle className="h-6 w-6 text-green-600" />
            ) : (
              <XCircle className="h-6 w-6 text-red-600" />
            )}
          </div>
          <DialogTitle className="text-center text-xl">
            {status === "success" ? "Successfully Joined!" : "Oops!"}
          </DialogTitle>
          <DialogDescription className="text-center">
            {message}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
