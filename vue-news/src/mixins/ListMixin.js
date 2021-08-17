import bus from '../utils/bus.js';

// mixin
export default {
    // 재사용할 컴포넌트 옵션 & 로직
    created() {
        bus.$emit('start:spinner');   // 데이터를 호출하기전에 spinner을 띄워놓고
        this.$store.dispatch('FETCH_LIST', this.$route.name) // 데이터를 호출하는것을(담아오는것) 의미함
        .then(() => {
            console.log('fetched')
            bus.$emit('end:spinner');  // 데이터를 담아오고 나서 3초후 spinner을 종료 
        })
        .catch((error) => {
            console.log(error);
      });
    }

}


// hoc
// export default function create(){
//     // 재사용할 컴포넌트 옵션
// }