import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBars,
  faAngleDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Dialog, DialogContent, DialogClose, DialogTrigger } from "./ui/dialog";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Desktop = () => {
  const [location, curLoc] = useState("Honnavar");

  return (
    <div className="flex justify-around items-center text-white bg-black w-full h-20 px-4 border-collapse box-border">
      <main className="w-[10%] ">
        <Image
          src={"/Honnavar.jpg"}
          alt={"SARA BIKE RENTAL"}
          width={1000}
          height={1000}
          quality={2}
          className="h-12 w-[100%]"
        />
      </main>
      <nav className=" flex w-[40%] items-center justify-evenly underline-offset-9">
        <Link href={""} className="group transition duration-300">
          Tariff
          <span className="max-w-0 block group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-600"></span>
        </Link>
        <Link href={""} className="group transition duration-300">
          About Us
          <span className="max-w-0 block group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-600"></span>
        </Link>
        <Link href={""} className="group transition duration-300">
          Reach Us
          <span className="max-w-0 block group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-600"></span>
        </Link>
        <Link href={""} className="group transition duration-300">
          Terms & Conditions
          <span className="max-w-0 block group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-600"></span>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <p>
              Menu <FontAwesomeIcon icon={faAngleDown} />
            </p>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-6 rounded-t-none w-[200px] bg-yellow-500">
            <DropdownMenuItem                 className="w-[100%] my-0 p-2 hover:bg-gray-400 active:bg-purple-700 flex justify-center items-center"
            >
              <Link
                href={""}              >
                Privacy Policy
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem  className="w-[100%] my-0 p-2 hover:bg-gray-400 active:bg-purple-700 flex justify-center items-center">
              <Link
                href={""}
                
              >
                FAQ
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
      <Dialog>
        <DialogTrigger className="bg-white text-black w-[10%] p-1 rounded-xl flex justify-center items-center hover:bg-yellow-500">
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

      <div className="flex">
        <div className="w-[100px] h-[50px] mr-2 hover:bg-gray-700 active:bg-yellow-700 rounded-lg flex justify-center items-center">
          <Link href={"login"}>Login</Link>
        </div>
        <div className="w-[100px] h-[50px] hover:bg-gray-700 active:bg-yellow-700 rounded-lg flex justify-center items-center">
          <Link href={"register"}>Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
