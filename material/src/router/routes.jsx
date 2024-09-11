import { patch } from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined'
const admin = [ 
    {
      content: "Teacher",
      path: "/admin-layout", 
      icon: <PersonAddOutlinedIcon/>
    },
    {
      content: "Student",
      path: "/admin-layout/student", 
      icon: <PersonOutlineOutlinedIcon/>
    }
  ]
  
const student =[ 
    {}
]
export {admin,student }