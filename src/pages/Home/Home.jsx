import "./home.css";

const Home = () => {
	return (
		<>
			{/* Hero Section */}
			<div className="heroContainer mt-1 mb-1">
				<div className="flex flex-col sm:flex-row justify-content-around items-center p-5 gap-3">
					<p className="headerText text-lime-500 text-5xl md:text-6xl lg:text-7xl">
						RESERVA <br /> <span className="font-bold">TU CANCHA</span>
					</p>
					<button className="bg-lime-500 hover:bg-white h-10 rounded-md px-5 py-4 text-sm hover:text-lime-500 font-bold w-60 transition text-gray-50 heroButton">
						<span className="flex items-center justify-center h-full">
							RESERVA HOY!
						</span>
					</button>
				</div>
			</div>

			{/* SearchSection */}
			<div className="searchContainer mt-1 mb-1 p-2">
				<div className="searchBar rounded-3xl lg:rounded-full shadow-buscador bg-misc-white max-w-xl lg:max-w-5xl mx-auto">
					<div className="py-3 pl-7 pr-3 flex flex-col lg:flex-row lg:justify-between">
						<div className="hidden lg:block">
							<div className="inputStyled position-relative">
								<svg width="26" height="25" viewBox="0 0 30 29" fill="none"><path d="M14.81 15.708a3.625 3.625 0 100-7.25 3.625 3.625 0 000 7.25z" stroke="#00B04B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.81 2.417a9.667 9.667 0 00-9.666 9.666c0 2.287.485 3.782 1.812 5.438l7.854 9.062 7.854-9.062c1.327-1.656 1.813-3.152 1.813-5.438a9.667 9.667 0 00-9.667-9.666v0z" stroke="#00B04B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
								<input type="text" className="inputSearchBar"/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>

			</div>
		</>
	);
};

export default Home;
