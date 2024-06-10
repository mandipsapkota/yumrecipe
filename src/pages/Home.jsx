import { motion } from "framer-motion"
import Category from "../components/Category"
import Healthypick from "../components/Healthypick"
import Popular from "../components/Popular"

const Home = () => {
  return (
    <motion.div>
        <Healthypick/>
        <Popular/>
    </motion.div>
  )
}

export default Home