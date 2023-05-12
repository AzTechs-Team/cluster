import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { ChevronRightIcon, CloseIcon, HamburgerIcon, TriangleDownIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Flex,
    HStack,
    IconButton,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Stack,
    StackDivider,
    Text,
    useDisclosure,
    Icon,
    Grid,
    Collapse,
} from "@chakra-ui/react";

import { NAV_ITEMS1, NAV_ITEMS2, NavItem } from "@/configs/navItems";
import { useRouter } from "next/router";
import { loggedInState, userDetailsState } from "@/provider";
import { useRecoilState } from "recoil";
import { getUserDetails } from "@/helpers/appwrite";

interface MenuToggle {
    onToggle: () => void;
    glassNavEffect: boolean;
}

const Navbar = () => {
    const { isOpen, onToggle, onClose } = useDisclosure();
    const router = useRouter();
    const [scroll, setScroll] = useState(false);
    const [glassNavEffect, setGlassNavEffect] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 100);
        });
    }, []);

    useEffect(() => {
        if (scroll || router.asPath != "/") setGlassNavEffect(true);
        else setGlassNavEffect(false);
    }, [scroll, router.asPath]);

    const logout = () => {
        localStorage.removeItem("user");
        router.replace("/", "/");
    };

    if (router.asPath === "/") return <></>;

    return (
        <Box
            pos={"fixed"}
            w={"full"}
            top={4}
            zIndex={50}
            display={"flex"}
            justifyContent={"center"}
            px={{ base: 4, lg: "auto" }}
        >
            <Flex
                className={glassNavEffect ? "glassEffect" : "removeGlassEffect"}
                py={2}
                px={4}
                borderRadius="full"
                flexDir={"row"}
                justify={"space-between"}
                align={"center"}
                w={{ base: "full", lg: "md" }}
            >
                {/* for smaller screens */}
                <Flex
                    display={{ base: "flex", lg: "none" }}
                    w={"full"}
                    justify={"space-between"}
                    align={"center"}
                >
                    <Link href="/explore">
                        <Flex w={12} h={12} pos={"relative"}>
                            <Image
                                src={"/assets/images/logo.png"}
                                fill
                                alt="Logo"
                                style={{ objectFit: "contain" }}
                            />
                        </Flex>
                    </Link>

                    <IconButton
                        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                        variant={"ghost"}
                        aria-label={"Toggle Navigation"}
                        onClick={onToggle}
                        color={"white"}
                    />
                </Flex>

                {/* for larger screen */}
                <Flex
                    justify={"space-between"}
                    display={{ base: "none", lg: "flex" }}
                    align={"center"}
                    w={"full"}
                >
                    <HStack flex={1} spacing={4}>
                        <Link href="/">
                            <Flex w={12} h={12} pos={"relative"}>
                                <Image
                                    src={"/assets/images/logo.png"}
                                    fill
                                    alt="IDTA Logo"
                                    style={{ objectFit: "contain" }}
                                />
                            </Flex>
                        </Link>
                        <Flex align={"center"} h={12}>
                            <DesktopNav onToggle={onToggle} glassNavEffect={glassNavEffect} />
                        </Flex>
                    </HStack>
                    <Button
                        size="sm"
                        variant="primary"
                        display={{ base: "none", lg: "block" }}
                        h={"2.8rem"}
                        verticalAlign={"center"}
                        px={6}
                        onClick={logout}
                    >
                            Logout
                    </Button>
                </Flex>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav onToggle={onToggle} glassNavEffect={true} />
            </Collapse>
        </Box>
    );
};

