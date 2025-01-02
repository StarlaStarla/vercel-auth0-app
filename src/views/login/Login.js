import './Login.css';
import AuthenticationButton from './AuthenticationButton.js';
import LoginInput from './LoginInput.js'; 
function Login() {
 
  return (
    <div className="login-box">
      <form action="#">  {/* Empty */}
        <p className="smart-talent">SmartTalenConnect</p>
        <p className="welcome">
          <span className="welcome-to">Welcome to</span><br/>
          <span className="platform-name"> SmartTalenConnect Platform</span>
        </p>
        <p className="signin">Please sign in to continue</p>
        <div className="input-container">
        <div className="email-input-wrapper">
          <LoginInput labelText="Email" placeholder="Email"/>
        </div>
        <div className="email-input-wrapper">
           <LoginInput labelText="Password" placeholder="Password"/>
          </div>
        </div>
        <p className="forgot-password">Forgot my password</p>
        <AuthenticationButton />
      </form>
    </div>
  );
}

export default Login;
