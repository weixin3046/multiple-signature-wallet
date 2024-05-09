import React from "react";
import { Dialog, DialogContent, Button } from "@mui/material";
import { styled } from "@mui/system";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface BottomDialogProps {
  open: boolean;
  onClose: () => void;
}

const StyledDialog = styled(Dialog)`
  .MuiDialog-container {
    @media (max-width: 600px) {
      align-items: flex-end;
    }
  }
  .MuiDialog-paper {
    width: 50vw;
    max-height: 80vh;
    min-height: 80vh;
    max-width: 420px;
    border-radius: 20px;
    @media (max-width: 600px) {
      margin: 0;
      width: 100vw;
      border-radius: 20px 20px 0px 0px;
    }
  }
`;

const BottomDialog: React.FC<BottomDialogProps> = ({ open, onClose }) => {
  return (
    <StyledDialog open={open} onClose={onClose}>
      <DialogContent>
        <Button onClick={onClose}>Close</Button>
        <p>This is the content of the dialog.</p>
      </DialogContent>
    </StyledDialog>
  );
};

export default BottomDialog;
