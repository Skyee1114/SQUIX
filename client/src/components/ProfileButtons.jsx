import React, { Fragment, useState, useEffect, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { UserContext } from "../contexts/UserContext";
import { logout } from "../actions/auth";
import defaultAvatar from "../assets/img/user.png";
import { getCurrentAvatar, getCurrentProfile } from "../actions/profile";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProfileButtons() {
  const { t } = useTranslation();
  const {user, setUser} = useContext(UserContext)  

  const [avatar, setAvatar] = useState(defaultAvatar);
  const [name, setName] = useState('Mellosa');

  const LogOut = () => {
    logout();
    setUser(null);    
  }

  const getFirstName = (name) => {
    const firstName = name.split(' ')[0];
    return firstName;  
  }

  useEffect(() => {    
    if(user) {
      // console.log(user);
      getCurrentAvatar().then(data => {
        if(data) {
          const imageUrl = URL.createObjectURL(data)
          setAvatar(imageUrl);
        }
        else {
          setAvatar(defaultAvatar);
        }
      });

      getCurrentProfile().then(data => {
        if(data) {
          setName(data.personalInfo.username);
        }
      });
    }
  }, [user])


  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="uppercase inline-flex items-center w-[130px] 2xl:w-[180px] justify-between gap-x-2 bg-[#070811] text-white px-2 2xl:px-5 h-[40px] 2xl:h-[50px] text-[14px] 2xl:text-[20px] font-bold shadow-sm hover:bg-[#202340] transition duration-300 hover:text-[#FFA801]">
        {user ? 
        <div className="flex gap-2 items-center">
          <div
            className="rounded-full overflow-hidden"
            style={{ width: '30px', height: '30px' }}
          >
            <img
              src={avatar}
              alt="user"
              className="w-full h-full object-cover"
            />
          </div>
          <p>{getFirstName(name)}</p>
        </div> :
         
        <p>{t('account')}</p>}
        
        <svg
          className="w-2 2xl:w-4 h-2 2xl:h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-[130px] 2xl:w-[180px] origin-top-right divide-y divide-[#070811] bg-[#070811] shadow-lg focus:outline-none text-[14px] font-bold">
        {!user ?<>
          <Menu.Item>
            {({ active }) => (
              <Link
                to="/auth/register"
                className={classNames(
                  active ? "bg-[#202340] transition duration-300 hover:text-[#FFA801]" : "",
                  "px-4 py-1 2xl:py-2 text-xs 2xl:text-sm text-white flex items-center gap-2 uppercase"
                )}
              >

                {t('register')}
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                to="/auth/login"
                className={classNames(
                  active ? "bg-[#202340] transition duration-300 hover:text-[#FFA801]" : "",
                  "px-4 py-1 2xl:py-2 text-xs 2xl:text-sm text-white flex items-center gap-2 uppercase"
                )}
              >
                {t('login')}
              </Link>
            )}
          </Menu.Item></>:<>
          {user.isAdmin ? <Menu.Item>
            {({ active }) => (
              <Link
                to={"/admin"}
                className={classNames(
                  active ? "bg-[#202340] transition duration-300 hover:text-[#FFA801]" : "",
                  "px-4 py-1 2xl:py-2 text-xs 2xl:text-sm text-white flex items-center gap-2 uppercase"
                )}
              >
                {t('admin')}
              </Link>
            )}
          </Menu.Item> : null}
          
          <Menu.Item>
            {({ active }) => (
              <Link
                to={"/profile"}
                className={classNames(
                  active ? "bg-[#202340] transition duration-300 hover:text-[#FFA801]" : "",
                  "px-4 py-1 2xl:py-2 text-xs 2xl:text-sm text-white flex items-center gap-2 uppercase"
                )}
              >
                {t('editprofile')}
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                to={"/"}
                onClick={() => LogOut()}
                className={classNames(
                  active ? "bg-[#202340] transition duration-300 hover:text-[#FFA801]" : "",
                  "px-4 py-1 2xl:py-2 text-xs 2xl:text-sm text-white flex items-center gap-2 uppercase"
                )}
              >
                {t('logout')}
              </Link>
            )}
          </Menu.Item></>}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
