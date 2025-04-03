import { Link } from "react-router-dom";
import "./MainInProgram.css";
import Program1_1 from "../img/program1-1.jpg";
import Program1_2 from "../img/program1-2.jpg";
import Program1_3 from "../img/program1-3.jpg";
import Program2_1 from "../img/program2-1.jpg";
import Program2_2 from "../img/program2-2.jpg";
import Program3_1 from "../img/program3-1.jpg";
import Program3_2 from "../img/program3-2.jpg";
import Program3_3 from "../img/program3-3.jpg";
import Program3_4 from "../img/program3-4.jpg";
import Program3_5 from "../img/program3-5.jpg";
import Program3_6 from "../img/program3-6.jpg";
import Program4_1 from "../img/program4-1.jpg";
import Program4_2 from "../img/program4-2.jpg";
import Program4_3 from "../img/program4-3.jpg";
import Program5_1 from "../img/program5-1.jpg";
import Program5_2 from "../img/program5-2.jpg";
import Program5_3 from "../img/program5-3.jpg";
import Program5_4 from "../img/program5-4.jpg";
import Program5_5 from "../img/program5-5.jpg";
import Program6_1 from "../img/program6-1.jpg";
import Program6_2 from "../img/program6-2.jpg";
import Wave from "../img/wave.png";
import Water from "../img/water.png";
import { useEffect, useState } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 대분류 프로그램 이름 및 대표 사진

const programType = [
  { name: "대표 프로그램", sumbnail: Program1_1, color: "#0071BC" },
  { name: "공식행사", sumbnail: Program2_1, color: "#ED1C24" },
  { name: "공연 프로그램", sumbnail: Program3_1, color: "#009245" },
  { name: "경연 프로그램", sumbnail: Program4_1, color: "#FBB03B" },
  { name: "체험 프로그램", sumbnail: Program5_1, color: "#333" },
  { name: "전시·관람 프로그램", sumbnail: Program6_1, color: "#333" },
];

// 소분류 프로그램 이름 및 사진
const programName = [
  [
    {
      name: "거리퍼레이드",
      image: Program1_1,
      description: "민·관·학·연이 함께 하는 온천 거리퍼레이드",
    },
    {
      name: "온천수 물총 스플래쉬",
      image: Program1_2,
      description:
        "온천로에서 대형 워터게이트 설치,\n 신나는 음악과 함께 미션에 따른 물총싸움",
    },
    {
      name: "온천수DJ파티",
      image: Program1_3,
      description: "온천수를 맞으며 즐기는 신나는 댄스&DJ 파티",
    },
  ],
  [
    {
      name: "온천수신제",
      image: Program2_1,
      description:
        "온천수 분출기원 및 화합 길놀이,\n 수신제, 유성학춤, 유성온천놀이",
    },
    {
      name: "개막식",
      image: Program2_2,
      description: "식전공연, 개막 퍼포먼스, 축하공연, 드론라이트·불꽃쇼",
    },
  ],
  [
    {
      name: "힙합 공연",
      image: Program3_1,
      description: "젊은층을 위한 힙합&댄스 공연",
    },
    { name: "나의 기타이야기", image: Program3_2, description: "두드림공연장" },
    {
      name: "어린이공연",
      image: Program3_3,
      description: "신나는 놀이&포토타임(무료), 선착순 착석",
    },
    {
      name: "뷰티헤어쇼",
      image: Program3_4,
      description: "유성구 미용협회가 함께하는 뷰티헤어쇼",
    },
    {
      name: "7080 낭만콘서트",
      image: Program3_5,
      description: "중장년층을 위한 7080음악 공연",
    },
    {
      name: "폐막공연",
      image: Program3_6,
      description:
        "레베로프 밴드공연 \n메타버스& 아바타 드로잉 퍼포먼스 / 염동균 작가,\n 테너 류정필&코아모러스 합동공연",
    },
  ],
  [
    {
      name: "생활체조 경연대회",
      image: Program4_1,
      description: "유성구체조협회와 함께하는\n 구청장배 생활무용대회",
    },
    {
      name: "생활무용 경연대회",
      image: Program4_2,
      description: "유성구생활무용협회와 함께하는\n 구청장배 생활무용대회",
    },
    {
      name: "유성온천 뮤직&댄스경연대회",
      image: Program4_3,
      description:
        "전국민을 대상으로 하는 노래와 댄스 경연대회\n사전신청(홈페이지) 후 경연 후 시상",
    },
  ],
  [
    {
      name: "유성온천수 수영장",
      image: Program5_1,
      description: "매시간당(11시~20시) 45분 운영\n / 자율입장 / 15분 정비시간",
    },
    {
      name: "유성호 족욕 테마열차",
      image: Program5_2,
      description: "뷰티&와인 프라이빗 족욕체험장",
    },
    {
      name: "어린이 프로그램",
      image: Program5_3,
      description: "어린이 관람객을 위한 프로그램",
    },
    {
      name: "야외 온천족욕체험",
      image: Program5_4,
      description: "족욕탕, 장미탕 등 이벤트탕 운영(축제기간)",
    },
    {
      name: "체험부스 운영",
      image: Program5_5,
      description: "공예, 과학(VR), 건강 등 체험 부스 운영",
    },
  ],
  [
    {
      name: "유성온천문화축제 30주년 주제관",
      image: Program6_1,
      description: "유성온천문화축제 30주년!\n 포토공간 + 유성온천 히스토리월",
    },
    {
      name: "유성 브랜드홍보관",
      image: Program6_2,
      description: "유성구 공식 캐릭터 \n‘유성이’ ‘유온이’ 굿즈 전시 및 판매",
    },
  ],
];

