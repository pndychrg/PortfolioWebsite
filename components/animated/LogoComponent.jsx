'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const logoVariants = {
    initial: {
        rotate: 0
    },
    visible: {
        rotate: [0, 60, 0, -60, 0],
        scale: [1, 1.1, 1],
        transition: {
            duration: 5,
            ease: 'linear',
            repeat: Infinity
        }
    },
    hover: {
        fontWeight: 'bold',
        scale: 1.1,
        color: 'black',
        transition: {
            duration: 0.3,
            // ease: 'linear',
        }
    }
}




const LogoComponent = ({ logo, text }) => {
    return (
        <motion.div
            variants={logoVariants}
            whileHover="hover"
            className='flex flex-row align-middle justify-center items-center'>
            <motion.div
                variants={logoVariants}
                initial="initial"
                animate="visible"
            >
                <Image src={logo} height={30} width={30} alt="logo" className="m-3" />
            </motion.div>
            {text}
        </motion.div>
    )
}

export default LogoComponent