/**
 *  Warning 메시지 보고싶지 않을 때
 */

/* eslint-disable */

import { useState } from "react";
import "./App.css";

function App() {
  // 타이틀
  const [title, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "Next.js 독학",
  ]);
  const changeTitle = () => {
    const copy = [...title];
    copy[0] = "여자 코트 추천";
    setTitle(copy);
  };

  // 좋아요
  const [likeCnt, setLikeCnt] = useState(0);
  const likeCntPlus = () => {
    setLikeCnt(likeCnt + 1);
  };

  // 정렬 '가나다순'
  const orderByAsc = () => {
    const arr = [...title].sort();
    setTitle(arr);
  };

  // Modal창 상태
  const [modal, setModal] = useState(false);
  const modalToggle = () => {
    setModal(!modal);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>
      <button onClick={changeTitle}>제목 변경</button>
      <button onClick={orderByAsc}>가나다 순으로 정렬</button>
      <div className="list">
        <h4 onClick={modalToggle}>
          {title[0]} <span onClick={likeCntPlus}>👍</span>
          {likeCnt}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      {/* Modal */}
      {modal ? <Modal title={title} /> : null}
    </div>
  );
}

const Modal = ({ title }) => {
  return (
    <div className="modal">
      <h4>{title[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

export default App;
