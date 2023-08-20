import "./loginRegister.css"
import loginImg from "../../assets/fondoLogin.png"
import rectangleLogin from "../../assets/Rectangle 33.png"
import vectorLogin from "../../assets/Vector 1.svg"
import elipseLogin from "../../assets/Ellipse 1.svg"

const LoginRegister = () => {
	return (
		<div className="login-page container-fluid">
			<div className="overlap row">
				<img className="image col-md-6" alt="Image" src={loginImg} />
				<img className="rectangle col-md-6" alt="Rectangle" src={rectangleLogin} />
				<div className="content col-md-6 col-sm-12">
					<div className="div"> 
						<p className="already-have-a">
							<span className="span">Already have a account?</span>
							<span className="text-wrapper-3">&nbsp;</span>
							<span className="text-wrapper-4">Log in</span>
						</p>
						<div className="button-create-acc">
							<div className="div-wrapper">
								<div className="text-wrapper-5">Create Account</div>
							</div>
						</div>
						<div className="password-input">
							<div className="text-wrapper-6">Password</div>
							<div className="overlap-group-wrapper">
								<div className="overlap-group-2">
									<div className="text-wrapper-7">Enter your Password here</div>
									<div className="input" />
								</div>
							</div>
						</div>
						<div className="email-input">
							<div className="text-wrapper-6">Email</div>
							<div className="overlap-group-wrapper">
								<div className="overlap-group-2">
									<div className="text-wrapper-7">Enter your Email here</div>
									<div className="input" />
								</div>
							</div>
						</div>
						<div className="fullname-input">
							<div className="text-wrapper-6">Full Name</div>
							<div className="overlap-group-wrapper">
								<div className="overlap-group-2">
									<p className="text-wrapper-7">Enter your Fulll Name here</p>
									<div className="input" />
								</div>
							</div>
						</div>
						<div className="title">Regístrate</div>
					</div>
				</div>
				<img className="vector" alt="Vector" src={vectorLogin} />
				<img className="ellipse" alt="Ellipse" src={elipseLogin} />
			</div>
		</div>
	);
};

export default LoginRegister