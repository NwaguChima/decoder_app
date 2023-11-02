'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from './ui/Dialog';
import { Button } from './ui/Button';

const UploadButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v);
        }
      }}
    >
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <Button>Upload PDF</Button>
      </DialogTrigger>

      <DialogContent>Hello</DialogContent>
    </Dialog>
  );
};

export default UploadButton;
