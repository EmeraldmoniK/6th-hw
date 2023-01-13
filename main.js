let user = []


for(i = 0; i < Infinity; i++){
    let obj = prompt('add,  чтобы добавить, del, чтобы удалить, stop чтобы остановить');
    let res = obj.split(', ')


    if(res[0] === 'add' ){
        user.push(res[1])

    }else if(res[0] === 'del'){
        for(let a = 0; a < user.length; a++ ){
            user[a] == res[1] ? user.splice(a, 1) : '' ;
        }
        
    }else if (res[0] == 'stop'){
        break;
    }
    console.log(user);
}
console.log(user);
