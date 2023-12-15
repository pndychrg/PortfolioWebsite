'use client'
import { motion } from 'framer-motion'

const divVariants = {
    hover: {
        scale: 1.1,
        boxShadow: "5px 5px 10px 5px rgba(0, 0, 0, 0.5)",
        transition: {
            duration: 0.5,
            ease: 'easeInOut'
        }
    }
}

const AnimatedHeroImage = () => {
    return (
        <motion.div
            variants={divVariants}
            whileHover="hover"
            className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] "
            style={{ backgroundImage: 'url("/img/profile.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: "0px 0px 5px 5px rgba(0, 0, 0, 0.4)" }}
        >
        </motion.div>
    )
}

export default AnimatedHeroImage