import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function DrawerNav() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <GiHamburgerMenu
        className="w-[30px] h-[30px] md:hidden"
        onClick={() => setShowSidebar(true)}
      />

      <div
        className={`bottom-0 w-screen flex flex-col items-center justify-end  text-white fixed h-full z-40  ease-in-out duration-500 ${
          showSidebar ? "translate-y-0 " : "translate-y-full"
        }`}
        onClick={() => setShowSidebar(false)}
      >
        <div className="bg-white flex flex-col items-center justify-evenly border-t-2 border-x-2 rounded-t-xl h-[60%] w-[100%]">
          <a href="/photo" className="text-xl text-black">
            Photos
          </a>
          <a href="/clips" className="text-xl text-black">
            Clips
          </a>
          <a href="/cover" className="text-xl text-black">
            Cover
          </a>
          <a href="/films" className="text-xl text-black">
            Films
          </a>
        </div>
      </div>
      {/* </div> */}

      {/* 
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent className="bg-white flex flex-col justify-center h-[60vh] rounded-t-xl"> */}
      {/* <DrawerCloseButton /> */}

      {/* <DrawerBody className="flex flex-col justify-evenly items-center">
            <Link href="/photo">
              <p className="text-xl">Photos</p>
            </Link>
            <Link href="/photo">
              <p className="text-xl">Clips</p>
            </Link>
            <Link href="/photo">
              <p className="text-xl">Cover</p>
            </Link>
            <Link href="/photo">
              <p className="text-xl">Films</p>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer> */}
    </>
  );
}

export default DrawerNav;
