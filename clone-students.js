const Git = require('nodegit')
const path = require('path')
const fs = require('fs')
const readline = require('readline')
const git = require('./data/directory')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const Repos = git.gitRepos
const students = git.students
const repoUrl = 'https://github.com'



// we need to make a directory for the new repo we're about to clone down
const makeDir = (dirPath) => {
  if (fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
  }
  return dirPath
}

//get the full url to the student's repo
const getRepoUsername = (name) => {
  return `${repoUrl}/${name}/${repoName}`
}

// go up one level and get the student's base directory
const getFilePath = dir =>{
  return Repos + dir
}

// ok it's time now to make things happen


function cloneRepo(repoName) {
  return new Promise(function(resolve, reject) {
    console.log('Starting to clone repositories...');
    var promises = [];
    students.forEach(function(s) {
      var url = getRepoUsername(s.user);
      var userDirectory = getFilePath(s.dir);
      var gitDirectory = makeDir(userDirectory + repoName);
      var p = Git.Clone(url, gitDirectory).then(repo => {
        console.log(`\x1b[35mCloned: ${path.basename(url)} to \x1b[42m${repo.workdir()}\x1b[0m`)
      })
      .catch(err => console.log(err))
      promises.push(p);
    })
    console.log(promises)
    Promise.all(promises).then(function() {
      resolve(console.log('\Fin...'));
    }).catch(function (e) {
      reject(e);
    })
  })
}

  const repoName = rl.question('Enter the Repo Name: ', function(repoName) {
    return cloneRepo(repoName)
    rl.close()
  })
  rl.on('close', function(){


    console.log('\nThanks!');
  })






