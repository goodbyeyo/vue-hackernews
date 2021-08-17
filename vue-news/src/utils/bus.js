// 빈 이벤트 객체를 만들어서 컴포넌트간에 데이터를 전달하는 역할
import Vue from 'vue';
export default new Vue();

// export default 와 아닌것의 차이점 

// bus.js
// export const bun = new Vue();
// App.vue
// import { bus } from "./bus.js";


// bus.js
//export default new Vue();
// App.vue
//import bus from './bus.js';  // defalut로 선언하는 경우 자유롭게 Import 가능하다