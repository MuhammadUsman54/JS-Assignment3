var userdata = [
    { name:"Usman", rollno:91 , grade:"A"  },
    { name:"Abdullah", rollno:92 , grade:"B" },
    { name:"Zeeshan", rollno:93 , grade:"A1" },
    { name:"Khalid", rollno:94 , grade:"B" },
];

var inputrolno = prompt("Enter your roll number");

if(inputrolno === null) {
    alert("Search canceled");
   
}

var rollno = parseInt(inputrolno);

var found = false;

for (var i = 0; i < userdata.length; i++) {
    if (userdata[i].rollno === rollno) {
       alert(`Data Found:\nName: ${userdata[i].name}\nRoll No: ${userdata[i].rollno}\nGrade: ${userdata[i].grade}`);
       
        break;
    }
    else{
       alert("Please enter correct roll number");
        
    }
}
       
