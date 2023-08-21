import { useState, useContext } from "react";
import "./login.css";
import { AuthContext } from "../../context/AuthContext";
import useForm from "../../hooks/useForm";
import { LOGIN_VALUES } from "../../constants/index";
import logSVG from "../../assets/log.svg"
import logReg from "../../assets/register.svg"

const Login = () => {
	const { login, register, authenticated, user } = useContext(AuthContext);

	const { handleChange, handleSubmit, values, errors } = useForm(
		LOGIN_VALUES,
		login,
	);

	const [isSignUp, setIsSignUp] = useState(false);

	const handleToggleMode = () => {
		setIsSignUp(!isSignUp);
	};

	return (
		<>
			{console.log("Authenticated:", authenticated)}
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
						<form
							action="#"
							className="sign-in-form"
							onSubmit={handleSubmit}
						>
							<h2 className="title">Sign in</h2>
							<div className="input-field">
								<i className="fas fa-user"></i>
								<input type="text" placeholder="Username" name="username" value={values.username}
									onChange={handleChange} />
							</div>
							<div className="input-field">
								<i className="fas fa-lock"></i>
								<input
									type="password"
									placeholder="Password"
									name="password"
									value={values.password}
									onChange={handleChange}
								/>
							</div>
							<input
								type="submit"
								value="Login"
								className="btn1 solid"
							/>
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
						</form>
						<form
							action="#"
							className="sign-up-form"
							onSubmit={handleSubmit} // Prevent form submission for now
						>
							<h2 className="title">Sign up</h2>
							<div className="input-field">
								<i className="fas fa-user"></i>
								<input type="text" placeholder="Username" />
							</div>
							<div className="input-field">
								<i className="fas fa-envelope"></i>
								<input type="email" placeholder="Email" />
							</div>
							<div className="input-field">
								<i className="fas fa-lock"></i>
								<input type="password" placeholder="Password" />
							</div>
							<input
								type="submit"
								className="btn1"
								value="Sign up"
								onClick={register} // Call your register function here
							/>
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
						</form>
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