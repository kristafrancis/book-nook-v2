import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Sparkle from "react-sparkle";
import Navbar from '../Navbar';
import RandomAnimal from "../../hooks/RandomAnimal";

const Dashboard = ({ children }) => {
const [animFinished, setAnimFinished] = useState(false);

const style1 = useSpring( {
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
});

// const navStyle = useSpring(animFinished, null, {
//     from: { opacity: 0, transform: animFinished ? "translateY(0)" : "translateY(200px)" },
//     to: { opacity: 1 },
//     config: { duration: 2000 },
//     onRest: () => setAnimFinished(true)
// });
  
  return (
    <>
      <Navbar animFinished={animFinished} setAnimFinished={setAnimFinished} />

      <main>
        {/* GENERATE ANIMAL HEADER */}
        <animated.div style={style1}>
          <div className="mt-0 mb-8 flex flex-col justify-center items-center">
            <RandomAnimal />
            <Sparkle
              // color={'#f9d18f'}
              count={10}
              minSize={5}
              maxSize={15}
              fadeOutSpeed={20}
              flickerSpeed={"slowest"}
            />
          </div>
        </animated.div>

        {children}
      </main>

      <footer class="py-8 text-center">
        <p class="md:text-base text-sm tracking-wider font-medium text-gray-400">
        &copy; {new Date().getFullYear()} <a href="https://github.com/kristafrancis/book-nook-v2" target="_blank">The Spice Girls</a>, LLC.
        </p>
      </footer>
    </>
  );
};

export default Dashboard;
