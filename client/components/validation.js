export const getId = (id) => {
    if (String(id).length === 1){
        return "00"+id;
    }else if (String(id).length === 2){
        return "0"+id;
    }else{
        return id;
    }
}