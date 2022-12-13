import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTitle } from '../redux/reducers/book';

const BookBox = () => {
  const title = useSelector((state) => (state.book.title));
  const dispatch = useDispatch();
  const titleArea = useRef(null);

  return (
    <div>
        <h3>{title}</h3>
        <input type="text" name="" id="" ref={titleArea} />
        <button onClick={() => {dispatch(setTitle(titleArea.current.value))}}>ref와 버튼으로 바꾸기</button>
    </div>
  )
}

export default BookBox