const updateMessages = async (data, id)=>{
    const promise = await fetch(`/message/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) ,
      })
      const res = await promise.json()
};

export default updateMessages;