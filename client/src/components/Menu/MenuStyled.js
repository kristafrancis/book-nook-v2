import * as React from "react";
import Auth from "../../utils/auth";

const MenuStyled = ({ open }) => {
	const logout = (event) => {
		event.preventDefault();
		Auth.logout();
	};

  return (
	<div>
		{open ? (
			<div className="z-50 transition ease-out duration-75 absolute mt-6 w-48 -ml-36 md:-ml-20 shadow-lg">
        <link href="/dist/output.css" rel="stylesheet"></link>
				<div
					className="py-6 rounded-lg bg-slate-900 shadow-sm"
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="options-menu"
				>
					<div className="rounded-lg pb-3 pt-3">
						{/* {Auth.loggedIn() ? (
							<> */}
								<a
									href="/search"
									className="block px-4 py-2 text-lg leading-5 font-semibold hover:bg-[#22274f] hover:pl-8"
									role="menuitem"
								>
									Search
								</a>

								<a
									href="/profile"
									className="block px-4 py-2 text-lg leading-5 font-semibold hover:bg-[#22274f] hover:pl-8"
									role="menuitem"
								>
									Profile
								</a>

								<a
									href="/"
									className="block px-4 py-2 text-lg leading-5 font-semibold hover:bg-[#22274f] hover:pl-8"
									role="menuitem"
									onClick={logout}
								>
									Sign Out
								</a>
							{/* </>
						) : (
							<> */}
								<a href="/signup"
                  className="block px-4 py-2 text-lg leading-5 font-semibold hover:bg-[#22274f] hover:pl-8"
                  role="menuitem"
                >
									Sign Up
								</a>
								<a href="/login"
                  className="block px-4 py-2 text-lg leading-5 font-semibold hover:bg-[#22274f] hover:pl-8"
                  role="menuitem"
                >
									Log In
								</a>
							{/* </>
						)} */}
					</div>
				</div>
			</div>
		) : (
			<div className=""></div>
		)}
	</div>
  );
};

export default MenuStyled;
