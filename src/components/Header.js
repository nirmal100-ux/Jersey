import React, { useState } from "react";


import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";


import {
  UserCircleIcon,
  ChevronDownIcon,
  PowerIcon,

} from "@heroicons/react/24/outline";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearAlls } from "../features/userInfo";


const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },

  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

const adminMenuItems = [
  {
    label: "Admin Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Product List",
    icon: UserCircleIcon,
  },

  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];





const Header = () => {

  const { userInfo } = useSelector((store) => store.userInfo);

  const dispatch = useDispatch();
  const nav = useNavigate();



  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);


  return (

    <div className="">
      <Navbar className=" p-2 px-7 bg-black">
        <div className="text-blue-gray-900 flex justify-between">
          <div
            className=" flex mr-4 ml-2 cursor-pointer py-1.5 font-medium"
          >
            <NavLink to='/' replace><img className="h-[40px] w-[40px] rounded-full" src="https://th.bing.com/th/id/OIP.o-QYc1Litgoxf72T2f8iMgHaIL?pid=ImgDet&rs=1 " alt="" /> </NavLink>
            <p className="text-white px-2 py-3">Jersey Shope</p>
          </div>





          <div className="flex items-center space-x-5">
            <div className="space-x-5">



              <NavLink className="text-white" to='/user/login'>About</NavLink>
              <NavLink className="text-white" to='/user/login'>Contact</NavLink>
              {userInfo === null && <NavLink className="text-white" to='/user/login'>Login</NavLink>}
            </div>



            {userInfo !== null && <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
              <MenuHandler>
                <Button
                  variant="text"
                  color="blue-gray"
                  className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                  <Avatar
                    variant="circular"
                    size="sm"
                    alt="tania andrew"
                    className="border border-blue-500 p-0.5"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  />
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                      }`}
                  />
                </Button>
              </MenuHandler>
              <MenuList className="p-1">
                {(userInfo.isAdmin === true ? adminMenuItems : profileMenuItems).map(({ label, icon }, key) => {
                  const isLastItem = key === profileMenuItems.length - 1;
                  return (
                    <MenuItem
                      key={label}
                      onClick={() => {
                        switch (label) {
                          case 'Sign Out':
                            dispatch(clearAlls());
                            nav('/', { replace: true });
                            closeMenu();

                            break;

                          case 'Product List':
                            nav('/products/all');
                            closeMenu();

                            break;

                          case 'My Profile':
                            nav('/user/profile');
                            closeMenu();

                            break;
                          case 'Admin Profile':
                            nav('/user/allDetail');
                            closeMenu();


                            break;
                          default:
                            closeMenu();
                        }


                      }}
                      className={`flex items-center gap-2 rounded ${isLastItem
                        ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                        : ""
                        }`}
                    >
                      {React.createElement(icon, {
                        className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                        strokeWidth: 2,
                      })}
                      <Typography
                        as="span"
                        variant="small"
                        className="font-normal"
                        color={isLastItem ? "red" : "inherit"}
                      >
                        {label}
                      </Typography>
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>
            }

          </div>







        </div>

      </Navbar>
    </div>

  )
}

export default Header
