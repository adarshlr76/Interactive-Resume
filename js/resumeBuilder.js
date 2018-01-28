var bio = {

    "name": "Adarsh Lakshmansandra Raju",
    "role": "full stack developer",
    "contacts": {
        "mobile": "(+91) 7019197584",
        "email": "ra50@hw.ac.uk",
        "github": "https://github.com/adarshlr76",
        "location": "bangalore"
    },
    "welcomeMessage": "",
    "skills": ["python", "c++", "C#", "HTML", "CSS", "MySQL", "Oracle"],
    "bioPic": "images/Adarsh.jpg",
    //"biopic" : "",
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        var fBioPic = HTMLbioPic.replace("%data%", this.bioPic);
        var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%", this.contacts.mobile);
        var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
        var fGitHub = HTMLgithub.replace("%data%", this.contacts.github);
        var fLocation = HTMLlocation.replace("%data%", this.contacts.location);
        var fWelcome = HTMLwelcomeMsg.replace("%data%", "Qualified IT professional with experience in solution development");


        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);



        //$("#header ul").append(formattedContactGeneric);
        $("#header ul").append(formattedMobile);
        $("#header ul").append(formattedEmail);
        $("#header ul").append(fGitHub);
        $("#header ul").append(fLocation);
        $("#header").append(fBioPic);
        $("#header").append(fWelcome);
        $("#header").append(HTMLskillsStart);

        for (x = 0; x < this.skills.length; x++) {
            var fSkill = HTMLskills.replace("%data%", this.skills[x]);
            $("#skills").append(fSkill);
        }




    }

};



var education = {
    schools: [{
        "name": "BIT",
        "location": "Bangalore",
        "degree": "BE",
        "majors": "EEE",
        "dates": "From : 1994 , To : 1998",
        "url": " http://www.bit-bangalore.edu.in/ "
    }],
    onlineCourses: [{
        "title": "Full stack web developer ",
        "school": "Udacity",
        "dates": "2018",
        "url": "www.udacity.com"
    }],
    display: function() {
        $("#education").append(HTMLschoolStart);

        for (i = 0; i < this.schools.length; i++) {
            var fSchool = HTMLschoolName.replace("%data%", this.schools[i].name);
            var fDegree = HTMLschoolDegree.replace("%data%", this.schools[i].degree);
            var fDates = HTMLschoolDates.replace("%data%", this.schools[i].dates);
            var fLocation = HTMLschoolLocation.replace("%data%", this.schools[i].location);
            var fMajors = HTMLschoolMajor.replace("%data%", this.schools[i].majors);
            $(".education-entry:last").append(fSchool + fDegree);
            $(".education-entry:last").append(fDates);
            $(".education-entry:last").append(fLocation);
            $(".education-entry:last").append(fMajors);
        }

        $(".education-entry:last").append(HTMLonlineClasses);
        for (j = 0; j < this.onlineCourses.length; j++) {
            var fTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[j].title);
            var fSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[j].school);
            var fDates = HTMLonlineDates.replace("%data%", this.onlineCourses[j].dates);
            var fUrl = HTMLonlineURL.replace("%data%", this.onlineCourses[j].url);
            $(".education-entry:last").append(fTitle + fSchool);
            $(".education-entry:last").append(fDates);
            $(".education-entry:last").append(fUrl);
        }

    }
};


var work = {
    "jobs": [{
            "employer": " IIHT Ltd ",
            "title": "IT Trainer",
            "location": "bangalore",
            "dates": "2013-2016",
            "description": "Provided training on Java Hadoop"
        },
        {
            "employer": " IBM ",
            "title": "Software developer",
            "location": "bangalore",
            "dates": "2010-2012",
            "description": "Balanced warehouse tools developer"
        }
    ],
    display: function() {
        $("#workExperience").append(HTMLworkStart);

        for (i = 0; i < this.jobs.length; i++) {
            var fEmployer = HTMLworkEmployer.replace("%data%", this.jobs[i].employer);
            var fTitle = HTMLworkTitle.replace("%data%", this.jobs[i].title);
            var fDates = HTMLworkDates.replace("%data%", this.jobs[i].dates);
            var fLocation = HTMLworkLocation.replace("%data%", this.jobs[i].location);
            var fDesc = HTMLworkDescription.replace("%data%", this.jobs[i].description);
            $(".work-entry:last").append(fEmployer + fTitle);
            $(".work-entry:last").append(fDates);
            $(".work-entry:last").append(fLocation);
            $(".work-entry:last").append(fDesc);
        }
    }

};



var projects = {
    "projects": [{
            "title": "Item Catalog",
            "dates": "2018",
            "description": "List of items in different categories",
            "images": [" ", " "]
        },
        {
            "title": "Online Resume",
            "dates": "2018",
            "description": "jquery, javascript based single page Resume",
            "images": [" ", " "]
        }
    ],
    display : function() {
    	 $("#projects").append(HTMLprojectStart);

        for (i = 0; i < this.projects.length; i++) {
            var fTitle = HTMLprojectTitle.replace("%data%", this.projects[i].title);
            var fDates = HTMLprojectDates.replace("%data%", this.projects[i].dates);
            var fDesc = HTMLprojectDescription.replace("%data%", this.projects[i].description);
            var fImages = HTMLprojectImage.replace("%data%", this.projects[i].images);
            $(".project-entry:last").append(fTitle);
            $(".project-entry:last").append(fDates);
            $(".project-entry:last").append(fDesc);
            $(".project-entry:last").append(fImages);
        }
    }
};

bio.display();
work.display();
projects.display();
education.display();