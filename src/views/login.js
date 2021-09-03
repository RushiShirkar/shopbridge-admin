import React from "react";
import { useHistory } from "react-router";
import '../styles/styles.css';

const Login = () => {
	const history = useHistory();

	const userLogin = () => {
		history.replace('/products');
	}

	return(
		<>
			<div className="d-md-flex half">
    			<div className="bg"></div>
    			<div className="contents">
      				<div className="container">
        				<div className="row align-items-center justify-content-center">
          					<div className="col-md-12">
            					<div className="form-block mx-auto">
					              	<div className="text-center mb-5">
					              		<h3>Login to <strong>ShopBridge</strong></h3>
					              	</div>
              						<form onSubmit={userLogin} method="post">
						                <div className="form-group first">
						                	<label for="username">Username</label>
						                  	<input type="text" className="form-control" placeholder="your-email@gmail.com" id="username" />
						                </div>
						                <div className="form-group last mb-5 mt-2">
						                  	<label for="password">Password</label>
						                  	<input type="password" className="form-control" placeholder="Your Password" id="password" />
						                </div>
                						<input type="submit" value="Log In" className="btn btn-block btn-primary w-100" />
              						</form>
            					</div>
          					</div>
        				</div>
      				</div>
      			</div>
      		</div>
		</>
	)
};

export default Login;