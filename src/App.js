/**
 *  Warning 메시지 보고싶지 않을 때
 */

/* eslint-disable */

import React, { useState } from "react";
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
  const [likeCnt, setLikeCnt] = useState([0, 0, 0]);
  const likeCntPlus = (e, idx) => {
    e.stopPropagation();
    const copy = [...likeCnt];
    copy[idx] = copy[idx] + 1;
    setLikeCnt(copy);
  };

  // 정렬 '가나다순'
  const orderByAsc = () => {
    const arr = [...title].sort();
    setTitle(arr);
  };

  // input
  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
  };

  // 게시글 추가
  const addTitle = () => {
    const copy = [...title];
    copy.unshift(input);
    setTitle(copy);
    setLikeCnt([...likeCnt, 0]);
    setInput("");
  };

  // 게시글 삭제
  const removeTitle = (e, idx) => {
    e.stopPropagation();
    setTitle(title.filter((_, i) => i !== idx));
  };

  // Modal창 상태
  const [show, setShow] = useState(false);
  const [titleIdx, setTitleIdx] = useState(0);
  const modalToggle = (idx) => {
    setTitleIdx(idx);
    setShow(!show);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>
      <button onClick={changeTitle}>제목 변경</button>
      <button onClick={orderByAsc}>가나다 순으로 정렬</button>
      {title.map((title, idx) => (
        <div className="list" key={idx}>
          <h4 onClick={() => modalToggle(idx)}>
            {title} <span onClick={(e) => likeCntPlus(e, idx)}>👍</span>
            {likeCnt[idx]}
          </h4>
          <p>2월 17일 발행</p>
          <button onClick={(e) => removeTitle(e, idx)}>삭제</button>
        </div>
      ))}

      {/* input */}
      <input onChange={onChange} type="text" />
      <button onClick={addTitle}>등록</button>

      {/* Modal */}
      <Modal
        title={title}
        titleIdx={titleIdx}
        changeTitle={changeTitle}
        show={show}
      />
      <Modal2 />
    </div>
  );
}

const Modal = ({ title, titleIdx, changeTitle, show }) => {
  return show ? (
    <div className="modal">
      <h4>{title[titleIdx]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={changeTitle}>글수정</button>
    </div>
  ) : null;
};

/**
 * class 방식으로 컴포넌트 만드는 방법
 * constructor, super, render 세 가지부터 써놓고 시작
 */
class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "hong",
      age: 28,
    };
  }
  render() {
    return (
      <div>
        안녕 {this.state.name}
        {this.state.age}
        <button onClick={() => this.setState({ age: 30 })}>버튼</button>
      </div>
    );
  }
}

export default App;
