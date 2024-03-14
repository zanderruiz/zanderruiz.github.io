const logotext = "ZANDER";
const meta = {
    title: "Zander Ruiz - Software Developer",
    description: "I’m John Doe data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "I’m Zander Ruiz",
    animated: {
        first: "Software Developer",
        second: "Satellite Systems Engineer",
        third: "Full-stack Programmer",
        fourth: "Embedded Programmer",
    },
    description: "I'm a software developer with a keen interest in pushing boundaries. From building satellites to tinkering with accessibility tech, I'm on a mission to innovate and shape a brighter future.",
    your_img_url: "https://i.postimg.cc/L43f4QbG/portrait-photo.png",
};

const dataabout = {
    title: "A bit about my self",
    aboutme: "Passionate about leveraging technology for positive change, I'm a software developer with a keen interest in pushing boundaries. From building satellites to tinkering with accessibility tech, I'm on a mission to innovate and shape a brighter future.",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Djano",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [
    {
        img: "https://i.postimg.cc/pLgW52wX/dreamstime-l-178196981-604a901d112dc-ezgif-com-crop.png",
        proj_title: "Satellite LED Control Component",
        description: "A space-ready LED satellite component built using NASA's C++-based F' framework. Developed according to rigorous spacecraft software design principles, enabling real-time execution of ground station commands and event-driven responses on a physical ARM processor.",
        link: "https://github.com/zanderruiz/fprime-led-blinker",
    },
    {
        img: "https://i.postimg.cc/QML5bZ20/LMS-Portfolio-Picture.png",
        proj_title: "Learning Management System Site",
        description: "A web application designed to provide a user-friendly interface for students and course staff to interact with academic content, featuring an intuitive frontend and a robust backend powered by Django.",
        link: "https://drive.google.com/drive/folders/1qnH6RnQm00TXdq523-Uu47KvJUXGr50L?usp=drive_link",
    },
    {
        img: "https://i.postimg.cc/5N4TgZB5/flappy-portfolio-img.jpg",
        proj_title: "Webcam Flappy Bird",
        description: "A creative take on the popular mobile game \"Flappy Bird,\" designed to be played using a webcam to track a specific object's movement. It explores the concept of using computer vision to interact with a game, simulating the kind of tracking software employed by video applications like Snapchat and Instagram.",
        link: "https://github.com/zanderruiz/webcam-flappy-bird",
    },
    {
        img: "https://i.postimg.cc/6QxdL4g8/fireworks-night-sky-with-pixel-art-style-475147-629.avif",
        proj_title: "Fireworks Development Sandbox",
        description: "A pyrotechnics development sandbox application that allows users to simulate the creation, launch, and dynamic alteration of custom explosions and fireworks. Within a team of C++ developers, I played a pivotal role in developing the particle engine driving explosive effects and integrating dynamic explosion-shaping mechanics into our physics engine.",
        link: "https://bit.ly/3NSf1Uk",
    },
];

const contactConfig = {
    YOUR_EMAIL: "name@domain.com",
    YOUR_FONE: "(555)123-4567",
    description: "Like to get in touch? I'd love to hear from you.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/zanderruiz",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/zanderruiz/",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};