var skills = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Sass', 'Git'];
var bio = {
	"name" : "Jonathan Seligsohn",
	"role" : "Front-end Developer",
	"contacts" : {
		"email": "jbseligsohn@gmail.com",
		"phone" : "610.306.0527",
		"github" : "jseligsohn",
		"location" : "Philadelphia, PA"
	},
	"picUrl" : "images/me.png",
	"age" : 26,
	"welcomeMessage" : "Take a look at my resume. Let's talk and hopefully we can work together!",
	"skills" : skills
}

var work = {
	"jobs" : [
		{
			"employer" : "Self-employed",
			"title" : "Freelance Graphic Designer and Web Developer",
			"location" : "Philadelphia, PA",
			"dates" : "September 2012 - Present",
			"description" : "Design custom e-mail templates, flyers and postcards. Develop and build custom WordPress themes. Refactor code to create responsive websites, optimized for mobile."
		},		
		{
			"employer" : "Mekorot",
			"title" : "Web Developer",
			"location" : "Philadelphia, PA",
			"dates" : "July 2013 - July 2014",
			"description" : "Designed and developed the user interface for educational technology app with a focus on the user experience. Designed, customized and implemented an instance of a Learning Management System for a network of schools. Train teachers and students to use the software."
		},
		{
			"employer" : "Kohelet Yeshiva High School",
			"title" : "Technology Specialist ",
			"location" : "Philadelphia, PA",
			"dates" : "September 2012 - August 2013",
			"description" : "Implemented school-wide use of iPads, mentoring teachers and students to better use technology to support classroom learning."
		}
	]
}

var education = {
	"schools":[
		{
			"name" : "Treehouse",
			"location" : "Orland, FL",
			"dates" : "2008-2011",
			"degree" : "N/A",
			"major" : "Front-end Web Development",
			"url" : "http://www.teamtreehouse.com"
		},
		{
			"name" : "Yeshiva College",
			"location" : "New York, NY",
			"dates": "2012-Present",
			"degree" : "BA",
			"major" : "Mathematics",
			"url" : "http://www.yu.edu"
 		}
	],
	"OnlineCourses":[
		{
			"title" : "Introduction to Programming in Python",
			"school" : "Coursera",
			"dates" : 2012
		},
		{
			"title" : "SaaS",
			"school" : "EdX",
			"dates" : 2013
		}	
	]
}

var projects = {
	"projects" : [
		{
			"title" : "Portfolio Site",
			"dates" : "October 2014",
			"description" : "A portfolio site to host pictures and links to other projects",
			"images" : ["images/project1.png"]
		}
	]
}

bio.display = function() {
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	var formattedContact = HTMLcontactGeneric.replace('%data%', bio.contacts.phone).replace('%contact%', 'phone');
	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
	var formattedgitHub = HTMLgithub.replace('%data%', bio.contacts.github);
	var formattedbioPic = HTMLbioPic.replace('%data%', bio.picUrl);
	var formattedWelcome = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);

	$('#header').prepend(formattedRole);
	$('#header').prepend(formattedName);
	$('#topContacts').append(formattedContact, formattedEmail, formattedgitHub, formattedLocation);
	$('#header').append(formattedbioPic);
	if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[skill])
			$('#skills').append(formattedSkill);
		}
	}	
	$('#header').append(formattedWelcome);
	$('#footerContacts').append(formattedContact, formattedEmail, formattedgitHub, formattedLocation)
}


// $(document).click(function(loc) {
// 	var x = loc.pageX;
// 	var y = loc.pageY;
// 	logClicks(x, y);
// });

// function locationizer(work_obj) {
//     var locations = [];
//     for (job in work_obj.jobs) {
//         locations.push(work_obj.jobs[job].location);
//     }
//     return locations;
// }

work.display = function() {
	for (job in work.jobs) {
		$('#workExperience').append(HTMLworkStart)
		var formattedworkEmployerTitle = HTMLworkEmployer.replace('%data%', work.jobs[job].employer) + HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formattedworkLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
		var formattedworkDates = HTMLworkDates.replace('%data%', work.jobs[job].dates); 
		var formattedworkDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
		$('.work-entry:last').append(formattedworkEmployerTitle, formattedworkLocation, formattedworkDates, formattedworkDescription);
	};
}

projects.display = function() {
	for (project in projects.projects) {
		$('#projects').append(HTMLprojectStart);
		var proj = projects.projects[project];
		var formattedprojTitle = HTMLprojectTitle.replace('%data%', proj.title);
		var formattedprojDates = HTMLprojectDates.replace('%data%', proj.dates);
		var formattedprojDescription = HTMLprojectDescription.replace('%data%', proj.description);
		var formattedprojImage;
		if (proj.images.length > 0) {
			for (image in proj.images) {
			formattedprojImage = HTMLprojectImage.replace('%data%', proj.images[image]);
			}
		}
		
		$('.project-entry:last').append(formattedprojTitle, formattedprojDates, formattedprojDescription, formattedprojImage)
	}
}

education.display = function() {
	for (school in education.schools) {
		$('#education').append(HTMLschoolStart);
		var skool = education.schools[school];
		var formattedName = HTMLschoolName.replace('%data%', skool.name) + HTMLschoolDegree.replace('%data%', skool.degree);
		var formattedDates = HTMLschoolDates.replace('%data%', skool.dates);
		var formattedLocation = HTMLschoolLocation.replace('%data%', skool.location);
		var formattedMajor = HTMLschoolMajor.replace('%data%', skool.major);
		$('.education-entry:last').append(formattedName,formattedDates,formattedLocation,formattedMajor);
	}
	$('#education').append(HTMLonlineClasses);
	for (course in education.OnlineCourses) {
		$('#education').append(HTMLonlineCourseStart);
		var course = education.OnlineCourses[course];
		var formattedTitle = HTMLonlineTitle.replace('%data%', course.title);
		var formattedSchool = HTMLonlineSchool.replace('%data%', course.school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		var formattedDates = HTMLonlineDates.replace('%data%', course.dates);
		$('.course-entry:last').append(formattedTitleSchool, formattedDates);
	}
}

bio.display();
work.display();
education.display();
projects.display();

$('#mapDiv').append(googleMap);
