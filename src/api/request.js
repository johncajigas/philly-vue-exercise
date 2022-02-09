const request = (url,cb) => fetch(url).then(async res=> {
    const json = await res.json();
    return cb(json)   
}).catch(e=>cb(null,e));
export const getPage = async (id,cb)  => {
    request(`https://locations-staging-admin.phila.gov/love-park/wp-json/pages/v2/archive?id=${id}`,(data,err)=>{
       if(err) return cb(null,err)
       const {bg_color,title,page_content,content} = data;
       return cb({bg_color,title,page_content,content});
     
    })
}
export default request;
  
