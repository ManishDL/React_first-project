import React from "react";
import { 
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    DrawerHeader,
    useDisclosure,
    Button, 
    VStack,
    HStack} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BiMenuAltLeft} from "react-icons/bi"

const Header=()=>{
    const{isOpen,onClose,onOpen}=useDisclosure();
    return(
    <>
        <Button colorScheme="purple" 
        margin={"0"} 
        px={"4"} py={"4"}
         pos={"fixed"}
         top={"4"}
         left={"4"}
         padding={"0"}
         onClick={onOpen}
         zIndex={'overlay'}>

         <BiMenuAltLeft size={"18"}/>
        </Button>
        <Drawer isOpen={isOpen}placement="left" onClose={onClose}>
            <DrawerOverlay/>
            <DrawerContent>
                <DrawerCloseButton/>
                <DrawerHeader>
                    Menu Bar
                </DrawerHeader>
                <DrawerBody>
                    <VStack>
                        <Button variant="ghost" colorScheme="purple" onClick={onClose} >
                            <Link to={"/"}>Home</Link>
                        </Button>
                        <Button variant="ghost" colorScheme="purple" onClick={onClose} >
                            <Link to={"/videos"}>videos</Link>
                        </Button>
                        <Button variant="ghost" colorScheme="purple" onClick={onClose}>
                            <Link to={"/videos?category/free"}>free videos</Link>
                        </Button>
                        <Button variant="ghost" colorScheme="purple" onClick={onClose}>
                            <Link to={"/upload"}>Upload</Link>
                        </Button>
                    </VStack>
                    <HStack width={"full"} justifyContent={"space-evenly"} pos={"absolute"} bottom={"10"} left={"0"}>
                        <Button colorScheme="purple" variant={"outline"} onClick={onClose}>
                            <Link to={"/login"}>Log In</Link>
                        </Button>
                        <Button colorScheme="purple" variant={"outline"} onClick={onClose}>
                            <Link to={"/signup"}>Sign Up</Link>
                        </Button>
                    </HStack>
                </DrawerBody>
                
            </DrawerContent>
        </Drawer>
    </>
    )
}
export default Header;