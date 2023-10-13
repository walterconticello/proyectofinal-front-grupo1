import { useState, useContext } from "react";
import "./login.css";
import { AuthContext } from "../../context/AuthContext";
import logSVG from "../../assets/log.svg";
import logReg from "../../assets/register.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
	const { login, register, authenticated, user } = useContext(AuthContext);
	const [isSignUp, setIsSignUp] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const loginValidationSchema = Yup.object().shape({
		username: Yup.string()
			.required("El nombre de usuario es obligatorio")
			.min(4, "El nombre de usuario debe tener al menos 4 caracteres")
			.max(20, "El nombre de usuario debe tener como máximo 20 caracteres")
			.matches(/^[a-zA-Z0-9]+$/, "El nombre de usuario solo puede contener letras y números"),
		password: Yup.string()
			.required("La contraseña es obligatoria")
			.min(6, "La contraseña debe tener al menos 6 caracteres")
			.max(16, "La contraseña debe tener como máximo 16 caracteres")
			.matches(
				/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/,
				"La contraseña solo puede contener letras, números y caracteres especiales"
			),
	});

	const registerValidationSchema = Yup.object().shape({
		username: Yup.string()
			.required("El nombre de usuario es obligatorio")
			.min(4, "El nombre de usuario debe tener al menos 4 caracteres")
			.max(20, "El nombre de usuario debe tener como máximo 20 caracteres")
			.matches(/^[a-zA-Z0-9]+$/, "El nombre de usuario solo puede contener letras y números"),
		email: Yup.string()
			.email("Correo electrónico inválido")
			.required("El correo electrónico es obligatorio")
			.min(4, "El correo electrónico debe tener al menos 4 caracteres")
			.max(24, "El correo electrónico debe tener como máximo 24 caracteres"),
		password: Yup.string()
			.required("La contraseña es obligatoria")
			.min(6, "La contraseña debe tener al menos 6 caracteres")
			.max(16, "La contraseña debe tener como máximo 16 caracteres")
			.matches(
				/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/,
				"La contraseña solo puede contener letras, números y caracteres especiales"
			),
	});


	const handleToggleMode = () => {
		setIsSignUp(!isSignUp);
	};


	const handleLoginSubmit = async (values, { setSubmitting }) => {
		setIsLoading(true);
		try {
			await login(values);
		} catch (error) {
			console.error("Login error:", error);
		} finally {
			setIsLoading(false);
			setSubmitting(false); // Reset the submitting state
		}
	};

	const handleRegisterSubmit = async (values, { setSubmitting }) => {
		setIsLoading(true);
		try {
			await register(values);
		} catch (error) {
			console.error("Register error:", error);
		} finally {
			setIsLoading(false);
			setSubmitting(false);
		}
	};

	return (
		<>
			{authenticated && user && (
				<div className="authenticated-message">
					<h1>Welcome, {user.username}!</h1>
				</div>
			)}
			<div className={`container1 ${isSignUp ? "sign-up-mode" : ""}`}>
				<div className="forms-container">
					<div className="signin-signup">
						<Formik
							initialValues={{ username: "", password: "" }}
							validationSchema={loginValidationSchema}
							onSubmit={handleLoginSubmit}
						>
							{({ isSubmitting, errors, touched, isValid }) => (
								<Form className="sign-in-form">
									<h2 className="title">Ingresar</h2>
									<div
										className={`input-field ${errors.username && touched.username
											? "input-error"
											: ""
											} ${touched.username && isValid ? "input-success" : ""
											}`}
									>
										<i className="fas fa-user"></i>
										<Field
											type="text"
											placeholder="Nombre de Usuario"
											name="username"
											className={`${errors.username && touched.username
												? "input-error"
												: ""
												} ${touched.username && isValid ? "input-success" : ""
												}`}
										/>
									</div>
									{errors.username && touched.username && (
										<div className="error-message">{errors.username}</div>
									)}

									<div
										className={`input-field ${errors.password && touched.password
												? "input-error"
												: ""
											} ${touched.password && isValid ? "input-success" : ""
											}`}
									>
										<i className="fas fa-lock"></i>
										<Field
											type="password"
											placeholder="Contraseña"
											name="password"
											className={`${errors.password && touched.password
													? "input-error"
													: ""
												} ${touched.password && isValid ? "input-success" : ""
												}`}
										/>
									</div>
									{errors.password && touched.password && <div className="error-message">{errors.password}</div>}

									<button
										type="submit"
										className={`btn1 solid ${isLoading || isSubmitting ? "disabled" : ""}`}
										disabled={isLoading || isSubmitting}
									>
										{isLoading || isSubmitting ? "Cargando..." : "Ingresar"}
									</button>
									<p className="social-text">O inicia con redes sociales</p>
									<div className="social-media">
										<a href="#" className="social-icon">
											<i className="fab fa-facebook-f"></i>
										</a>
										<a href="#" className="social-icon">
											<i className="fab fa-twitter"></i>
										</a>
										<a href="#" className="social-icon">
											<i className="fab fa-google"></i>
										</a>
										<a href="#" className="social-icon">
											<i className="fab fa-linkedin-in"></i>
										</a>
									</div>
								</Form>
							)}
						</Formik>

						<Formik
							initialValues={{ username: "", email: "", password: "" }}
							validationSchema={registerValidationSchema}
							onSubmit={handleRegisterSubmit}
						>
							{({ isSubmitting, errors, touched }) => (
								<Form className="sign-up-form">
									<h2 className="title">Registrarse</h2>
									<div className={`input-field ${errors.username && touched.username ? 'input-error' : ''}`}>
										<i className="fas fa-user"></i>
										<Field
											type="text"
											placeholder="Nombre de Usuario"
											name="username"
											className={errors.username && touched.username ? 'input-error' : ''}
										/>
									</div>
									{errors.username && touched.username && <div className="error-message">{errors.username}</div>}

									<div className={`input-field ${errors.email && touched.email ? 'input-error' : ''}`}>
										<i className="fas fa-envelope"></i>
										<Field
											type="email"
											placeholder="Email"
											name="email"
											className={errors.email && touched.email ? 'input-error' : ''}
										/>
									</div>
									{errors.email && touched.email && <div className="error-message">{errors.email}</div>}

									<div className={`input-field ${errors.password && touched.password ? 'input-error' : ''}`}>
										<i className="fas fa-lock"></i>
										<Field
											type="password"
											placeholder="Contraseña"
											name="password"
											className={errors.password && touched.password ? 'input-error' : ''}
										/>
									</div>
									{errors.password && touched.password && <div className="error-message">{errors.password}</div>}

									<button
										type="submit"
										className={`btn1 solid ${isLoading || isSubmitting ? "disabled" : ""}`}
										disabled={isLoading || isSubmitting}
									>
										{isLoading || isSubmitting ? "Cargando..." : "Registrarme"}
									</button>
									<p className="social-text">O registrate con redes sociales</p>
									<div className="social-media">
										<a href="#" className="social-icon">
											<i className="fab fa-facebook-f"></i>
										</a>
										<a href="#" className="social-icon">
											<i className="fab fa-twitter"></i>
										</a>
										<a href="#" className="social-icon">
											<i className="fab fa-google"></i>
										</a>
										<a href="#" className="social-icon">
											<i className="fab fa-linkedin-in"></i>
										</a>
									</div>
								</Form>
							)}
						</Formik>
					</div>
				</div>

				<div className="panels-container">
					<div className="panel left-panel">
						<div className="content">
							<h3>¿Nuevo aquí?</h3>
							<p>
								Bienvenido al formulario de registro. ¡Únete a nuestra comunidad hoy mismo y comienza a disfrutar de todos los beneficios!
							</p>
							<button className="btn1 transparent" id="sign-up-btn" onClick={handleToggleMode}>
								Registrarse
							</button>
						</div>
						<img src={logSVG} className="image" alt="" />
					</div>
					<div className="panel right-panel">
						<div className="content">
							<h3>¿Uno de nosotros?</h3>
							<p>
								Bienvenido de vuelta. Inicie sesión en su cuenta para acceder a todas las funciones y contenido exclusivo que ofrecemos.
							</p>
							<button className="btn1 transparent" id="sign-in-btn" onClick={handleToggleMode}>
								Iniciar sesión
							</button>
						</div>
						<img src={logReg} className="image" alt="" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Login