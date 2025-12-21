import { motion } from "motion/react";
import team1 from "../../../assets/teams/team1.jpg";
import team2 from "../../../assets/teams/team2.jpg";

const Banner = () => {
  return (
    <div className="hero  min-h-[700px]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* image box */}
        <div className="flex-1">
          <motion.img 
          animate={{y:[0, 50, 0]}}
          transition={{duration: 5, repeat:Infinity}}
          src={team1} className="max-w-sm border-primary border-s-8 border-b-8 rounded-t-4xl rounded-br-4xl shadow-2xl" />
          <motion.img 
          animate={{x:[100, 150, 100]}}
          transition={{duration: 10, delay:5,  repeat:Infinity}}
          src={team2} className="max-w-sm border-primary border-s-8 border-b-8 rounded-t-4xl rounded-br-4xl shadow-2xl" />
        </div>

        {/* Content box */}
        <div className="flex-1">
          <motion.h1
            animate={{
              transition: { duration: 2 },
            }}
            className="text-5xl font-bold"
          >
            The{" "}
            <motion.span
              animate={{
                color: ["#27F5F2", "#2B50D6", "#D65B2B", "#342BD6"],
                transition: { duration: 4, repeat: Infinity },
              }}
              className="text-primary"
            >
              Easiest Way
            </motion.span>{" "}
            <br />
            to Get Your New Job !
          </motion.h1>
          <motion.p
            initial={{ scale: 1, transition: { duration: 2 } }}
            className="py-6"
          >
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day.
          </motion.p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
