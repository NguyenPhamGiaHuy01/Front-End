import { Avatar, Badge, Box, Icon, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { pink } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from '@mui/icons-material/Person';
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import Person from "@mui/icons-material/Person";
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box
      className="px-5 sticky top-0 z-[100] py-[.8rem] bg-[#66ccbb] lg:px-20 flex
        justify-between"
    >
      <div
        className="lg:mr-10 cursor-pointer flex items-center
            space-x-4"
      >
        <li className="logo font-semibold text-gray-300 text-2xl">ABC</li>
      </div>

      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="">
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }}></SearchIcon>
          </IconButton>
        </div>

        <div className="">
          {false ? <Avatar sx={{ bgcolor: "white", color: pink.A400 }}>C</Avatar>
          : <IconButton onClick={()=>navigate("/account/login")}>
              <Person/>
            </IconButton>}
        </div>
        <div className="">
          <IconButton color="blue" badgeContent={3}>
            <Badge>
              <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </Box>
  );
};
