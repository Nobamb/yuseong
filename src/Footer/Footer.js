import "./Footer.css";
import Logo from "../img/logo1.png";
import Host from "../img/host.png";

const Footer = () => {
  return (
    <footer>
      <div className="footerInner">
        <div className="footerContent">
          <img src={Logo} alt="로고" />
          <div className="footerText">
            <div className="footerTextTop">
              <span>이용약관</span>
              <span>개인정보처리방침</span>
              <span>이메일 무단수집거부</span>
            </div>
            <div className="footerTextBottom">
              <h3>INFORMATION</h3>
              <ul className="footerTextBottomInfo">
                <li>
                  <h4>주소</h4>
                  <p>(우 34139) 대전광역시 유성구 대학로 211</p>
                </li>
                <li>
                  <h4>전화번호</h4>
                  <p>042-611-2114</p>
                </li>
                <li>
                  <h4>팩스</h4>
                  <p>042-611-2569</p>
                </li>
              </ul>
            </div>
          </div>
          <img src={Host} alt="주최주관" />
        </div>

        <div className="copyright">
          <p>COPYRIGHT ⓒ jsh12345644@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
