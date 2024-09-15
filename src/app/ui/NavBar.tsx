import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import React from 'react'
import Image from "next/image";
import logo from "../../public/image/cofeeshoplogo.png"
import { Link } from "@nextui-org/react";
function NavBar() {
    return (
        <Navbar shouldHideOnScroll>
            <NavbarBrand>
                <Image src={logo} width={180}
                    height={180} />
            </NavbarBrand>
            <NavbarItem>
                <Link color="foreground" href="#">
                    Features
                </Link>
            </NavbarItem>
        </Navbar>
    )
}

export default NavBar;