import terra from "../assets/terra.png";
import flix from "../assets/flix.png";
import course from "../assets/course.png";
let ProjectElements = [
    {
        id: 1,
        title: "Terra: Pocket Chinese Language Learning",
        technologies: ["Swift", "UIKit", "MVC Architecture", "Firebase"],
        description: ["Built a language learning iOS app in Swift using UIKit, MVC architecture, and Firebase for storing data", "Conducted market research, competitive research, and user interviews to identify user needs and drive product vision", "Implemented Google Cloud Vision API for detecting objects, Google Cloud Translation API for translating detected results, and Google Cloud Text-to-Speech API for pronunciation.", "Won Best First Time Hack and Recipient of 1K Grant from 1517 Fund"],
        image: terra,
    },
    {
        id: 2,
        title: "Flix",
        technologies: ["Swift", "UIKit"],
        description:["Built an iOS app that allows users to browse movies using the MovieDB API"],
        image: flix,
    },
    {
        id: 3,
        title: "Course Registration System",
        technologies: ["Java", "OOP"],
        description: ["Developed the backend for a functional course registration system in Java that deserializes data from a csv file, follows anOOP design pattern (Abstract Factory), and uses serialization to save program state"],
        image: course,
    },
]

export default ProjectElements;