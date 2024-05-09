import Button from "@mui/material/Button";
import BasicTable, {
  TableColumn,
  TableRowData,
} from "../src/components/Table/inex";
import Stack from "@mui/material/Stack";
import CustomList, { ListItemData } from "../src/components/List";
import BottomDialog from "../src/components/Dialog";
import { useState } from "react";
// import Table f

export default function About() {
  const [open, setOpen] = useState(false);
  // 示例数据
  const exampleColumns: TableColumn[] = [
    { id: "address", align: "left" },
    { id: "active", align: "center" },
    { id: "edit", align: "right" },
  ];

  const exampleRows: TableRowData[] = [
    { id: "1", cells: ["John", "30", "Engineer"] },
    { id: "2", cells: ["Alice", "25", "Doctor"] },
    { id: "3", cells: ["Bob", "40", "Teacher"] },
  ];

  const items: ListItemData[] = [
    { id: "1", name: "Item 1", amount: "$10", icon: "" },
    { id: "2", name: "Item 2", amount: "$20", icon: "" },
    { id: "3", name: "Item 3", amount: "$30", icon: "" },
  ];
  return (
    <Stack spacing={2}>
      <CustomList items={items} />
      <div>操作记录</div>
      <BasicTable columns={exampleColumns} rows={exampleRows} />
      <Stack spacing={2} direction="row">
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Outlined
        </Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined">Outlined</Button>
        <BottomDialog open={open} onClose={() => setOpen(false)} />
      </Stack>
    </Stack>
  );
}
