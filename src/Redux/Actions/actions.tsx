/* eslint-disable prettier/prettier */
// synchronous action creator
export const increment = () => {
  return {
    type: 'INCREMENT',
  };
};

// asynchronous action creator
export const fetchData = () => {
  return (dispatch: any) => {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        dispatch({type: 'FetchData', data: json});
        console.log('JSON ', json);
      })
      .catch(ERROR => {
        dispatch({type: 'ERROR', msg: 'Unable to fetch data'});
        console.log('ERROR', ERROR);
      });
  };
};
