import React from 'react';
import { useState } from 'react';

const Writemsg = (props) => {
    function writeHandler(){
        fetch('http://127.0.0.1:5000/write_msg', {
            method: 'post',
            headers : {               //데이터 타입 지정
                "Content-Type":"application/json"   
            },
            body: JSON.stringify({    //json: 고급진 배열... 크기가 작아 네트워크 통신할 때 쓸 수 있음 

                cake_id:text,
                msg:text2,
                candle_id:radio3

            })
          })
          .then(res => res.json())
          .then(res => {
            if (res.success) {
                alert("저장 완료");
            }
          })
    
        }



    function deleteHandler() {
        console.log("Clicked");
       }


    const [text, setText] = useState('');
    const [text2, setText2] = useState('');
    const [radio3, setradio] = useState('');
 
    const onChange = (event) => {

        setText(event.target.value);

    }
    const onChange2 = (event) => {

        setText2(event.target.value);

    }

    const onChangeValue = (event) => {

        setradio(event.target.value);

    }

    return ( //리턴은 무조건 1개만 열고 닫고 해야함 
        <>
       
            Name: <input type="text" name="name" value={text} onChange={onChange}  /><br></br><br></br>
            Msg: <textarea rows = "10" cols = "10" name = "Msg"  onChange={onChange2} value={text2}  > </textarea><br></br> <br></br>
        <div onChange={onChangeValue}>
            Candle:<input type="radio" name="candle" value="1"/><img src='img/candle0.jpg' width="40" height="120"/>        
            <input type="radio" name="candle" value="2"/><img src='img/candle1.jpg' width="40" height="120" />  
            <input type="radio" name="candle" value="3"/><img src='img/candle2.jpg' width="40" height="120" /> 
            <br></br><br></br><br></br><button className="btn" onClick={writeHandler}>Save</button>
        </div>
        </>
    );
}


export default Writemsg;