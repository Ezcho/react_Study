import React from 'react';
import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './Post.css'

function Post() {


  <div>
    글 작성
  </div>
  const [Content, setContent] = useState({
    title: '',    //title 선언
    content: ''   //content 선언 최초엔 빈 문자열
  }) 

  const [viewContent, setViewContent] = useState([]);
  const getValue = e => {
    const { name, value } = e.target;
    setContent({
      ...Content,
      [name]: value
    })
    console.log(Content);
  };
    return (
      <div className="main">

      <div className='container'>
        {viewContent.map(element =>
        <div>
          <h3>{element.title}</h3>
          <div>
            {element.content}
          </div>
        </div>   
      //출력부
        
        )}
      </div>
      <div className='form-wrapper'>
      <input className="title-input"
	            type='text'
              placeholder='제목을 입력하세요'
              onChange={getValue}
              name='title'/>

        <CKEditor
          editor={ClassicEditor}  //Classic Editor  변수 선언
          data="<p></p>"          //data 입력되는걸 보여줌
          onReady={editor => {
            console.log('Editor 정상 동작', editor);
          }}

          onChange={(event, editor) => {    //변화시에 실행되는 event
            const data = editor.getData();  //얻은 값들을 data 변수에 저장
            console.log({ event, editor, data }); //콘솔에 실행되는것들
            
            setContent({     
              ...Content,
              content: data   //data 값을 content로 저장
            })
            console.log(Content); 
          }}

          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
          //Focus랑 Blur

        />
      </div>
      <button className="submit-button"
      onClick={() => {    //click 이벤트 발생시에
        setViewContent(viewContent.concat({...Content}));
        //setViewContent 동작
      }}>업로드</button>
    </div>
  );
}
  
  export default Post;