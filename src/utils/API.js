import students from '../db'

export default {
  fetchUsers: function() {
    return new Promise((resolve, reject) =>{
      let arr = students.map(s => {
        return {
          login: s.login,
          image: s.avatar_url,
          profileUrl: s.html_url         
          }
        })
      resolve(arr)
    }) 
  }
}
