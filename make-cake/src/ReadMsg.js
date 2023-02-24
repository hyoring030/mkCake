import React from 'react';
import { useState } from 'react';

const Readmsg = (props) => {
    function deleteHandler() {
        console.log("Clicked");
       }
    const [text, setText] = useState('');
    const onChange = (event) => {

        setText(event.target.value);

    }


    function readHandler(){
        fetch('http://127.0.0.1:5000/read_msg', {
            method: 'post',
            headers : {               //데이터 타입 지정
                "Content-Type":"application/json"   
            },
            body: JSON.stringify({    //json: 고급진 배열... 크기가 작아 네트워크 통신할 때 쓸 수 있음 

                cake_id:text,
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
        <>
            <input type="text" onChange={onChange} value={text}></input><br></br>
            <button className="btn" onClick={readHandler}>Read</button>
    
        </>
    );
}




export default Readmsg;