import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

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
        fixed bottom-6 right-6 z-50
        bg-[#25D366]
        p-4 rounded-full
        shadow-[0_0_25px_rgba(37,211,102,0.6)]
        cursor-pointer
        flex items-center justify-center
      "
    >
      <MessageCircle size={28} className="text-white" />
    </motion.div>
  );
};

export default WhatsappButton;