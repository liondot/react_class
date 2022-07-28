import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState('맛집 추천 리스트')
  let [글제목2, 글제목변경2] = useState('맛집 추천 리스트2')
  let [글제목3, 글제목변경3] = useState(['맛집 추천 리스트3', '강남맛집', '남대문맛집', '홍대맛집'])

  let posts = '학동역 맛집'

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <div className='list'>
        <h3> { posts } </h3>
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
