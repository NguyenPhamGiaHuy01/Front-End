import Logout from "@mui/icons-material/Logout";
import React from "react";
import CategoryIcon from "@mui/icons-material/Category";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import ShopTwoIcon from "@mui/icons-material/ShopTwo";
import Dashboard from "@mui/icons-material/Dashboard";
import ShoppingBag from "@mui/icons-material/ShoppingBag";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import logout from "../../Component/State/Authentication/Action";
const menu = [
  { title: "Dashboard", icon: <Dashboard />, path: "/" },
  { title: "Orders", icon: <ShoppingBag />, path: "/orders" },
  { title: "Menu", icon: <ShopTwoIcon />, path: "/menu" },
  { title: "Product Category", icon: <CategoryIcon />, path: "/category" },
/*   {
    title: "Ingredients",
    icon: <ProductionQuantityLimitsIcon />,
    path: "/ingredients",
  }, */
  { title: "Details", icon: <AdminPanelSettingsIcon />, path: "/details" },
  { title: "Logout", icon: <LogoutIcon />, path: "/" },
];
const AdminSideBar = ({ handleClose }) => {
  const isSmallScreen = useMediaQuery("(max-width:1080px");
  const navigate = useNavigate();
 /*  const dispatch = useDispatch(); */
  const handleNavigate=(item)=>{
    navigate(`/admin/restaurants${item.path}`)
    if (item.title==="Logout") {
        navigate("/")
        // dispatch(logout())
        handleClose()
    }
  }
  return (
    <div>
      <>
        <Drawer
          variant={isSmallScreen ? "temporary" : "permanent"}
          open={true}
          onClose={handleClose}
          anchor="left"
          sx={{ zIndex: 1 }}
        >
          <div
            className="w-[70vw] lg:w-[20vw] h-screen flex flex-col
            justify-center text-xl space-y-[1.65rem]"
          >
            {menu.map((item,i) => 
              <>
                <div onClick={()=>handleNavigate(item)} className="px-5 flex items-center gap-5 cursor-pointer">
                  {item.icon}
                  <span>{item.title}</span>
                </div>
                {i!==menu.length-1 && <Divider/>}
              </>
            )}
          </div>
        </Drawer>
      </>
    </div>
  );
};

export default AdminSideBar;
