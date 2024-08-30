import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import Sassly from "./icons/Sassly";
import { Activity, Lock, Scale, Server } from "lucide-react";
import { BiChevronDown } from "react-icons/bi";
import ShimmerButton from "./magicui/shimmer-button";

export default function NavbarComponent() {
  const icons = {
    chevron: <BiChevronDown fill="currentColor" size={20} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
  };

  const navItems = [
    { key: "home", content: "Home", href: "#", isActive: true },
    { key: "about", content: "About", href: "#" },
    { key: "pricing", content: "Pricing", href: "#" },
    { key: "blog", content: "Blog", href: "#" },
    { key: "jobs", content: "Jobs", href: "#" },
    {
      key: "pages",
      content: "Pages",
      type: "dropdown",
      items: [
        {
          key: "autoscaling",
          label: "Autoscaling",
          description:
            "ACME scales apps to meet user demand, automagically, based on load.",
          icon: icons.scale,
        },
        {
          key: "usage_metrics",
          label: "Usage Metrics",
          description:
            "Real-time metrics to debug issues. Slow query added? We’ll show you exactly where.",
          icon: icons.activity,
        },
      ],
    },
  ];

  return (
    <Navbar className="flex items-center justify-between text-white">
      <NavbarBrand>
        <Sassly width="94" height="32" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-x-10" justify="center">
        {navItems.map((item) =>
          item.type !== "dropdown" ? (
            <NavbarItem key={item.key} isActive={item.isActive}>
              <Link
                href={item.href}
                aria-current={item.isActive ? "page" : undefined}
              >
                {item.content}
              </Link>
            </NavbarItem>
          ) : (
            <Dropdown key={item.key}>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="flex p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={icons.chevron}
                    radius="sm"
                    variant="light"
                  >
                    {item.content}
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="ACME features"
                className="w-[340px]"
                itemClasses={{ base: "gap-4" }}
              >
                {item.items.map((dropdownItem) => (
                  <DropdownItem
                    key={dropdownItem.key}
                    description={dropdownItem.description}
                    startContent={dropdownItem.icon}
                  >
                    {dropdownItem.label}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          )
        )}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Sign in</Link>
          </NavbarItem>
          <NavbarItem>
            <ShimmerButton
              className="shadow-2xl"
              background="blue"
              borderRadius="10px"
            >
              <span className="whitespace-pre-wrap text-center font-medium text-lg leading-none tracking-tight">
                Sign Up
              </span>
            </ShimmerButton>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
    </Navbar>
  );
}
