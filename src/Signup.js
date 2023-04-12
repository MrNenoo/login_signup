import logo from './logo.svg';
import './App.css';

function Signup() {
  return (
    <div class="form-wrapper flex flex-col h-full">
        <div class="flex flex-col flex-1 justify-center main-container">
            <div id="logo-container">
                <div id="logo" class="reset-styling"></div>
            </div>
        <div id="submitting-loader-container">
            <img src="https://dashboard.tawk.to/_s/assets/images/ajax-loader-big.gif" id="submitting-loader"/>
        </div>
        <div id="form-header">
            <h1>Create a completely free account</h1>
        </div>
        <form id="create-account-form" class="form" novalidate="novalidate">
            <div id="submission-result-container">
                <p class="error hide" id="signup-error-message"></p>
                <p class="success hide" id="submit_message_success">Successfully created profile. Redirecting to dashboard.</p>
            </div>
            <div class="input-area">
                <input type="text" class="text required" id="name" name="name" maxlength="100" placeholder="Enter Your Name"/>
                <em for="name" id="name-error" generated="true" class="invalid" style={{display: "none"}}></em>
            </div>
            <div class="input-area">
                <span class="signup-loader" id="email-loader"></span>
                <input type="email" class="text required" id="email" name="email" value="" size="40" placeholder="Enter Your Email"/>
                <em for="email" id="email-error" generated="true" class="invalid" style={{display: "none"}}></em>
            </div>
            <div class="input-area">
                <input type="password" class="text passwordStrength" id="password" minlength="6" placeholder="Enter Your Password"/>
                <em for="password" id="password-error" generated="true" class="invalid">&nbsp;</em>
                <div class="password-show-hide" data-target="#password">
                    <i class="feather icon-eye"></i>
                </div>
                <div class="password-meter">
                    <div class="password-meter-bg">
                        <div class="password-meter-bar"></div>
                    </div>
                </div>
                
                <div class="password-hints">
                    <ul>
                        <li><span class="minimum-hint">6 characters minimum</span></li>
                        <li><span class="number-hint">At least one number</span></li>
                        <li><span class="case-hint">Upper &amp; lowercase character</span></li>
                    </ul>
                </div>
            </div>
            <div class="input-area">
                <input type="submit" class="button" value="Sign Up for free" id="submit-create-account"/>
            </div>
            <input type="hidden" value="en" id="language"/>
            <input type="hidden" value="web" id="source"/>
        </form>
        <p>Already have an account? <a class="login-link light-green" href="/login">Return to Sign In</a></p>
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
  );
}

export default Signup;
