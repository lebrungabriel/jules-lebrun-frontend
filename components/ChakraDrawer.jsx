import React, { useRef } from "react";
import { useDisclosure } from "@chakra-ui/react";

import {
  Drawer,
  DrawerBody,
  //   DrawerFooter,
  //   DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  //   DrawerCloseButton,
} from "@chakra-ui/react";

import { GiHamburgerMenu } from "react-icons/gi";

const ChakraDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <GiHamburgerMenu
        className="w-[30px] h-[30px] md:hidden"
        onClick={onOpen}
      />
      <Drawer
        placement="bottom"
        onClose={onClose}
        isOpen={isOpen}
        trapFocus={false}
      >
        <DrawerOverlay />
        <DrawerContent height="50% !important">
          <DrawerBody className="flex flex-col items-center justify-evenly">
            <a href="/photo" className="text-xl text-black border-none">
              Photos
            </a>
            <a href="/clips" className="text-xl text-black border-none">
              Clips
            </a>
            <a href="/cover" className="text-xl text-black border-none">
              Cover
            </a>
            <a href="/films" className="text-xl text-black border-none">
              Films
            </a>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ChakraDrawer;
