import Link from "next/link";
import Image from "next/image"; 
import React from "react";
import imageLogo from "./Group 3logo-white.jpeg"


const navbar = () => {
  return (
    <div>
      <div className="flex space-x-12 px-16 h-18 items-center mt-6">
        <Link href="#">
            <Image className="h-13 w-13 p-12" src={imageLogo} alt="Logo"/>
        </Link>
        <ul className="flex space-x-12">
          <li>
            <p>
              <Link href="#">Dashboard</Link>
            </p>
          </li>
          <li>
            <Link href="#">Issues</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
