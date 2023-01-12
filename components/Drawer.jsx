import { useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";

function DrawerNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = useRef();

  return (
    <>
      <GiHamburgerMenu
        className="w-[30px] h-[30px] md:hidden"
        // ref={btnRef}
        onClick={onOpen}
      />

      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent className="bg-white flex flex-col justify-center h-[60vh] rounded-t-xl">
          {/* <DrawerCloseButton /> */}

          <DrawerBody className="flex flex-col justify-evenly items-center">
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
      </Drawer>
    </>
  );
}

export default DrawerNav;
