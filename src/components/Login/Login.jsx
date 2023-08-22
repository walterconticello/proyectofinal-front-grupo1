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
			.required("Username is required")
			.min(4, "Username must be at least 4 characters")
			.max(20, "Username must be at most 20 characters")
			.matches(/^[a-zA-Z0-9]+$/, "Username can only contain letters and numbers"),
		password: Yup.string()
			.required("Password is required")
			.min(6, "Password must be at least 6 characters")
			.max(16, "Password must be at most 16 characters")
			.matches(
				/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/,
				"Password can only contain letters, numbers, and special characters"
			),
	});

	const registerValidationSchema = Yup.object().shape({
		username: Yup.string()
			.required("Username is required")
			.min(4, "Username must be at least 4 characters")
			.max(20, "Username must be at most 20 characters")
			.matches(/^[a-zA-Z0-9]+$/, "Username can only contain letters and numbers"),
		email: Yup.string()
			.email("Invalid email")
			.required("Email is required")
			.min(4, "Email must be at least 4 characters")
			.max(24, "Email must be at most 24 characters"),
		password: Yup.string()
			.required("Password is required")
			.min(6, "Password must be at least 6 characters")
			.max(16, "Password must be at most 16 characters")
			.matches(
				/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/,
				"Password can only contain letters, numbers, and special characters"
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
			setSubmitting(false); // Reset the submitting state
		}
	};

	return (
		<>
			{console.log("User:", user)}
			{authenticated && user && (
				<div className="authenticated-message">
					<h1>Welcome, {user.username}!</h1>
					{/* You can add more information or actions for authenticated users */}
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
							{({ isSubmitting  }) => (
								<Form className="sign-in-form">
									<h2 className="title">Sign in</h2>
									<div className="input-field">
										<i className="fas fa-user"></i>
										<Field
											type="text"
											placeholder="Username"
											name="username"
										/>
										<ErrorMessage name="username" component="div" className="error-message" />
									</div>
									<div className="input-field">
										<i className="fas fa-lock"></i>
										<Field
											type="password"
											placeholder="Password"
											name="password"
										/>
										<ErrorMessage name="password" component="div" className="error-message" />
									</div>
									<button
										type="submit"
										className={`btn1 solid ${isLoading || isSubmitting ? "disabled" : ""}`}
										disabled={isLoading || isSubmitting}
									>
										{isLoading || isSubmitting ? "Loading..." : "Login"}
									</button>
									<p className="social-text">Or Sign in with social platforms</p>
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
							{({ isSubmitting  }) => (
								<Form className="sign-up-form">
									<h2 className="title">Sign up</h2>
									<div className="input-field">
										<i className="fas fa-user"></i>
										<Field type="text" placeholder="Username" name="username" />
										<ErrorMessage name="username" component="div" className="error-message" />
									</div>
									<div className="input-field">
										<i className="fas fa-envelope"></i>
										<Field
											type="email"
											placeholder="Email"
											name="email"
										/>
										<ErrorMessage name="email" component="div" className="error-message" />
									</div>
									<div className="input-field">
										<i className="fas fa-lock"></i>
										<Field
											type="password"
											placeholder="Password"
											name="password"
										/>
										<ErrorMessage name="password" component="div" className="error-message" />
									</div>
									<button
										type="submit"
										className={`btn1 solid ${isLoading || isSubmitting ? "disabled" : ""}`}
										disabled={isLoading || isSubmitting}
									>
										{isLoading || isSubmitting ? "Loading..." : "Sign up"}
									</button>
									<p className="social-text">Or Sign up with social platforms</p>
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
							<h3>New here ?</h3>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
								ex ratione. Aliquid!
							</p>
							<button className="btn1 transparent" id="sign-up-btn" onClick={handleToggleMode}>
								Sign up
							</button>
						</div>
						<img src={logSVG} className="image" alt="" />
					</div>
					<div className="panel right-panel">
						<div className="content">
							<h3>One of us ?</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
								laboriosam ad deleniti.
							</p>
							<button className="btn1 transparent" id="sign-in-btn" onClick={handleToggleMode}>
								Sign in
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