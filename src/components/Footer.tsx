import { File, Github, Linkedin, Mail, Phone } from "lucide-react";
import React from "react";
import TextFlip from "./TextFlip";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import PopUp from "./PopUp";

function Footer() {
  return (
    <Container>
      <div className="grid gap-4 mb-4">
        <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 mt-6 text-font-primary">
          <PopUp>
            <li className="rounded-md bg-card-background">
              <a
                href="https://github.com/theCalculatar/"
                target="_blank"
                className="text-sm flex justify-between px-6 py-4"
              >
                GitHub
                <Github width={15} height={15} />
              </a>
            </li>
          </PopUp>
          <PopUp>
            <li className="rounded-md bg-card-background">
              <a
                href="https://www.linkedin.com/in/mahlane/"
                target="_blank"
                className="text-sm flex justify-between px-6 py-4"
              >
                LinkedIn
                <Linkedin width={15} height={15} />
              </a>
            </li>
          </PopUp>
          <PopUp>
            <li className="rounded-md bg-card-background">
              <a
                href="mailto:alpheusm13@gmail.com"
                target="_blank"
                className="text-sm flex justify-between px-6 py-4"
              >
                Email
                <Mail width={15} height={15} />
              </a>
            </li>
          </PopUp>
          <PopUp>
            <li className="rounded-md bg-card-background">
              <a
                href="/resume.pdf"
                target="_blank"
                className="text-sm flex justify-between px-6 py-4"
              >
                Resume
                <File width={15} height={15} />
              </a>
            </li>
          </PopUp>
        </ul>

        <div className="p-6 bg-black rounded-2xl">
          <div className="flex gap-4 items-center">
            <Image
              src={"/images/lee.jpeg"}
              width={50}
              height={50}
              alt="my portrait"
              className="rounded-full"
            />
            <div className="flex flex-col ">
              <h6 className="text-lg text-white">Alpheus Mabetlela</h6>
              <p className="text-sm">Software Engineer</p>
            </div>
          </div>

          <hr className="mt-2 mx-8" />

          <div className="mt-4 grid gap-4 sm:grid-cols-3 sm:text-start ">
            <ul className="text-center">
              <h6 className="my-1 text-white">Pages</h6>
              <li>
                <Link href="/" className="text-sm">
                  Home
                </Link>
              </li>
              <li>
                <a href="/about" className="text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm">
                  Contact
                </a>
              </li>
            </ul>

            <ul className="text-center">
              <h6 className="my-1 text-white">CMS</h6>
              <li>
                <Link href="/work" className="text-sm">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/work/restviz" className="text-sm">
                  Work Single
                </Link>
              </li>
            </ul>

            <ul className="text-center">
              <h6 className="my-1  text-white">Utility</h6>
              <li>
                <Link href="/404" className="text-sm">
                  404
                </Link>
              </li>
            </ul>
          </div>
          <p className="text-center mt-6 text-white w-full text-xs">
            &copy; Developed by Alpheus
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
