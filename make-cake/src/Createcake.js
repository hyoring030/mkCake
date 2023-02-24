import React from 'react';
import styles from "./App.module.css";
import { useState } from 'react';

const Createcake = (props) => {

    const [text, setText] = useState('');
    const [text2, setText2] = useState('');

    const onChange = (event) => {

        setText(event.target.value);

    }
    const onChange2 = (event) => {

        setText2(event.target.value);

    }

    function deleteHandler() {
        console.log("Clicked");
       }
    function submitHandler(){
    fetch('http://127.0.0.1:5000/user_info', {
        method: 'post',
        headers : {               //데이터 타입 지정
            "Content-Type":"application/json"   
        },
        body: JSON.stringify({    //json: 고급진 배열... 크기가 작아 네트워크 통신할 때 쓸 수 있음 
            name:text,
            Birth:text2,
        })
      })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
            alert("저장 완료");
        }
      })

    }

    return ( //리턴은 무조건 1개만 열고 닫고 해야함 
        <><br></br><background-color  />
           <center>Name: <input type = "text" name="name" onChange={onChange} value={text} /> <br></br><br></br>
            Birth(ex) 2001-03-07 00:00:00): <input type = "text" name="Birth" onChange={onChange2} value={text2}/>
            <button className="btn" onClick={submitHandler}>Enter</button>
            </center>
        </>
    );
}




export default Createcake;