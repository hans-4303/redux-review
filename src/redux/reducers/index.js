/* 파일 명을 index라고 둬서 기본 경로로 지정할 수 있다.
그리고 사용할 데이터와 종류가 많아지면 따로 관리했다가 이 파일에서 묶도록 한다. */

import { combineReducers } from 'redux';
import number from './number';
import book from './book';

/* 작성한 js 파일들을 들고온 뒤 객체 형태로 묶어줄 수 있다. */
const rootReducer = combineReducers({number, book});

/* 이름을 그대로 사용할 수 있게 내보내준다(?) */
export default rootReducer;