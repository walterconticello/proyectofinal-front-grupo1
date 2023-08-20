import SearchBar from "../../components/SearchBar/SearchBar";
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
				<SearchBar />
			</div>
			<div>

			</div>
		</>
	);
};

export default Home;
