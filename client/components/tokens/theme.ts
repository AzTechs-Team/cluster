import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

const Button = defineStyleConfig({
    baseStyle: {
        rounded: "full",
        fontSize: "sm",
        fontFamily: "var(--font-space_grotesk)",
        fontWeight: 400,
        paddingInline: 6
    },
    variants: {
        primary: {
            bgGradient: "linear(to-r, primary , primaryDark 50%, white 50%)",
            border: "2px",
            borderColor: "primaryDark",
            color: "primary",
            _hover: {
                color: "white",
            },
        },
        secondary: {
            color: "darkGray !important",
            bgGradient: "linear(to-r, primaryLight 50%, white 50%)",
            _hover: {
                color: "primary !important",
            },
        },
    },
});

const Input = defineStyleConfig({
    baseStyle: {
        _focusVisible: {
            outline: "none",
        },
        _active: {
            borderColor: "primary",
        },
    },
});

const Heading = defineStyleConfig({
    baseStyle: {
        cursor: "default",
        fontFamily: "var(--font-space_grotesk)",
    },
});

const Badge = defineStyleConfig({
    variants: {
      primary:{
      backgroundColor: "primaryLight",
      color: "primary",
      borderRadius:"lg"
    }}
  });

const theme = extendTheme({
    colors: {
        primaryDark: "#D5C8F9",
        primary: "#9186BF",
        primaryLight: "#F7F9FC",
        background: "#FFFFFF",
        secondaryDark: "",
        secondary: "#030122",
        secondaryLight: "",
    },
    fonts: {
        heading: "var(--font-space_grotesk)",
        body: "var(--font-inter)",
    },
    textStyles: {
        subHeading: {
            fontFamily: "var(--font-space_grotesk)",
            fontSize: "lg",
            cursor: "default !important",
        },
        body: {
            fontFamily: "var(--font-inter)",
            fontSize: "md",
            cursor: "default !important",
        },
    },
    fontSizes: {
        sm: "1rem",
        md: "1.2rem",
        lg: "1.4rem",
        xl: "3rem",
        "4xl": "3.6rem",
    },
    components: {
        Button: Button,
        Input: Input,
        Heading: Heading,
    Badge:Badge,

    },
});

export default theme;
