import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main-container" id="login-container">
      <div id="left-content-container">
        <div id="left-content-wrapper">
          <div id="header-content">
            <div id="tree-image" className="right"></div>
            <div className="clear"></div>
              <div id="logo"></div>
                <p id="feed-header" className="light-green">
                  What's the latest
                </p>
              </div>
          <div id="feed-container">
            <div className="body-content-container">
              <div className="content">
                <a className="content-title" href="https://www.tawk.to/business-strategy/resolve-support-tickets-fast-with-these-strategies/" target="_blank">Resolve support tickets fast with these strategies</a>
                  <p className="content-date">Thu Feb 09 2023</p>
                  <p className="content-body">Use these ticketing strategies from tawk.to to speed up help desk responses, win underserved customers, and better serve the customers you have.</p>
                  <a className="light-green feed-link" href="https://www.tawk.to/business-strategy/resolve-support-tickets-fast-with-these-strategies/" target="_blank">Learn more</a></div>
              <div className="content">
                <a className="content-title" href="https://www.tawk.to/business-strategy/time-saving-strategies-for-entrepreneurs/" target="_blank">Increase your productivity in 2023: Time-saving strategies for entrepreneurs</a>
                <p className="content-date">Thu Feb 09 2023</p>
                <p className="content-body">When you're an entrepreneur, time is often in short supply. We hear you. To make 2023 your best year yet, test these tried and true time-saving strategies.</p>
                <a className="light-green feed-link" href="https://www.tawk.to/business-strategy/time-saving-strategies-for-entrepreneurs/" target="_blank">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="right-content-container">
        <div className="form-wrapper flex flex-col h-full">
          <div className="flex flex-col flex-1 justify-center">
            <div id="logo-container">
            <div id="logo" className="reset-styling"></div>
          </div>
        <div id="submitting-loader-container">
          <img src="https://dashboard.tawk.to/_s/assets/images/ajax-loader-big.gif" id="submitting-loader"/>
        </div>
        <div id="form-header">
          <h1>Log in to your tawk.to account</h1>
        </div>
        <form id="login" method="post" action="login" className="form" novalidate="novalidate">
          <div id="submission-result-container">
            <p className="error hide" id="email-error">Invalid email address.</p>
            <p className="error hide" id="not-found">Unable to find user for the given email address.</p>
            <p className="error hide" id="suspended">This account has been suspended.</p>
            <p className="error hide" id="invalid-credentials">The email or password you entered is incorrect.</p>
            <p className="error hide" id="beta-unapproved">This beta account is still unapproved.</p>
            <p className="error hide" id="failed-login-attemtps">Too many failed login attempts from this IP. Please try again later.</p>
            <p className="error hide" id="password-reset-required">Please reset your password</p>
          </div>
          <div className="input-area">
            <input type="text" className="text" id="email" name="email" placeholder="Enter Email"/>
          </div>
          <div className="input-area">
            <input type="password" className="text" id="password" name="password" minlength="6" placeholder="Enter Your Password"/>
          </div>
          <div className="input-area">
            <input type="submit" className="button" value="Sign In" id="submit-login"/>
          </div>
          <div className="input-area">
            <div className="left">
              <input type="checkbox" id="rememberMe" name="rememberMe"/>
                <label for="rememberMe" id="rememberMe-label">Remember Me</label>
            </div>
            <div className="right">
              <a id="forgot-password-link" href="forgot-password" className="light-green">forgot password?</a>
            </div>
            <div className="clear"></div>
          </div>
          <p>Don't have an account? <a href="signup" className="light-green">Create free account</a></p>
          <input type="hidden" value="en" id="language"/>
        </form>
      </div>
      <footer id="footer-nav">
        <a className="footer-nav--links" href="https://www.tawk.to/legal/" target="_blank">
          Privacy &amp; Terms
        </a>
        <a className="footer-nav--links" href="https://www.tawk.to/contact-us/" target="_blank">
          Contact Us
        </a>
      <div id="selected-language">
        <span className="footer-nav--links" id="language-name">English (United States)</span>
        <span id="select-language"></span>
        <div id="language-selection-list" className="dropdown-menu dropup">
          <ul>
            <li class="change-language" id="ar"><span className="lang-title">العَرَبِية</span></li>
            <li class="change-language" id="bg"><span className="lang-title">български</span></li>
            <li class="change-language" id="cat"><span className="lang-title">català</span></li>
            <li class="change-language" id="cs"><span className="lang-title">čeština</span></li>
            <li class="change-language" id="da"><span className="lang-title">dansk</span></li>
            <li class="change-language" id="de"><span className="lang-title">Deutsch</span></li>
            <li class="change-language" id="en"><span className="lang-title">english (United States)</span></li>
            <li class="change-language" id="es"><span className="lang-title">español</span></li>
            <li class="change-language" id="fi"><span className="lang-title">suomi</span></li>
            <li class="change-language" id="fr"><span className="lang-title">français</span></li>
            <li class="change-language" id="hi"><span className="lang-title">हिंदी</span></li>
            <li class="change-language" id="it"><span className="lang-title">italiano</span></li>
            <li class="change-language" id="hu"><span className="lang-title">magyar</span></li>
            <li class="change-language" id="id"><span className="lang-title">Bahasa Indonesia</span></li>
            <li class="change-language" id="ko"><span className="lang-title">한국어</span></li>
            <li class="change-language" id="nl"><span className="lang-title">Nederlands</span></li>
            <li class="change-language" id="pl"><span className="lang-title">polski</span></li>
            <li class="change-language" id="pt_br"><span className="lang-title">português (Brasil)</span></li>
            <li class="change-language" id="ro"><span className="lang-title">română</span></li>
            <li class="change-language" id="ru"><span className="lang-title">Русский</span></li>
            <li class="change-language" id="sk"><span className="lang-title">slovenčina</span></li>
            <li class="change-language" id="sv"><span className="lang-title">svenska</span></li>
            <li class="change-language" id="tr"><span className="lang-title">Türkçe</span></li>
            <li class="change-language" id="vi"><span className="lang-title">Tiếng Việt</span></li>
            <li class="change-language" id="zh_tw"><span className="lang-title">繁体中文</span></li>
          </ul>
          <div id="language-dropdown-triangle"></div>
          <div className="clear"></div>
          </div>
        </div>
      </footer>
      </div>
      </div>
    </div>
    
  );
}

export default App;
