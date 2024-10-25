const studentsAPI1 = [
    { name: "Alice", marks: "95%", registrationID: "1001" },
    { name: "Bob", marks: "88%", registrationID: "1002" },
    { name: "Charlie", marks: "92%", registrationID: "1003" },  // Common student
    { name: "David", marks: "85%", registrationID: "1004" }
  ];
  
  // Mock data for API 2
  const studentsAPI2 = [
    { name: "Eve", marks: "90%", registrationID: "1005" },
    { name: "Frank", marks: "93%", registrationID: "1006" },
    { name: "Charlie", marks: "92%", registrationID: "1003" },  // Common student
    { name: "George", marks: "89%", registrationID: "1007" }
  ];

  const mockFetch1 = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({...studentsAPI1})
        },1000)
    })
  }
  const mockFetch2 = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({...studentsAPI2})
        },1000)
    })
  }
  Promise.all([mockFetch1(), mockFetch2()]).then((res)=>{
    let arr = [...Object.values(res[0]), ...Object.values(res[1])]
    let seen  = new Set()
    let ans = arr.filter((ele)=>{
      if(seen.has(ele.registrationID)) return false
      else {seen.add(ele.registrationID); return true}
    })
    console.log(ans)
  })
  