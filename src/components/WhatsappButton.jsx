import { motion } from "motion/react";
import whatsapp from "../assets/whatsapp.png"


const WhatsappButton = () => {

  const phone = "919911228912"; // your number

  const handleClick = () => {
    const text = "Hello Furonex, I want to know more about your services 🚀";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <motion.div
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="
        fixed bottom-6 left-6 z-50
        cursor-pointer
        flex items-center justify-center
      "
    >
      <img className="w-15"
      src={whatsapp} alt="whatsappIcon" />
    </motion.div>
  );
};

export default WhatsappButton;