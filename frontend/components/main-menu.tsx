"use client";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Dialog, DialogContent, DialogClose, DialogTrigger } from "./ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBars,
  faAngleDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "./ui/button";
import Link from "next/link";
import { link } from "fs";
import { useState } from "react";
import Desktop from "./desktop";
const MainMenu = () => {
  const [location, curLoc] = useState("Honnavar");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return isDesktop ? (
    <Desktop />
  ) : (
    <div className="text-white flex justify-evenly items-center bg-black w-full h-20 px-4">
      <main className="w-[40%] ">
        <img
          src="https://cdn3.vectorstock.com/i/1000x1000/21/37/logo-for-bicycle-rental-vector-25512137.jpg"
          alt="SARA BIKE RENTAL"
          className="h-12 w-[100%]"
        />
      </main>
      <Dialog>
        <DialogTrigger className="bg-white text-black w-[18%] p-1 rounded-xl flex justify-center items-center hover:bg-yellow-500">
          <FontAwesomeIcon icon={faLocationDot} className="underline" />
          <Button className="w-[50%] mx-[20px]" variant={"custom"}>
            {location}
          </Button>
          <FontAwesomeIcon icon={faAngleDown} />{" "}
        </DialogTrigger>
        <DialogContent className="w-full">
          <div className=" flex justify-evenly items-center">
            <img
              src="https://cdn3.vectorstock.com/i/1000x1000/21/37/logo-for-bicycle-rental-vector-25512137.jpg"
              alt="SARA BIKE RENTAL"
              className="h-12 w-[30%]"
            />
            <p>|</p>
            <p>Bike Rentals</p>
          </div>
          <div className="flex flex-wrap">
            <div className="w-[40%] h-[90px] bg-sky-500 flex items-center justify-center m-3 rounded-lg bg-[url('/Honnavar.jpg')] bg-cover bg-no-repeat">
              <DialogClose>
                <Button
                  onClick={() => curLoc("Honnavar")}
                  className="mt-[45px] text-black-300 font-extrabold  text-2xl"
                  variant={"custom"}
                >
                  Honnavar
                </Button>
              </DialogClose>
            </div>
            <div className="w-[40%] h-[90px] bg-sky-500 flex items-center justify-center m-3 rounded-lg bg-[url('/kumta.jpg')] bg-cover bg-no-repeat">
              <DialogClose>
                <Button
                  onClick={() => curLoc("Kumta")}
                  className="mt-[45px] text-black-300 font-extrabold  text-2xl"
                  variant={"custom"}
                >
                  Kumta
                </Button>
              </DialogClose>
            </div>
            <div className="w-[40%] h-[90px] bg-sky-500 flex items-center justify-center m-3 rounded-lg bg-[url('/gokarna.avif')] bg-cover bg-no-repeat">
              <DialogClose>
                <Button
                  onClick={() => curLoc("Gokarna")}
                  className="mt-[45px] text-black-300 font-extrabold  text-2xl"
                  variant={"custom"}
                >
                  Gokarna
                </Button>
              </DialogClose>
            </div>
            <div className="w-[40%] h-[90px] bg-sky-500 flex items-center justify-center m-3 rounded-lg bg-[url('/Murdeshwar.jpg')] bg-cover bg-no-repeat">
              <DialogClose>
                <Button
                  onClick={() => curLoc("Murdeshwar")}
                  className="mt-[45px] text-black-300 font-extrabold text-2xl "
                  variant={"custom"}
                >
                  Murdeshwara
                </Button>
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Drawer direction="right">
        <DrawerTrigger>
          <FontAwesomeIcon className="text-5xl" icon={faBars} beatFade />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerClose className="absolute right-5 top-5">
            <FontAwesomeIcon className="text-4xl" icon={faXmark} beatFade />
          </DrawerClose>
          <nav className=" flex flex-col h-full items-center justify-evenly">
            <div className="flex justify-evenly items-center w-full">
              <Link href={"login"}> <DrawerClose>Login</DrawerClose></Link>
              <p>|</p>
              <Link href={"register"}>Signup</Link>
            </div>
            <Link href={""}>Tariff</Link>
            <Link href={""}>About Us</Link>
            <Link href={""}>Reach Us</Link>
            <Link href={""}>Terms & Conditions</Link>
            <Link href={""}>Privacy Policy</Link>
            <Link href={""}>FAQ</Link>
          </nav>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MainMenu;
