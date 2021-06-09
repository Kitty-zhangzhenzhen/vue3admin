// declare function wxChooseImage(): void

  import {
    onBeforeMount,
    onMounted,
    reactive,
    toRefs,
    ref
  } from 'vue'
  import html2canvas from 'html2canvas';
  interface DataProps {
     url:string
  }
  export default {
    name:'html2Canva',
    components:{
     
    },
    setup(props: any,ctx:any) {
    
        const data: DataProps = reactive({
            url:''
        })
        const refData = toRefs(data);
        onBeforeMount(() => {
        })
        onMounted(()=>{
           
            setTimeout(()=>{
                html2canvas(document.body as any,{
                    backgroundColor: 'transparent',
                    allowTaint:false,
                    logging:true,
                    useCORS:true
                }).then((canvas:any)=>{
                    data.url = canvas.toDataURL();
                   
                })
            },1000)
           
         
        })
        return {
            ...refData
        };
    }
  
  }