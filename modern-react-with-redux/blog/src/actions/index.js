import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// export const fetchPosts = async () => {

//     // // bad approach!!! breaking rules for action creators
//     // const response = await jsonPlaceholder.get('/posts');

//     // return {
//     //     type: 'FETCH_POST',
//     //     payload: response
//     // };

//     // return async function (dispatch, getState) {
//     //     const response = await jsonPlaceholder.get('/posts');

//     //     dispatch({ type: 'FETCH_POSTS', payload: response });
//     // };

//     return async (dispatch) => {
//         const response = await jsonPlaceholder.get('/posts');

//         dispatch({ type: 'FETCH_POSTS', payload: response });
//     }
// };

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// export const fetchUser = (id) => async dispatch => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: response.data });
// };

// export const fetchUser = function (id) {
//     return async function (dispatch) {
//         const response = await jsonPlaceholder.get(`/users/${id}`);
//         dispatch({ type: 'FETCH_USER', payload: response.data });
//     }
// }

// export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // userIds.forEach(id => dispatch(fetchUser(id)));

    _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};