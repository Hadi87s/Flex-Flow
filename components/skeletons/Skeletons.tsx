import { motion } from "framer-motion";
import Image from 'next/image'

const SkeletonOne = () => {

    return (
    <motion.div
        initial="initial"
        whileHover="animate"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >

        <motion.div whileHover={{translateY: 2}} className="relative -z-10">
        <span className="absolute inset-0 h-full w-full bg-gradient-to-t from-black via-black/70 to-black/10"></span>
            <Image className="rounded-2xl" src="/Chest.jpg" alt="sdg" width={300} height={100} layout="responsive"></Image>
        </motion.div>
    </motion.div>
    );
};

const SkeletonTwo = () => {

    return (
    <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
        <motion.div whileHover={{translateY: 2}} className="relative -z-10">
        <span className="absolute inset-0 h-full w-full bg-gradient-to-t from-black via-black/70 to-black/10"></span>
            <Image className="rounded-2xl" src="/Back.jpg" alt="sdg" width={300} height={100} layout="responsive"></Image>
        </motion.div>
    </motion.div>
    );
};

const SkeletonThree = () => {
    return (
        <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
        <motion.div whileHover={{translateY: 2}} className="relative -z-10">
        <span className="absolute inset-0 h-full w-full bg-gradient-to-t from-black via-black/70 to-black/10"></span>
            <Image className="rounded-2xl" src="/Legs.jpg" alt="sdg" width={300} height={100} layout="responsive"></Image>
        </motion.div>
    </motion.div>
    );
};

const SkeletonFour = () => {
    return (
    <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
        <motion.div whileHover={{translateY: 2}} className="relative w-full h-[290px] -z-10">
            {/* Gradient Overlay */}
            <span className="absolute inset-0 h-full w-full bg-gradient-to-t from-black via-black/70 to-black/10 z-10"></span>
            
            {/* Image */}
            <Image className="object-cover rounded-2xl" src="/Arms.jpg" alt="sdg" fill />
        </motion.div>
    </motion.div>
    );
};

const SkeletonFive = () => {
    return (
    <motion.div
        initial="initial"
        whileHover="animate"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
        <motion.div whileHover={{translateY: 2}} className="relative -z-10">
            <span className="absolute inset-0 h-full w-full bg-gradient-to-t from-black via-black/70 to-black/10"></span>
            <Image className="rounded-2xl" src="/Shoulders.jpg" alt="sdg" width={300} height={100} layout="responsive"></Image>
        </motion.div>
    </motion.div>
    );
};

export {
    SkeletonOne,
    SkeletonTwo,
    SkeletonThree,
    SkeletonFour,
    SkeletonFive
}