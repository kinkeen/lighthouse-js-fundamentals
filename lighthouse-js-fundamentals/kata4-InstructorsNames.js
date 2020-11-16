
  const instructorWithLongestName = function(instructors) {
    let longest = instructors[0].name;
    let newArray = {name: instructors[0].name, course: instructors[0].course};

		for (let i = 1; i <instructors.length; i++) {
       let name1 = instructors[i].name;
       if (longest.length < name1.length) {
         longest = name1;
         newArray.name = instructors[i].name;
         newArray.course = instructors[i].course;
    		}
  	}
  	return newArray;
  }

  var instructors1 = [
  	{name: "Samuel",   course: "iOS"},
    {name: "Jeremiah", course: "Web"},
    {name: "Ophilia",  course: "Web"},
    {name: "Donald",   course: "Web"}
	]; 

  var instructors2 = [
    {name: "David", course: "iOS"},
    {name: "Domascus", course: "Web"},
    {name: "Matthew", course: "Web"}
	];
   
  console.log(instructorWithLongestName(instructors1)); //{name: "Jeremiah", course: "Web"}    
  console.log(instructorWithLongestName(instructors2)); //{name: "Domascus", course: "Web"}

