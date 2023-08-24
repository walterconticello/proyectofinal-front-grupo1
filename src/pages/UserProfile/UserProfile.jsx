import { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./userProfile.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "../../config/axios";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";

const UserProfile = () => {
	const { authenticated, user, logout } = useContext(AuthContext);
	const [showModal, setShowModal] = useState(false);

	const userRole = user.isAdmin ? "Admin" : user.isOwner ? "Owner" : "Cliente";

	const handleModal = () => {
		setShowModal(!showModal);
	};

	const handleEditSubmit = async (values) => {
		try {
			const response = await axios.put(`/api/users/${user._id}`, values);
			if (response.status === 200) {
				handleModal();
				toast.success('Datos editados con exito!', {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			} else {
				toast.error('Error al editar tus datos. Por favor, verifica los mismos y la conexión al servidor.', {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
		} catch (error) {
			toast.error('Error al editar tus datos. Por favor, verifica los mismos y la conexión al servidor.', {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	}

	const validationSchema = Yup.object().shape({
		username: Yup.string()
			.required("El nombre de usuario es obligatorio")
			.min(4, "El nombre de usuario debe tener al menos 4 caracteres")
			.max(20, "El nombre de usuario debe tener como máximo 20 caracteres")
			.matches(/^[a-zA-Z0-9]+$/, "El nombre de usuario solo puede contener letras y números"),
		email: Yup.string()
			.email("Correo electrónico inválido")
			.required("El correo electrónico es obligatorio")
			.min(4, "El correo electrónico debe tener al menos 4 caracteres")
			.max(36, "El correo electrónico debe tener como máximo 24 caracteres"),
		password: Yup.string()
			.required("La contraseña es obligatoria")
			.min(6, "La contraseña debe tener al menos 6 caracteres")
			.max(16, "La contraseña debe tener como máximo 16 caracteres")
			.matches(
				/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/,
				"La contraseña solo puede contener letras, números y caracteres especiales"
			),
	});

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

			<Modal show={showModal} onHide={handleModal} className="justify-content-center align-items-center">
				<Modal.Header closeButton>
					<Modal.Title>Editar Datos</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Formik
						initialValues={{
							username: user.username,
							email: user.email,
							password: "",
							isUsernameEditable: false,
							isEmailEditable: false,
							isPasswordEditable: false,
						}}
						validationSchema={validationSchema}
						onSubmit={handleEditSubmit}
					>
						{({ values, errors, touched, isValid, isSubmitting, handleSubmit, setFieldValue }) => (
							<Form onSubmit={handleSubmit} className="gap-3">
								<Form.Group controlId="username">
									<Form.Label>Nombre de usuario</Form.Label>
									<div className={`d-flex align-items-center justify-content-around gap-3`}>
										<Field
											type="text"
											name="username"
											className={`form-control ${errors.username && touched.username ? "input-error" : ""}`}
											disabled={!values.isUsernameEditable}
										/>

										{!values.isUsernameEditable && (
											<FontAwesomeIcon
												icon={faPenToSquare}
												size="xl"
												className="editIconProfile"
												onClick={() => setFieldValue("isUsernameEditable", true)}
											/>
										)}
									</div>
									{errors.username && touched.username && (
										<div className="error-message">{errors.username}</div>
									)}
								</Form.Group>
								<Form.Group controlId="email">
									<Form.Label>Email</Form.Label>
									<div className={`d-flex align-items-center justify-content-around gap-3`}>
										<Field
											type="email"
											name="email"
											className={`form-control ${errors.email && touched.email ? "input-error" : ""}`}
											disabled={!values.isEmailEditable}
										/>

										{!values.isEmailEditable && (
											<FontAwesomeIcon
												icon={faPenToSquare}
												size="xl"
												className="editIconProfile"
												onClick={() => setFieldValue("isEmailEditable", true)}
											/>
										)}
									</div>
									{errors.email && touched.email && (
										<div className="error-message">{errors.email}</div>
									)}
								</Form.Group>
								<Form.Group controlId="password">
									<Form.Label>Contraseña</Form.Label>
									<div className={`d-flex align-items-center justify-content-around gap-3`}>
										<Field
											type="password"
											name="password"
											className={`form-control ${errors.password && touched.password ? "input-error" : ""}`}
											disabled={!values.isPasswordEditable}
										/>
										{!values.isPasswordEditable && (
											<FontAwesomeIcon
												icon={faPenToSquare}
												size="xl"
												className="editIconProfile"
												onClick={() => setFieldValue("isPasswordEditable", true)}
											/>
										)}
									</div>
									{errors.password && touched.password && (
										<div className="error-message">{errors.password}</div>
									)}
								</Form.Group>
								<Button type="submit" className="py-2 mt-3" disabled={isSubmitting}>
									{isSubmitting ? "Guardando..." : "Guardar Cambios"}
								</Button>
							</Form>
						)}
					</Formik>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default UserProfile;