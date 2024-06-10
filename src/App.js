import React, { useState, useEffect } from 'react';
import './index.css';


function App() {
  //자바스트립트와 태그를 같이 쓰는 문법을 JSX라고 한다(리액트 문법)

  const [pets, setPets] = useState([]);
  //useEffect를 사용해 데이터를 localStorage에 저장해서 불러오기
  //처음 한번만 실행됨
  useEffect(() => {
    if (localStorage.getItem("PetData")) {
      setPets(JSON.parse(localStorage.getItem("PetData")));
    }
  }, []);
  //pets가 수정될때마다 실행됨
  useEffect(() => {
    localStorage.setItem("PetData", JSON.stringify(pets));
  }, [pets]);
  return (
    <>
      <OurHeader />
      <LikeArea />
      <TimeArea />
      <AddPetForm setPets={setPets} />

      <ul>
        {pets.map(function (pet) {
          return <Pet name={pet.name} species={pet.species} age={pet.age} key={pet.id} setPets={setPets} id={pet.id} />;
        })}
      </ul>
      <Footer cr="부산IT교육센터" />
    </>
  );
}

function OurHeader() {
  return <h1 className='special'>처음 앱</h1>;
}

function TimeArea() {
  const [time, setTime] = useState(new Date().toLocaleString());

  setTimeout(() => {
    setTime(new Date().toLocaleString());
  }, 1000);

  return <p>현재 시간 : {time}</p>;
}

function Footer(props) {
  return <small>Copyright: {props.cr}</small>;
}

function Pet(props) {
  function handleDelete() {
    props.setPets(prev => prev.filter(pet => pet.id !== props.id));
  }
  return (
    <li>{props.name}은(는) {props.species}이고 {props.age}살 이다.
      <button onClick={handleDelete}>삭제</button>
    </li>
  );
}

function LikeArea() {
  const [likeCount, setLikeCount] = useState(0);

  function increaseLike() {
    setLikeCount(prev => prev + 1);
  }

  function decreaseLike() {
    setLikeCount(prev => prev - 1);
  }

  return (
    <>
      <button onClick={increaseLike}>추천하기</button>
      <button onClick={decreaseLike}>비추하기</button>
      <h2>이 페이지를 {likeCount} 번 추천 했습니다.</h2>
    </>
  );
}

function AddPetForm(props) {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.setPets(prev => prev.concat({ name: name, species: species, age: age, id: new Date() }));
    setName("");
    setSpecies("");
    setAge("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>새 PET 을 추가하기</legend>
        <input value={name} onChange={e => setName(e.target.value)} placeholder='이름' />
        <input value={species} onChange={e => setSpecies(e.target.value)} placeholder='종류' />
        <input value={age} onChange={e => setAge(e.target.value)} placeholder='나이' />
        <button>펫 추가</button>
      </fieldset>
    </form>
  );
}







export default App;

