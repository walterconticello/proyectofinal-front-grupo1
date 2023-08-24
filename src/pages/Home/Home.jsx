import SearchBar from "../../components/SearchBar/SearchBar";
import "./home.css";
import messiImg from "../../assets/Frame_2.png"
import { Link } from "react-router-dom";

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
				<div className="complexCards container mx-auto p-5">
					<div className="grid gap-4 justify-center md:grid-cols-3">
						<div className="card p-3">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzFBC4q818qo2kVFF6rLvHcjn-HE75CZ42qQ&usqp=CAU"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">Ojo de agua</h5>
								<p className="card-text">
									La mas grande del norte Argentino.
								</p>
								<Link to={"/complejos"} className="btn btn-primary">
									Alquilar!
								</Link>
							</div>
						</div>
						<div className="card p-3">
							<img
								src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/84/2023/08/08/persis-solo-vs-persib-bandung-796388239.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">San Martin de Tucumán</h5>
								<p className="card-text">
									La mas picante del pais.
								</p>
								<Link to={"/complejos"} className="btn btn-primary">
									Alquilar!
								</Link>
							</div>
						</div>
						<div className="card p-3">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF2C8G8M2fKwh_5LaZ4_SzIfZZXplRWG1hfnRagPtYMqoJkfPwf0SiQC89ngm3SJlOVEc&usqp=CAU"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">Central Cordoba</h5>
								<p className="card-text">
									Juega sin limites!.
								</p>
								<Link to={"/complejos"} className="btn btn-primary">
									Alquilar!
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Messi Section */}
			<div className="messiContainer container mx-auto px-4 md:flex justify-around items-center py-10 overflow-x-hidden">
				<div className="w-full md:w-3/4 lg:w-3/4 mb-6 md:mb-0 flex items-center justify-center">
					<img
						src={messiImg}
						alt="Messi"
						className="w-full"
					/>
				</div>

				<div className="flex flex-col justify-center items-center w-full md:w-3/5">
					<p className="headerText text-lime-500 text-5xl md:text-6xl lg:text-7xl text-center md:text-left mb-4 md:mb-6">
						INDUMENTARIA <br /> <span className="font-bold">DEPORTIVA</span>
					</p>
					<button className="bg-lime-500 hover:bg-white h-10 rounded-md px-5 py-4 text-sm hover:text-lime-500 font-bold w-60 transition text-gray-50 heroButton">
						<span className="flex items-center justify-center h-full">
							Ver tienda
						</span>
					</button>
				</div>
			</div>
		</>
	);
};

export default Home;