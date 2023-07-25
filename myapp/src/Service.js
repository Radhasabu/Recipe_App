const queryStrings = {
    app_id : process.env.REACT_APP_APP_ID,
    app_key : process.env.REACT_APP_APP_KEY
}


//https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=9ffe6804&app_key=1503a109b62a382deb6b184930995b45


export const fetchData = async(defaulfQuery) =>{
    const {app_id,app_key} = queryStrings;
    try{
        const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaulfQuery}&app_id=${app_id}&app_key=${app_key}`);
        const response = await data.json();
        // console.log(response);
        return response;
    }
    catch(e){
        console.log(e,'something went wrong');
        return e;
    }
}

//https://api.edamam.com/api/recipes/v2/0209cb28fc05320434e2916988f47b71?type=public&app_id=9ffe6804&app_key=1503a109b62a382deb6b184930995b45

export const fetchTabData = async(defaulfQuery) =>{
    const {app_id,app_key} = queryStrings;
    try{
        const data = await fetch(`https://api.edamam.com/api/recipes/v2/${defaulfQuery}?type=public&app_id=${app_id}&app_key=${app_key}`);

        const response = await data.json();
        // console.log(response);
        return response;
    }
    catch(e){
        console.log(e,'something went wrong');
        return e;
    }
}