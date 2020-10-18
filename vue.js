new Vue({
        el: '#app',
        data:{
          urlSearch:'',
          url:'',
          download_data: [],
        },
        methods: {
          convertTimestamp(timestamp) {
              var d = new Date(timestamp * 1000), 
              yyyy = d.getFullYear(), 
              mm = ('0' + (d.getMonth() + 1)).slice(-2),
              dd = ('0' + d.getDate()).slice(-2), 
              hh = ('0' + d.getHours()).slice(-2),
              h = hh,
              min = ('0' + d.getMinutes()).slice(-2), 
              sec = ('0' + d.getSeconds()).slice(-2),
              time; 
              time = h + ':' + min  + ':' + sec+ ' ' + yyyy + ' - ' + mm + ' - ' + dd ;
              return time;
            },
          getContent(){
              axios.get(url).then((response) => {
                this.download_data = response.data.data;
              });
            },
          form(event){
            let regexp = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$/;
            let regexpa = /^(https?:\/\/)/;
            if(this.urlSearch.match(regexp)){
              url=this.urlSearch;
              if(this.urlSearch.match(regexpa)){
              }else{
                this.urlSearch = 'https://'+this.urlSearch;
                url=this.urlSearch;
                return url;
              }
            }else{
              alert("Адрес неккоректный")
            }
          },
          
          

        },

        
      })