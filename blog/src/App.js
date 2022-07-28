/* eslint-disable */   //터미널에 뜨는 warning을 제거해줌
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  

  let [글제목, 글제목변경] = useState(['맛집 추천 리스트', '카페추천리스트', '여름여행지추천리스트'])
  let [글제목2, 글제목변경2] = useState('맛집 추천 리스트2')
  let [글제목3, 글제목변경3] = useState(['맛집 추천 리스트3', '강남맛집', '남대문맛집', '홍대맛집'])
  let [좋아요, 좋아요변경] = useState(0)


  let posts = '학동역 맛집'

  let cursor = "cursor:point"

  function 제목바꾸기() {
    let newArray = [...글제목];
    newArray[0] = '떡볶이 맛집';
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>버튼</button>

      <div className='list'>
        <h3> { 글제목[0] } <span onClick={()=> {좋아요변경(좋아요 + 1)} }>♥</span> {좋아요} </h3>
        <p>2월 17일 발생</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { posts } </h3>
        <p>2월 17일 발생</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목2 } </h3>
        <p>2월 17일 발생</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목3[2] } </h3>
        <p>2월 17일 발생</p>
        <hr/>
      </div>
      <Modal/>
    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
