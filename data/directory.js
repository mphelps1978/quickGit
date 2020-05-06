// In this file, you will add an array called 'students' of your students


// Example:

// const students = [{
//   dir: 'user_name',
//   user: 'github_User_Name'
// }];


const students = [
  {
    dir: 'TiffanyCrosby',
    user: 'TiffanyCrosby'
  }
]



// You also need to specify your filesystem and location of your students' individual directories
// for mac: the format would be /Home/user/gitRepos' (or wherever you have them stored)
// for windows: the format would be 'C:\\Users\\user_name\\directory_name\\'; (or simmilar)


const gitRepos = 'F:\\projects\\students\\user_name\\directory_name\\';


module.exports = {
  gitRepos,
  students
}


