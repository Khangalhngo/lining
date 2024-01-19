"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import lining from "../public/assets/lining.png";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
// import { Dropdown } from "@nextui-org/react";
import { ThemeSwitch } from "@/components/theme-switch";
import { HeartFilledIcon, SearchIcon } from "@/components/icons";
import Image from "next/image";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent
        className="basis-1/5 sm:basis-full md:basis-full"
        justify="start"
      >
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <div className="your-tailwind-classes">
              <Image src={lining} width={60} height={60} alt="Company Logo" />
            </div>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-center ml-2">
          {siteConfig.navItems.map((item) => {
            if (item.dropdown) {
              return (
                <NavbarItem>
                  <Dropdown backdrop="blur">
                    <DropdownTrigger>
                      <NextLink
                        className={clsx(
                          linkStyles({ color: "foreground" }),
                          "data-[active=true]:text-primary data-[active=true]:font-medium"
                        )}
                        href={""}
                      >
                        {item.label}
                      </NextLink>
                    </DropdownTrigger>
                    <DropdownMenu variant="faded" aria-label="Static Actions">
                      {item.dropdown.map((subItem) => (
                        <DropdownItem key={subItem.label} href={subItem.href}>
                          {subItem.label}
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  </Dropdown>
                </NavbarItem>
              );
            } else {
              return (
                <NavbarItem key={item.href}>
                  <NextLink
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "data-[active=true]:text-primary data-[active=true]:font-medium"
                    )}
                    color="foreground"
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                </NavbarItem>
              );
            }
          })}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.sponsor}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden  basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color={"foreground"} href="#" size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
