import { useState, useContext, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./userProfile.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "../../config/axios";

const UserProfile = () => {
	const { authenticated, user } = useContext(AuthContext);
	const [showModal, setShowModal] = useState(false);

	console.log(user._id)

	const [userData, setUserData] = useState({
		username: "",
		email: "",
		password: ""
	});

	const userRole = (() => {
		if (user.isAdmin) {
			return "Admin";
		} else if (user.isOwner) {
			return "Owner";
		} else {
			return "Cliente";
		}
	})();

	const fetchUserData = async () => {
		try {
			const token = localStorage.getItem("access_token"); // Obtén el token almacenado en el LocalStorage
			if (!token) {
				console.error("No hay token de acceso");
				return;
			}

			const headers = {
				"access_token": token
			};

			const response = await axios.get(`/api/users/${user._id}`, { headers });

			if (response.status === 200) {
				setUserData(response.data);
				console.log("Datos de usuario obtenidos exitosamente:", response.data);
			} else {
				console.error("Error al obtener los datos del usuario:", response.statusText);
			}
		} catch (error) {
			console.error("Error al obtener los datos del usuario:", error);
		}
	};


	useEffect(() => {
		if (authenticated) {
			fetchUserData();
		}
	}, [authenticated, user._id]);

	const handleModal = () => {
		setShowModal(!showModal);
	};

	const handleEditSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`/api/users/${user.id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(userData)
			});
			if (response.ok) {
				console.log("Usuario editado exitosamente");
				fetchUserData();
				handleModal();
			} else {
				console.error("Error al editar usuario");
			}
		} catch (error) {
			console.error("Error al editar usuario:", error);
		}
	};

	return (
		<div className="containerProfile">
			<div className="cardProfile">
				<div className="linesProfle"></div>
				<div className="imgBx">
					<img src="Garen_14.jpg" alt="" />
				</div>
				<div className="profileContent">
					<div className="detailsProfile">
						<h2>
							{authenticated && user.username}<br />
							<span>{userRole}</span>
						</h2>
						<div className="profileData">
							<h3>
								777 <br />
								<span>Reservas</span>
							</h3>
							<h3>
								120k <br />
								<span>Compras</span>
							</h3>
						</div>
						<div className="actionBtnProfile">
							<button onClick={handleModal}>Editar Datos</button>
						</div>
					</div>
				</div>
			</div>

			<Modal show={showModal} onHide={handleModal}>
				<Modal.Header closeButton>
					<Modal.Title>Editar Datos</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleEditSubmit}>
						<Form.Group controlId="username">
							<Form.Label>Nombre de usuario</Form.Label>
							<Form.Control
								type="text"
								defaultValue={userData.username}
								onChange={(e) =>
									setUserData({ ...userData, username: e.target.value })
								}
							/>
						</Form.Group>
						<Form.Group controlId="email">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								defaultValue={userData.email}
								onChange={(e) => setUserData({ ...userData, email: e.target.value })}
							/>
						</Form.Group>
						<Form.Group controlId="password">
							<Form.Label>Contraseña</Form.Label>
							<Form.Control
								type="password"
								defaultValue=""
								onChange={(e) =>
									setUserData({ ...userData, password: e.target.value })
								}
							/>
						</Form.Group>
						<Button type="submit">Guardar Cambios</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default UserProfile;