const MainInProgramTitle = () => {
  return (
    <div className="mainInProgramTitle">
      <h2>프로그램</h2>
      <Link to="/Program" target="_blank">
        전체보기
      </Link>
    </div>
  );
};

const ProgramBox = () => {
  // 프로그램 대분류에 대한 인덱스값
  const [programIndex, setProgramIndex] = useState(0);

  // 프로그램 소분류에 대한 인덱스값
  const [indexNum, setIndexNum] = useState(0);

  const handleIndexPrev = () => {
    if (indexNum > 0) {
      setIndexNum((i) => i - 1);
    }
  };

  const handleIndexNext = () => {
    if (indexNum < programName[programIndex].length - 1) {
      setIndexNum((i) => i + 1);
    }
  };

  const handleProgram = (i) => {
    setProgramIndex(i);
    setIndexNum(0);
  };

  const handleIndexChange = (i) => {
    setIndexNum(i);
  };

  useEffect(() => {
    console.log(indexNum);
  }, [indexNum]);

  return (
    <div className="programBox">
      {/* 왼쪽의 프로그램 메인영역 */}
      <article>
        <ul>
          {programName.map((itemOrigin, i) => (
            <li key={i} className={i === programIndex ? "on" : ""}>
              <ul>
                {itemOrigin.map((item, j) => (
                  <li key={j} style={{ left: `${(j - indexNum) * 100}%` }}>
                    <img src={item.image} alt={item.name} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="whiteBox">
          {/* 프로그램 종류
          왼쪽의 메뉴의 글자를 그대로 갖고오면 될 거 같음 */}
          <span
            className="programType"
            style={{
              border: `0.2px solid ${programType[programIndex].color}`,
              color: programType[programIndex].color,
            }}
          >
            {programType[programIndex].name}
          </span>
          <div className="programInfo">
            <h3
              style={{
                fontSize:
                  programName[programIndex][indexNum].name.length > 10
                    ? "12px"
                    : "16px",
              }}
            >
              {programName[programIndex][indexNum].name}
            </h3>
            {/* 프로그램 설명 
          프로그램 종류와 이름을 통해 인덱스값 찾아서 설명 추가,
          설명 전용 배열 추가하기*/}
            <p>{programName[programIndex][indexNum].description}</p>
          </div>
          <div className="indexMoveBox">
            <span
              className="moveButton prev"
              style={{
                backgroundColor: `${indexNum === 0 ? "#828282" : "#fff"}`,
              }}
              onClick={handleIndexPrev}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </span>
            {/* 프로그레스 바
          프로그램 종류에 따른 프로그램의 개수(li)를 length로 가져와서 그 개수에 맞춰 제작(map) */}
            <ul>
              {programName[programIndex].map((item, i) => (
                <li
                  key={i}
                  style={{
                    width: `${90 / programName[programIndex].length}%`,
                    backgroundColor: `${
                      i === indexNum
                        ? programType[programIndex].color
                        : "#828282"
                    }`,
                  }}
                  onClick={() => handleIndexChange(i)}
                ></li>
              ))}
            </ul>
            <span
              className="moveButton next"
              onClick={handleIndexNext}
              style={{
                backgroundColor: `${
                  indexNum === programName[programIndex].length - 1
                    ? "#828282"
                    : "#fff"
                }`,
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </div>
        </div>
      </article>
      {/* 오른쪽의 프로그램 선택 */}
      <ul className="programList">
        {programType.map((item, i) => (
          <li
            key={i}
            style={{
              backgroundColor: `${
                i === programIndex ? programType[i].color : "#fff"
              }`,
            }}
            onClick={() => handleProgram(i)}
          >
            <div className="sumbnailCenter">
              <div className="imgBox">
                <img src={programType[i].sumbnail} alt={programType[i].name} />
              </div>
            </div>

            <div className="titleCenter">
              <h4
                style={{
                  color: `${
                    i === programIndex ? "#fff" : programType[i].color
                  }`,
                }}
              >
                {" "}
                {item.name}
              </h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const MainInProgram = () => {
  return (
    <section className="mainInProgram">
      <MainInProgramTitle />
      <ProgramBox />
      <div className="animationBox">
        <img src={Water} alt="물" className="water" />
        <img src={Wave} alt="파도1" className="wave wave1" />
        <img src={Wave} alt="파도2" className="wave wave2" />
      </div>
    </section>
  );
};

export default MainInProgram;
