const initialPage = {
  page: 1
}

const initialProfile = {
  name: ""
}

export function Page(state=initialPage, action){
  let obj = Object.assign({}, state);
  
  switch(action.type){
    case "CHANGE_PAGE":
      //do command
      obj.page = action.page;
      return obj;
      
    default:
      return state;
  }
}

export function Profile(state = initialProfile, action){
  let obj = Object.assign({}, state);
  
  switch(action.type){
    case "CHANGE_PROFILE":
      obj.name = action.name;
      return obj;
      
    default:
      return state;
  }
}

