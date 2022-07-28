/* eslint-disable */   //터미널에 뜨는 warning을 제거해줌
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  

  let [글제목, 글제목변경] = useState(['맛집 추천 리스트', '카페추천리스트'])
  let [글제목2, 글제목변경2] = useState('맛집 추천 리스트2')
  let [글제목3, 글제목변경3] = useState(['맛집 추천 리스트3', '강남맛집', '남대문맛집', '홍대맛집'])
  let [좋아요, 좋아요변경] = useState(0)


  let posts = '학동역 맛집'

  let cursor = "cursor:point"

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <button onClick={()=> {글제목변경(글제목[1])} }>{글제목[0]}</button>

      <div className='list'>
        <h3> { posts } <span  onClick={()=> {좋아요변경(좋아요 + 1)} }>♥</span> {좋아요} </h3>
        <p>2월 17일 발생</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목 } </h3>
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
    </div>
  );
}

export default App;
