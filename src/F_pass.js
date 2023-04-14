
import './App.css';

function F_pass() {
  return (
    <div class="form-wrapper flex flex-col h-full">
			<div class="flex flex-col flex-1 justify-center main-container">

				<div id="form-header">
					<h1 style={{textTransform:"capitalize"}}>Reset Password</h1>
					<p>Please choose your new password.</p>
				</div>
				<form id="resend-password" class="form" novalidate="novalidate">

					<div class="input-area">
          <p class="head" fontWeight="bold" color="900" textAlign="left">New Password</p>
						<input type="text" class="text" id="nPass" name="nPass" placeholder="Enter your new password"/>
					</div>

          <div class="input-area">
          <p class="head" fontWeight="bold" color="900" textAlign="left">Confirm Password</p>
						<input type="text" class="text" id="cPass" name="cPass" placeholder="Confirm your new password"/>
					</div>

					<div class="input-area">
						<input type="submit" class="button" value="Save New Password" id="submit-save"/>
					</div>
				</form>
				<p><a class="login-link light-green" href="login">Return to Sign In</a></p>
				
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
    
    export default F_pass;