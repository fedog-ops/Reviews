import axios from 'axios'

const url = axios.create({ baseURL: 'https://felix-boardgame-server.cyclic.app/api/' })
// 
export const getReviews = (sort_by = 'created_at', order_by = 'DESC') => {
    return url.get(`reviews?sort_by=${sort_by}&order_by=${order_by}`).then((res) => {return res.data.reviews})
}
export const getCategories = () => {
    return url.get('categories').then((res) => {return res.data})
}
export const getUsers = () => {
    return url.get('users').then((res) => {return res.data.users})
}
export const getReviewById = (review_id) => {
    return url.get(`reviews/${review_id}`).then((res) => {return res.data.review})
}
export const updateVotes = (review_id, votesinc) => {
    return url.patch(`reviews/${review_id}` , {inc_votes:votesinc}).then((res) => {return res.data})
}
export const getComments = (review_id) => {
    return url.get(`reviews/${review_id}/comments`).then((res) => {return res.data.comments})
}
export const addComment = (review_id, username, body) => {
    return url.post(`reviews/${review_id}/comments` , {username, body})
    .then((res) => {})
}
export const deleteCommentById = (comment_id) => {
    return url.delete(`comments/${comment_id}`)
    .then((res) => {})
}