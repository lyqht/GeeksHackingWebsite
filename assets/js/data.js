var data = {
    upcoming: {
        name: "NodeJS",
        link: "http://nodejs.geekshacking.com/?fbclid=IwAR1BoAoqXMgc2m0EUe9xAtujySn-YZpRYBYCLEv-qpbP-2JBD1C4TvLBPdQ"
    },

    video: "https://www.youtube.com/embed/seGGYxlfKsM?wmode=opaque",
    events: [
        {
            name: "NodeJS",
            photos: 0,
            description: "In a little more then 7 years, NodeJS has become widely accepted and used in production environments. Gone are the days where you need to run App / Web Servers using Java, .NET or PHP. You can now have both front end and back end environments in Javascript. This workshop hopes to familiarize participants with Node and Express giving you a hands on experience developing a REST API of your own."
        },
        {
            name: "Docker",
            photos: 0,
            description: "We'll be introducing containerization for this workshop. Docker, which has risen from the rank and is used now by a lot of developers/companies. Containerization would be a very useful tool that you can implement in your own project or even in the company you are working for."
        },
        {
            name: "python",
            photos: 0,
            description: "On the 1st of June 2019, Johan taught us about python development. The people had a fun learning and the examples/exercises were easy to follow. Thanks for the successful event! Special thanks to the sponsor who made this event possible."
        },
        {
            name: "hackomania 2019",
            photos: 0,
            description: ""
        },
        {
            name: "UX",
            photos: 8,
            description: ""
        },
        {
            name: "Android workshop",
            photos: 8,
            description: "On the 8th of September 2018, we had fun learning Android to develop apps for Android platforms! Previously we learned how to develop in iOS. This enables us to develop real mobile applications for both popular mobile OS (Hmm, isn't that awesome?). Thanks for another successful event! Special thank to StackUp who generously provided the place for this workshop. DynamicWeb and NavTech also made this event possible."
        },
        {
            name: "swift",
            photos: 0,
            description: "On the 2nd of June 2018, we had fun learning Swift to develop apps for Apple platforms! There was a great mixtures of experienced and newbie developer, in the midst of that everyone helped each other and learned new things together. Thanks for the successful event! Special thank to Paypal who generously hosted us and sponsored food and refreshments. DynamicWeb also came behind us to back the event."
        },
        {
            name: "hackomania 2018",
            photos: 0,
            description: "HackOMania is an annual flagship event of GeeksHacking Community that brings students and tech professionals together over 24 hours to tackle real world challenges. This year, we want to work on Creating Smart Homes. With the advent of the Internet of Things (IoT) and the ubiquitous mobile phone, the home surprisingly remains largely unchanged. We envision that through HackOMania 2018, we would be able to synergize the conveniences that tech has already given us with everyday use cases; creating solutions using machine learning and AI that would impact our everyday life at home. We had an overwhelming number of participants who joined and presented different great ideas. There was a total of 17 groups.  See more of their ideas here hackomania.geekshacking.com:8080/index.html. Thanks for all the sponsor who made this event possible."
        },
        {
            name: "react native",
            photos: 0,
            description: "On the 11th of November, we invited Stacy who shared the basic principles of React and React Native with us. The participant were immersed in building native mobile apps using JavaScript and React. It was a full house with many more hoping to get a slot to join us. Thanks for the successful event! Special thank to Paypal who generously hosted us and sponsored food and refreshments. DynamicWeb also came behind us to back the event."
        },
        {
            name: "machine learning",
            photos: 0,
            description: "On the 1st of September of 2017, GeeksHacking was privileged to have a Google Developer Expert for Machine Learning come and share. He gave an introduction to Machine Learning, TensorFlow and some Google Machine Learning APIs. Participants also had a hands-on session to develop their very first machine learning model. This event is supported by SGInnovate."
        },
        {
            name: "hybrid mobile app",
            photos: 12,
            description: ""
        },
        {
            name: "hackomania 2017",
            photos: 0,
            description: ""
        }
        // {
        //     name: "C++",
        //     photos: 0,
        //     description: ""
        // },
        // {
        //     name: "css",
        //     photos: 9,
        //     description: ""
        // },
        // {
        //     name: "3D Printing",
        //     photos: 0,
        //     description: ""
        // },
        // {
        //     name: "Javascript",
        //     photos: 0,
        //     description: ""
        // }
    ]
}

var featuredThumbnail = document.getElementsByClassName("mu-header-featured-img")[0].getElementsByTagName("img")[0];

var featuredContent = document.getElementsByClassName("mu-header-featured-content")[0];
var featuredHeader = featuredContent.getElementsByTagName("h1")[0].getElementsByTagName("span")[0];
var featuredDescription = featuredContent.getElementsByTagName("p")[0];

var registerButton = document.getElementsByClassName("mu-apple-btn")[0];
registerButton.href = data.upcoming.link;

var pastEvents = document.getElementById("mu-apps-screenshot");
var slider = pastEvents.getElementsByClassName("mu-apps-screenshot-slider")[0];

// slider.innerHTML = "Hello world";
var content = "";

for (var index in data.events) {
    let event = data.events[index]; 
    let name = event.name;
    let src = "assets/images/Geekshacking/Events/" + name + "/banner.jpg";
    content += "<div class=\"mu-single-screeshot\"><img src=\"" + src + "\" alt=\"App screenshot img\"></div>";

    if (name == data.upcoming.name) {
        featuredThumbnail.src = src;
        featuredHeader.innerText = name;
        featuredDescription.innerText = event.description;
    }
}

slider.innerHTML = content;

var videoFrame = document.getElementsByClassName("mu-video-iframe")[0];
videoFrame.src = data.video;