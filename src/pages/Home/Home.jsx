import "./home.css";

const Home = () => {
	return (
		<>
			<div className="container-fluid heroContainer">
				<div className="d-flex justify-content-around align-items-center p-5 row mt-3">
					<div className="col-lg-8 mb-3">
						<p className="headerText text-lime-500 text-5xl md:text-6xl lg:text-7xl md:text-center">
							RESERVA <br /> <span className="font-bold">TU CANCHA</span>
						</p>
					</div>
					<div className="col-lg-4 d-flex align-items-center justify-content-center">
						<button className="bg-lime-500 h-10 rounded-md px-5 py-4 text-sm text-white hover:text-white hover:bg-lime-500 font-bold w-60">
							<span className="flex items-center justify-center h-full">
								RESERVA HOY!
							</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