const DesktopNav: React.FC<MenuToggle> = (props) => {
    const router = useRouter();
    const path = router.asPath;

    const [userDetails, setUserDetails] = useRecoilState(userDetailsState);
    const navItems = userDetails.userType === "Student" ? NAV_ITEMS1 : NAV_ITEMS2;

    return (
        <HStack spacing={{ base: 0 }} gap={2} bgColor={"white"} borderRadius={"full"} px={4}>
            {navItems.map((navItem) => (
                <Popover trigger={"hover"} placement={"bottom-start"} key={navItem.label}>
                    <PopoverTrigger>
                        <Link href={navItem.href ?? "/"}>
                            <HStack
                                className={
                                    path === navItem.href
                                        ? props.glassNavEffect
                                            ? "activeNav navAnimation"
                                            : "activeNav navAnimation redNavAnimation"
                                        : props.glassNavEffect
                                        ? "navAnimation"
                                        : "navAnimation redNavAnimation"
                                }
                                py={2}
                                px={{ base: 3, xl: 6 }}
                            >
                                <Text>{navItem.label}</Text>
                                {navItem.children && <TriangleDownIcon w={3} />}
                            </HStack>
                        </Link>
                    </PopoverTrigger>

                    {navItem.children && (
                        <PopoverContent w={"full"} border={0} shadow={0}>
                            <Flex
                                w={"full"}
                                flexDir={"column"}
                                bgColor={"lightGray"}
                                p={4}
                                borderRadius={"lg"}
                            >
                                <Grid templateColumns="repeat(2, 1fr)" gap={6} pt={3}>
                                    {navItem.children.map((subItem) => (
                                        <Link key={subItem.label} href="/" onClick={props.onToggle}>
                                            <Box role={"group"}>
                                                <Stack
                                                    direction={"row"}
                                                    align={"center"}
                                                    p={2}
                                                    rounded={"md"}
                                                    _hover={{ color: "primaryDark" }}
                                                >
                                                    <Box>
                                                        <Text
                                                            transition={"all .3s ease"}
                                                            _groupHover={{ color: "primaryDark" }}
                                                            fontWeight={500}
                                                        >
                                                            label
                                                        </Text>
                                                        {/* <Text fontSize={"sm"}>{subLabel}</Text> */}
                                                    </Box>
                                                    <Flex
                                                        transition={"all .3s ease"}
                                                        transform={"translateX(-10px)"}
                                                        opacity={0}
                                                        _groupHover={{
                                                            opacity: "100%",
                                                            transform: "translateX(0)",
                                                        }}
                                                        justify={"flex-end"}
                                                        align={"center"}
                                                        flex={1}
                                                    >
                                                        <Icon
                                                            color={"primaryDark"}
                                                            w={6}
                                                            h={6}
                                                            as={ChevronRightIcon}
                                                        />
                                                    </Flex>
                                                </Stack>
                                            </Box>
                                        </Link>
                                    ))}
                                </Grid>
                            </Flex>
                        </PopoverContent>
                    )}
                </Popover>
            ))}
        </HStack>
    );
};

const MobileNav: React.FC<MenuToggle> = (props) => {
    const router = useRouter();
    const [userDetails, setUserDetails] = useRecoilState(userDetailsState);
    const navItems = userDetails.userType === "Student" ? NAV_ITEMS1 : NAV_ITEMS2;

    const logout = () => {
        localStorage.removeItem("user");
        router.replace("/", "/");
    };

    return (
        <Box
            className={"hideScrollbar"}
            zIndex={50}
            display={{ lg: "none" }}
            top={24}
            pos={"fixed"}
            maxH={"sm"}
            overflow={"auto"}
            px={{ base: 6, md: 12, lg: 24 }}
            w={"full"}
            left={0}
            color={"white"}
        >
            <Stack
                boxShadow={"xl"}
                borderRadius={"lg"}
                p={4}
                divider={<StackDivider color={"gray"} />}
                className={"glassEffect"}
            >
                {navItems.map((navItem, inx) => {
                    const { label, children, href } = navItem;
                    const { isOpen, onToggle, onClose } = useDisclosure();
                    return (
                        <Stack spacing={4} key={inx}>
                            <Flex py={2} justify={"space-between"} align={"center"}>
                                {children ? (
                                    <HStack onClick={onToggle} w={"full"} justify={"space-between"}>
                                        <Text fontWeight={600}>{label}</Text>
                                        <Icon
                                            as={TriangleDownIcon}
                                            transition={"all .25s ease-in-out"}
                                            transform={isOpen ? "rotate(180deg)" : ""}
                                            w={3}
                                            h={3}
                                        />
                                    </HStack>
                                ) : (
                                    <Link href={href ?? "/"} onClick={props.onToggle}>
                                        <Text fontWeight={600}>{label}</Text>
                                    </Link>
                                )}
                            </Flex>

                            <Collapse
                                in={isOpen}
                                animateOpacity
                                style={{ marginTop: "0!important" }}
                            >
                                <Stack align={"start"}>
                                    {children &&
                                        children.map((child) => (
                                            <Link
                                                key={child.label}
                                                href={child.href ?? "/"}
                                                onClick={props.onToggle}
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                </Stack>
                            </Collapse>
                        </Stack>
                    );
                })}
                {/* <Link href={"/"} onClick={props.onToggle}> */}
                    <Text fontWeight={600} py={2} onClick={logout}>
                        Logout
                    </Text>
                {/* </Link> */}
            </Stack>
        </Box>
    );
};

export default Navbar;
