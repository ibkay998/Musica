const getSearchList = (store,search) => {
    const final = []
    for(let i=0;i < store.length;i++){
        if(store[i].title.toLowerCase().includes(search.toLowerCase())){
            final.push(store[i])
        }
    }
  return final
}

export default getSearchList
