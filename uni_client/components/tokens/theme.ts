import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

const Button = defineStyleConfig({
    baseStyle: {
        rounded: "full",
        fontSize: "sm",
        fontWeight: 400,
        paddingInline: 6,
        fontFamily: "var(--font-space_grotesk)"
    },
    variants: {
        primary: {
            bgGradient: "linear(to-r, primary , primaryDark 50%, white 50%)",
            border: "2px",
            borderColor: "primaryDark",
            color: "primaryDark",
            _hover: {
                color: "white",
            },
        },
        secondary: {
            color: "darkGray !important",
            bgGradient: "linear(to-r, #FFF4F5 50%, white 50%)",
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
        primaryDark: "#661126",
        primary: "#D64D5E",
        primaryLight: "#FFF4F5",
        background: "#F8F6FA",
        secondaryDark: "",
        secondary: "#000",
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
