import React from "react";
import { useSpring, animated } from "react-spring";
import Sparkle from "react-sparkle";
import Burger from "../Burger/Burger";
import RandomAnimal from "../../hooks/RandomAnimal";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Header = (props) => {
	const { animFinished, setAnimFinished } = props;

	const style1 = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: { duration: 1000 },
	});

	const logout = (event) => {
		event.preventDefault();
		Auth.logout();
	};

	return (
		<header>
			<nav>
				<animated.div style={props}>
					<div className="mx-8 my-6 flex justify-between items-center">
						<div>
							<h1 className="drop-shadow-lg text-5xl md:text-7xl">
								<Link to="/search" className="hover:text-[#7286ff]">
									book<span className="text-[#7286ff]">nook</span>
								</Link>
							</h1>
						</div>

						<div>
							{/* NAVBAR AT 768PX & HIGHER */}
							<div className="uppercase tracking-widest">
								<div className="hidden md:flex bg-[#02030ac8] px-7 py-2 rounded-md font-semibold">
									{/* AUTH NOT REQUIRED */}
									<a href="/signup" className="mr-6">
										Sign Up
									</a>
									<a href="/login" className="mx-6">
										Log In
									</a>
									{/* END AUTH NOT REQUIRED */}
									{/* AUTH REQUIRED */}
									<a href="/search" className="mx-6">
										Search
									</a>
									<a className="mx-6" href="/profile">
										Profile
									</a>
									<button
										onClick={logout}
										className="bg-transparent hover:bg-transparent ml-6 text-[#6bfbce] hover:text-[#7286ff]"
									>
										Logout
									</button>
									{/* END AUTH REQUIRED */}
								</div>
							</div>

							{/* HAMBURGER MENU AT 768PX & LOWER */}
							<div className="md:hidden">
								<Burger />
							</div>
						</div>
					</div>
				</animated.div>
			</nav>

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
		</header>
	);
};

export default Header;
