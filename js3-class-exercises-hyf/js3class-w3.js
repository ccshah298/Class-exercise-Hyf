//Create a user class--------
class User {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    getFirstName() {
      return this.firstName;
    }
    //Create a class method
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  //Use the new keyword and assign the instance in a variable.
  const user = new User("Charmi", "Shah");
  //Try to log out the instance of the User to the console.
  console.log(user);
  //Try to log out the users firstName
  console.log(user.getFirstName()); 
  //Call the getFullName method and log the result to the console.
  console.log(user.getFullName());

  //Creating a CV class-------
  //part 1
  //Create the classes Job and Education.
  //Job has five properties: id, title, description, startDate and endDate (the dates can be strings or actual Date objects).
  class Job{
      constructor(id,title,discription,startDate,endDate){
          this.id = id;
          this.title = title;
          this.discription = discription;
          this.startDate = startDate;
          this.endDate = endDate;
      }
  };
  //Education has six properties: id, title, school, address, startDate and endDate.
  class Education{
      constructor(id,title,school,adress,startDate,endDate){
          this.id = id;
          this.title = title;
          this.school = school;
          this.adress = adress;
          this.startDate = startDate;
          this.endDate = endDate;
      }
  };
  //part 2
  class CV {
    constructor(email) {
      this.jobs = [];
      this.educations = [];
      this.email = email;
    }
    renderCv(){
      const elementUl = document.getElementById("job");
      const elementLi = document.createElement("li");
      for (let i = 0; i < this.jobs.length; i++){
        elementLi.innerHTML = this.jobs[i];
      }
      elementUl.appendChild(elementLi);
    }
   
    /*
    class CV {
        constructor (jobs,educations,email){
            this.jobs = Job;
            this.educations = Education;
            this.email = email;
        }
    }
    */
   
    addJob(job) {
      this.jobs.push(job);
    }
  
    removeJob(job) {
    this.jobs = this.jobs.filter((jobElement)=>jobElement.id !== job.id);
    }
    /*
   removeJob(job){
       for(let i = 0; i<this.jobs.length; i++){
           const j = this.jobs[i];
           if(j.id === job.id){
               this.jobs.splice(i,1);
               return;
           }
       }
   }
    */
  
    addEducation(education) {
      this.educations.push(education);
    }
  
    removeEducation(education) {
     this.educations = this.educations.filter((educationElement)=>educationElement.id !== education.id);
    }
    
  }
  //part 3
  //Apply the methods you have created on the myCV object. Create a few Job and Education objects 
   const myCv = new CV ("ccshah298@gmail.com");
   const job1 = new Job(
      1,
      "Administration",
      "Coordinate with team",
      "1/1/2020",
      "1/1/2025"
     );
     console.log(job1);
   const job2 = new Job(
    2,
    "Associate Manager",
    "managing team",
    "1/1/2025",
    "1/8/2030"
    );
    console.log(job2);
    const education1 = new Education(
        1,
        "Web development",
        "Hack Your Fature",
        "Disie, Vesterbro",
        "11/9/2020",
        "15/4/2021"
    );
    console.log(education1);
    const education2 = new Education(
        2,
        "Diploma in Mediology",
        "KIA institute",
        "Copenhagen K",
        "1/5/2017",
        "1/10/2019"
    );
   console.log(education2);
   //add a job and an education from myCV.
   myCv.addJob(job1);
   myCv.addJob(job2);
   myCv.addEducation(education1);
   myCv.addEducation(education2);
   //Remove a job and an education from myCV.
   myCv.removeEducation(education1);
   myCv.removeJob(job2);
   //Log myCV to the console, again, and check that the objects were removed correctly.
   console.log(myCv);

   //part-4
   myCv.renderCv();
   

