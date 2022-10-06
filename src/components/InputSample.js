import React, {useState} from "react";
 
function InputSample() {

  const [text, setText] = useState('');

    const onChange = (e) => {
    setText(e.target.value);
    //e.target.value: 현재 입력되는 값 반환
  };
 
    const onReset = () => {
    setText('');
  };
  return (
    <div>
      <input onChange={onChange} value = {text}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {text}</b>
        //text를 화면에 출력
      </div>
    </div>
  );
}
 
export default InputSample;
