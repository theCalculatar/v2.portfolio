import { ArrowRight, Github, Linkedin, Phone } from "lucide-react";
import React from "react";
import TextFlip from "./TextFlip";
import Image from "next/image";

function Footer() {
  return (
    <div className="grid gap-4">
      <ul className="grid gap-4 grid-cols-2 mt-6">
        <li className="flex justify-between items-center px-6 py-4 rounded-md dark:bg-neutral-800">
          <a href="" className="text-sm">
            LinkedIn
          </a>
          <Linkedin width={15} height={15} />
        </li>
        <li className="flex justify-between items-center px-6 py-4 rounded-md dark:bg-neutral-800">
          <a href="" className="text-sm">
            GitHub
          </a>
          <Github width={15} height={15} />
        </li>
        <li className="flex justify-between items-center px-6 py-4 rounded-md dark:bg-neutral-800">
          <a href="" className="text-sm">
            LinkedIn
          </a>
          <ArrowRight width={18} height={18} />
        </li>
        <li className="flex justify-between items-center px-6 py-4 rounded-md dark:bg-neutral-800">
          <a href="" className="text-sm">
            LinkedIn
          </a>
          <Linkedin width={15} height={15} />
        </li>
      </ul>

      <a
        href=""
        className="text-sm px-6 py-4 rounded-md flex justify-between items-center dark:bg-white dark:text-black"
      >
        <p>Book a Call</p>
        <TextFlip>
          <span>
            <Phone width={15} />
          </span>
          <span></span>
        </TextFlip>
      </a>

      <div className="p-6 dark:bg-white rounded-2xl dark:text-neutral-600">
        <div className="flex gap-4 items-center">
          <Image
            src={"/images/lee.jpeg"}
            width={50}
            height={50}
            alt="my portrait"
            className="rounded-full"
          />
          <div className="flex flex-col ">
            <p className="text-lg">Alpheus Mabetlela</p>
            <p className="text-sm">Software Engineer</p>
          </div>
        </div>

        <hr className="mt-2 mx-8" />

        <div className="mt-4 grid gap-4 sm:grid-cols-3 sm:text-start">
          <ul className="text-center">
            <h6 className="my-1 text-black">Pages</h6>
            <li>
              <a href="" className="text-sm">
                Home
              </a>
            </li>
            <li>
              <a href="" className="text-sm">
                About
              </a>
            </li>
            <li>
              <a href="" className="text-sm">
                Contact
              </a>
            </li>
          </ul>

          <ul className="text-center">
            <h6 className="my-1 text-white dark:text-black">CMS</h6>
            <li>
              <a href="" className="text-sm">
                Work
              </a>
            </li>
            <li>
              <a href="" className="text-sm">
                Work Single
              </a>
            </li>
            <li>
              <a href="" className="text-sm">
                Blog
              </a>
            </li>
          </ul>

          <ul className="text-center">
            <h6 className="my-1 text-black">Utility</h6>
            <li>
              <a href="" className="text-sm">
                404
              </a>
            </li>
          </ul>
        </div>
        <p className="text-center text-sm mt-6">&copy; Developed by Alpheus</p>
      </div>
    </div>
  );
}

export default Footer;
