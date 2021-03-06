import errorHandler from '../error-handler';

const authication = async (data, context, history, path)=>{
    try {
        const promise = await fetch(`/${path}`, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(data) ,
       })
       const res = await promise.json()
       const err = errorHandler(promise, res, history);
   
       if(!err){
           const authToken = promise.headers.get('Authorization');
           document.cookie = `x-auth-token=${authToken}`;
           context.loginIn(res.email, res._id);
           history.push('/')

       }

    } catch (e){
        console.log(e)
    }
}

export default authication;