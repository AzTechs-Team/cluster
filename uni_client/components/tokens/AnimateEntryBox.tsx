import React, { FC, ReactNode } from 'react'
import { Box } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';

type Props = { children: ReactNode };

const AnimateEntryBox: FC<Props> = ({ children }) => {
    const { ref: boxRef, inView: isVisible } = useInView({ triggerOnce: true });
    return (
        <Box ref={boxRef} className={isVisible ? "slideBox" : "hide"}>
            {children}
        </Box>
    )
}

export default AnimateEntryBox