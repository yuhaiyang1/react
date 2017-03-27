//reducer是根据action返回state

const todos = (state = {type:'off','txt':'on'}, action) => {
    console.log(action,'action')
  switch (action.type) {
    case 'on':
      return {
          txt:action.txt
      }
    case 'off':
        return {
            txt:action.txt
    }
    default:
      return state;
  }
};

export default todos;
