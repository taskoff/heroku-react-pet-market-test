const getPetInfo = async (id)=>{
    const promise = await fetch(`/details/${id}`);
    const res = await promise.json(); 
    return res;
}



export default getPetInfo;