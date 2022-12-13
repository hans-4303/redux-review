import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increase, setDouble } from '../redux/reducers/number';
/* useSelector Hook을 다룬다.

modules/index.js의 전체 state에 접근한다.

state.number는 reducers/index.js에 호출한 {number}, 기본형 리듀서를 의미한다.

state.number.number 형태로 number.js의 state 객체의 number 숫자 값을 가져온다. */

const NumberBox = () => {
  const number = useSelector((state) => (state.number.number));
  const dispatch = useDispatch();

  return (
    <div>
        <p>number: {number}</p>
        {/* <button onClick={() => dispatch({type: "INCREASE"})}>+1</button> */}
        <button onClick={() => dispatch(increase())}>+1</button>
        {/* <button onClick={() => dispatch({type: "SET_NUMBER", payload: number * 2})}>*2</button> */}
        <button onClick={() => dispatch(setDouble(number))}>*2</button>
    </div>
  )
}

export default NumberBox