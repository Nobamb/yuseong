import { Link } from "react-router-dom";
import Logo1 from "../img/logo1.png";
import Logo2 from "../img/logo2.png";
import "./Nav.css";
import { useEffect, useState } from "react";

const Nav = ({ isScrolled }) => {
  // 메인메뉴 활성화용 상태관리
  const [main1, setMain1] = useState(false);

  const [main2, setMain2] = useState(false);

  const [main3, setMain3] = useState(false);

  const [main4, setMain4] = useState(false);

  // 메인메뉴에 호버상태
  const [mainMenu, setMainMenu] = useState(false);

  // 서브메뉴에 호버상태
  const [subMenu, setSubMenu] = useState(false);

  // 메인메뉴들의 활성화 지속
  const [mainMenu1Active, setMainMenu1Active] = useState(false);

  const [mainMenu2Active, setMainMenu2Active] = useState(false);

  const [mainMenu3Active, setMainMenu3Active] = useState(false);

  const [mainMenu4Active, setMainMenu4Active] = useState(false);

  // 서브메뉴창 활성화 지속
  const [subMenuActive, setSubMenuActive] = useState(false);

  // 메인메뉴에 호버시 활성화
  const handleMainMenu = () => {
    setMainMenu(true);
  };
  // 호버 종료시 비활성화
  const handleMainMenuOff = () => {
    setMainMenu(false);
  };

  // 서브메뉴에 호버시 활성화
  const handleSubMenu = () => {
    setSubMenu(true);
  };
  const handleSubMenuOff = () => {
    setSubMenu(false);
  };

  // 메인메뉴1에 호버시 활성화
  const handleMain1 = () => {
    setMain1(true);
  };

  const handleMain1Off = () => {
    setMain1(false);
  };

  const handleMain2 = () => {
    setMain2(true);
  };

  const handleMain2Off = () => {
    setMain2(false);
  };

  const handleMain3 = () => {
    setMain3(true);
  };

  const handleMain3Off = () => {
    setMain3(false);
  };

  const handleMain4 = () => {
    setMain4(true);
  };

  const handleMain4Off = () => {
    setMain4(false);
  };

  // 메인메뉴나 서브메뉴를 호버중일때 서브메뉴창을 계속활성화
  useEffect(() => {
    if (mainMenu || subMenu) {
      setSubMenuActive(true);
    } else {
      setSubMenuActive(false);
    }
  }, [mainMenu, subMenu]);

  // 메인메뉴1을 호버한 상태일때 메인메뉴1 활성화
  useEffect(() => {
    if (main1) {
      setMainMenu1Active(true);
    } else {
      setMainMenu1Active(false);
    }
  }, [main1]);

  // 메인메뉴2을 호버한 상태일때 메인메뉴2 활성화
  useEffect(() => {
    if (main2) {
      setMainMenu2Active(true);
    } else {
      setMainMenu2Active(false);
    }
  }, [main2]);

  // 메인메뉴3을 호버한 상태일때 메인메뉴3 활성화
  useEffect(() => {
    if (main3) {
      setMainMenu3Active(true);
    } else {
      setMainMenu3Active(false);
    }
  }, [main3]);

  // 메인메뉴4를 호버한 상태일때 메인메뉴4 활성화
  useEffect(() => {
    if (main4) {
      setMainMenu4Active(true);
    } else {
      setMainMenu4Active(false);
    }
  }, [main4]);

  // useEffect(() => {
  //   alert(`main1 : ${main1} main1active : ${mainMenu1Active}`);
  // }, [main1, mainMenu1Active]);

  // useEffect(() => {
  //   alert(`main2 : ${main2} main2active : ${mainMenu2Active}`);
  // }, [main2, mainMenu2Active]);
  // useEffect(() => {
  //   alert(`main3 : ${main3} main3active : ${mainMenu3Active}`);
  // }, [main3, mainMenu3Active]);
  // useEffect(() => {
  //   alert(`main4 : ${main4} main4active : ${mainMenu4Active}`);
  // }, [main4, mainMenu4Active]);

  return (
    <nav
      onMouseLeave={() => {
        handleMain1Off();
        handleMain2Off();
        handleMain3Off();
        handleMain4Off();
      }}
      className={isScrolled ? "navScrolled" : ""}
    >
      <h1>
        <Link to="/" target="_blank">
          <img src={Logo1} alt="로고1" />
        </Link>
        {/* <a href="#" target="_blank">
          <img src={Logo1} alt="로고1" />
        </a> */}
      </h1>
      {/* 서브메뉴 */}
      <ul>
        <li
          onMouseEnter={() => {
            handleMainMenu();
            handleMain1();
            handleMain2Off();
            handleMain3Off();
            handleMain4Off();
          }}
          onMouseLeave={() => {
            handleMainMenuOff();
          }}
          className={mainMenu1Active ? "mainActive" : ""}
        >
          <Link to="/Notice" target="_blank">
            <span className="activeBefore">행사안내</span>
            <span className="activeAfter">행사안내</span>
          </Link>
          {/* <a href="#" target="_blank">
            <span className="activeBefore">행사안내</span>
            <span className="activeAfter">행사안내</span>
          </a> */}
        </li>
        <li
          onMouseEnter={() => {
            handleMainMenu();
            handleMain2();
            handleMain1Off();
            handleMain3Off();
            handleMain4Off();
          }}
          onMouseLeave={() => {
            handleMainMenuOff();
          }}
          className={mainMenu2Active ? "mainActive" : ""}
        >
          <Link to="/Program" target="_blank">
            <span className="activeBefore">프로그램</span>
            <span className="activeAfter">프로그램</span>
          </Link>
        </li>
        <li
          onMouseEnter={() => {
            handleMainMenu();
            handleMain3();
            handleMain1Off();
            handleMain2Off();
            handleMain4Off();
          }}
          onMouseLeave={() => {
            handleMainMenuOff();
          }}
          className={mainMenu3Active ? "mainActive" : ""}
        >
          <Link to="/Join" target="_blank">
            <span className="activeBefore">사전신청</span>
            <span className="activeAfter">사전신청</span>
          </Link>
        </li>
        <li
          onMouseEnter={() => {
            handleMainMenu();
            handleMain4();
            handleMain2Off();
            handleMain3Off();
            handleMain1Off();
          }}
          onMouseLeave={() => {
            handleMainMenuOff();
          }}
          className={mainMenu4Active ? "mainActive" : ""}
        >
          <Link to="/Community" target="_blank">
            <span className="activeBefore">커뮤니티</span>
            <span className="activeAfter">커뮤니티</span>
          </Link>
        </li>
      </ul>

      {/* 서브메뉴 */}
      <div
        className={`subMenu ${subMenuActive ? "subActive" : ""}`}
        onMouseEnter={handleSubMenu}
        onMouseLeave={handleSubMenuOff}
      >
        <ul>
          <li className={main1 ? "on" : ""}>
            <ul>
              <li>
                <Link to="/" target="_blank">
                  행사 소개
                </Link>
              </li>
              <li>
                <Link to="/" target="_blank">
                  행사 개요
                </Link>
              </li>
              <li>
                <Link to="/" target="_blank">
                  행사 일정
                </Link>
              </li>
              <li>
                <Link to="/" target="_blank">
                  행사장 배치도
                </Link>
              </li>
              <li>
                <Link to="/" target="_blank">
                  오시는 길
                </Link>
              </li>
            </ul>
          </li>
          <li className={main2 ? "on" : ""}>
            {" "}
            <ul>
              <li>
                <Link to="/" target="_blank">
                  대표 프로그램
                </Link>
              </li>
              <li>
                <Link to="/" target="_blank">
                  공식행사
                </Link>
              </li>
              <li>
                <Link to="/" target="_blank">
                  공연 프로그램
                </Link>
              </li>
              <li>
                <Link to="/" target="_blank">
                  경연 프로그램
                </Link>
              </li>
              <li>
                <Link to="/" target="_blank">
                  체험 프로그램
                </Link>
              </li>
              <li>
                <Link to="/" target="_blank">
                  전시·관람 프로그램
                </Link>
              </li>
            </ul>
          </li>
          <li className={main3 ? "on" : ""}>
            <ul>
              <li>
                <Link to="/" target="_blank">
                  뮤직&댄스 경연대회
                </Link>
              </li>
              <li>
                <Link to="/" target="_blank">
                  유성온천 비누바 세트
                </Link>
              </li>
            </ul>
          </li>
          <li className={main4 ? "on" : ""}>
            <ul>
              <li>
                <Link to="/" target="_blank">
                  공지사항
                </Link>
              </li>
              <li>
                <Link to="/" target="_blank">
                  행사갤러리
                </Link>
              </li>
              <li>
                <Link to="/" target="_blank">
                  Q&A
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <h2>
        <Link to="/" target="_blank">
          <img src={Logo2} alt="로고2" />
        </Link>
      </h2>
    </nav>
  );
};

export default Nav;
