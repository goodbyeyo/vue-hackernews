import ListView from './ListView.vue';
import bus from '../utils/bus.js';

export default function createListView(name) {
     return {
         // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
         name: name,
         created() {
            bus.$emit('start:spinner');   // 데이터를 호출하기전에 spinner을 띄워놓고
            setTimeout(() => {
              this.$store.dispatch('FETCH_LIST', this.$route.name) // 데이터를 호출하는것을(담아오는것) 의미함
              .then(() => {
                console.log('fetched')
                bus.$emit('end:spinner');  // 데이터를 담아오고 나서 3초후 spinner을 종료 
              })
              .catch((error) => {
                console.log(error);
              });
            }, 2000);
         },
         render(createElement) {    // 내부적으로 compile 변환할때 render 함수 사용
             return createElement(ListView);
         }
     }
 }   