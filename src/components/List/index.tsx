import Image from "next/image";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const AmountNum = styled.div``;

export interface ListItemData {
  id: string;
  name: string;
  amount: string;
  icon: string;
}
interface ListProps {
  items: ListItemData[];
}

const CustomList: React.FC<ListProps> = ({ items }) => {
  return (
    <List>
      {items.map((item) => (
        <ListItem key={item.id}>
          <ListItemAvatar>
            <Avatar>
              <AccountCircleIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={item.name}
            disableTypography
            secondaryTypographyProps={{ noWrap: true }}
          />
          <ListItemText
            primary={item.amount}
            disableTypography
            primaryTypographyProps={{ noWrap: true }}
            secondaryTypographyProps={{ noWrap: true }}
            style={{ textAlign: "right" }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default CustomList;

// export default function BasicList() {
//   const [checked, setChecked] = React.useState([0]);

//   const handleToggle = (value: number) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   return (
//     <List sx={{ width: "100%", bgcolor: "background.paper" }}>
//       {[0, 1, 2, 3].map((value) => {
//         const labelId = `checkbox-list-label-${value}`;

//         return (
//           <ListItem key={value}>
//             <ListItemIcon>
//               <Image
//                 src="/token/bnb-logo.svg"
//                 alt="token"
//                 width={30}
//                 height={30}
//               />
//             </ListItemIcon>
//             <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
//             <AmountNum>888</AmountNum>
//           </ListItem>
//         );
//       })}
//     </List>
//   );
// }
