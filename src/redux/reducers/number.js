/* 기본 reducer는 초기 값을 뜻하는 객체와
값을 수정, 또는 사용하는 리듀서 함수로 이뤄진다. */

const initialState = {
    number: 0
}

/* 리듀서의 파라미터는 초기 값과
호출 받을 때 결정될 action으로 이뤄진다. */
function number (state = initialState, action) {
    /* action에 대한 조건을 따지면 되기 때문에,
    조건문 혹은 switch문을 작성해줄 수 있다. */

    switch (action.type) {
        /* action의 타입을 따라 움직이도록 했고, 각 case에 반응한다. */

        case "INCREASE":
            /* 스프레드 연산자를 통해 영향을 주지 않을 state는 보존한다. */
            return { ...state, number: state.number + 1}

        case "SET_DOUBLE":
            return {...state, number: action.payload}

        default:
            return state;
    }
}

export const increase = () => ({type: "INCREASE"});
export const setDouble = (num) => ({type: "SET_DOUBLE", payload: num * 2});

export default number;