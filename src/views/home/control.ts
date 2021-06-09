// declare function wxChooseImage(): void
import {
  Options,
  Vue
} from 'vue-class-component';

import {
  onBeforeMount,
  reactive,
  toRefs,
  ref
} from 'vue'

interface DataProps {
 

}
export default {
  components:{},
  setup(props: any,ctx:any) {
      const data: DataProps = reactive({
        
      })
    
      
      const refData = toRefs(data);
      onBeforeMount(() => {

      })
     
      return {
          ...refData
     
      };
  }

}