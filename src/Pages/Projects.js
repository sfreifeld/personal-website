import ProjectCard from '../Components/ProjectCard'
import '../index.css'
import image1 from '../assets/chrome-capture-2024-4-3.gif'
import image2 from '../assets/termijob.png'
import image3 from '../assets/beautybytes.png'
import image4 from '../assets/wordwise2.png'
import image8 from '../assets/image8.png'
import image7 from '../assets/wdiwpn.png'
import chartjsIcon from '../assets/icons/chartjs.svg'
import reactjsIcon from '../assets/icons/reactjs.svg'
import tailwindcssIcon from '../assets/icons/tailwind-css.svg'
import pythonIcon from '../assets/icons/python.svg'
import pandasIcon from '../assets/icons/pandas.svg'
import bootstrapIcon from '../assets/icons/bootstrap.svg'
import commandlineIcon from '../assets/icons/command-solid.svg'
import contentfulIcon from '../assets/icons/contentful.svg'
import sassIcon from '../assets/icons/sass.svg'
import nodeIcon from '../assets/icons/node-js.svg'
import gulpIcon from '../assets/icons/gulp-plain.svg'
import swiftIcon from '../assets/icons/swift.svg'
import openaiIcon from '../assets/icons/openai.svg'
import flaskIcon from '../assets/icons/flask.svg'
import jqIcon from '../assets/icons/jquery-plain.svg'
import supaBaseIcon from '../assets/icons/supabase.svg'
import vercelIcon from '../assets/icons/vercel.svg'


const projects = [ 
    {
    title: "DevImpact",
    website: "https://phase-5.vercel.app/",
    s_description: "DevImpact is a web platform built with Supabase and ReactJS, designed to connect entry-level developers with nonprofits needing technical assistance. It features user authentication, dynamic project posting, and a responsive design using Bootstrap.",
    l_description: "DevImpact is an innovative web platform developed to bridge the gap between entry-level developers and nonprofits seeking technical support. The backend is powered by Supabase, providing robust server-side logic and seamless database interactions. On the frontend, ReactJS ensures a dynamic and responsive user experience, enhanced by the modern styling of Bootstrap. Key functionalities include secure user authentication, allowing both developers and nonprofits to create and manage their profiles. Nonprofits can post detailed project listings with requirements and deadlines, while developers can browse, filter, and apply for these projects. The platform also supports notifications, ensuring smooth communication and collaboration between users.",
    image: image8,
    icons: [reactjsIcon, bootstrapIcon, supaBaseIcon, vercelIcon]
        },
    {
    title: "Meditation Timer",
    website: "https://github.com/sfreifeld/Meditation-Timer",
    s_description: "The Meditation Timer app, built with React and styled using Tailwind CSS, offers customizable meditation sessions with detailed statistical tracking. Enhanced with engaging graphics from LottieFiles and insightful charts created with Chart.js, it serves as an essential tool for anyone looking to deepen their meditation practice.",
    l_description: "Designed with mindfulness at its core, the Meditation Timer app helps users enhance their meditation practice through precise session timing. This application is crafted using React, featuring a minimalist interface styled with Tailwind CSS, which provides an intuitive user experience. Users can effortlessly customize their sessions by adjusting the meditation duration and bell sounds within the settings panel. \n  Upon completing a meditation session, users have the option to log their experience, promoting a habit of mindfulness and consistency. The app's robust statistics feature—powered by Chart.js—offers insightful visualizations of trends and key data points from users' meditation history, enabling them to track their progress over time. Additionally, the app is enriched with aesthetically pleasing animations and graphics from LottieFiles, ensuring a visually engaging experience.",
    image: image1,
    icons: [reactjsIcon, tailwindcssIcon, chartjsIcon]
    },
    {title: "TermiJob",
    website: 'https://github.com/sfreifeld/TermiJob',
    s_description: "TermiJob transforms your command line into a powerful job search tool, leveraging the Python-based 'jobspy' scraper to fetch listings from Glassdoor and Indeed, and utilizing pandas for sophisticated data cleaning and manipulation. This streamlined tool provides a customized, efficient job search experience, allowing you to manage and track applications seamlessly.",
    l_description: "TermiJob enhances the job search process by integrating directly into your command line, utilizing the Python-based 'jobspy' scraper to efficiently pull listings from Glassdoor and Indeed. It is further refined with the 'inquirer' and 'rich' libraries for a polished interface, allowing users to precisely define their job preferences and keywords for a customized list of opportunities. \n This tool goes beyond simple job fetching; it uses the powerful pandas library for data cleaning and manipulation, ensuring that job listings are accurately tracked and managed. Users can easily monitor their application statuses and filter out undesired duplicates, thus maintaining a clean and orderly job search experience. Whether you are a novice in the job market or a seasoned professional, TermiJob delivers an optimized search process that is both effective and user-friendly.",
    image: image2,
    icons: [pythonIcon, pandasIcon, commandlineIcon]
    },
    {title: "BeautyBytes",
    website: "https://beautybytes.io/",
    s_description: "BeautyBytes is a cutting-edge blog that explores the fusion of fashion and technology, crafted with Node.js, Gulp, Contentful API for article publishing, and styled with Bootstrap, Sass, and Canva graphics that I designed. It offers deep insights into the future of fashion tech, discussing topics from AI in design to the ethics of biometric wearables, making it a vital resource for enthusiasts at the intersection of tech and style.",
    l_description: "BeautyBytes is a pioneering blog that delves into the dynamic intersection of fashion and technology. Developed using Node.js and Gulp, the blog interfaces seamlessly with the Contentful API to facilitate the publishing of articles, while Bootstrap, Sass, and Canva graphics designed by me are employed to enhance the aesthetic appeal through advanced styling techniques. This platform serves as a vibrant hub for exploring how technological advancements are redefining the fashion industry, from algorithm-driven trend forecasting to the integration of sustainable materials and smart wearables. \n The blog’s content is rich with insightful explorations into the evolving realm of fashion technology. BeautyBytes is not just a news source but a visionary medium that engages with speculative topics such as the potential impacts of nanotechnology on fabric production, the ethical considerations of biometric wearables, and the interplay between human creativity and AI in fashion design. It champions the idea that fashion tech is about more than just aesthetics—it is about empowerment, the democratization of design, and the creation of experiences that transcend the physical world. For enthusiasts of both technology and fashion, BeautyBytes is an essential resource for staying at the forefront of this revolutionary fusion, offering a unique perspective on how our digital and sartorial choices intersect and influence our personal and collective identities.",
    image: image3,
    icons: [nodeIcon, bootstrapIcon, contentfulIcon, sassIcon, gulpIcon ]
    },
    {title: "What Do I Wanna Play Next using OpenAI",
    website:"https://github.com/sfreifeld/VideoGameRecommender", 
    s_description: "What Do I Wanna Play Next is a video game recommendation app I developed using Python and Flask, leveraging OpenAI's now-deprecated Da Vinci model to suggest games based on user preferences. Although currently non-operational, the project enhanced my skills in API integration and front-end design, using Bootstrap and jQuery for a responsive user experience.",
    l_description: "What Do I Wanna Play Next is a personalized video game recommendation app that I developed to help users discover games tailored to their preferences. Built with Python and Flask, the application interfaces seamlessly with OpenAI's API, utilizing the deprecated Da Vinci model to process user inputs—including favorite games, desired game characteristics, and gaming platform. The app delivers three curated game suggestions based on these inputs. Users can further explore each recommendation through in-app links, enabling them to learn more about each game and assess its suitability for their interests. \nDespite its current non-operational state due to the deprecation of the OpenAI Da Vinci model, this project demonstrated my ability to integrate advanced machine learning tools into user-friendly applications. The front-end design was enhanced using Bootstrap and jQuery, creating a responsive and intuitive user interface. This app not only honed my skills in web development and API integration but also deepened my understanding of how to apply artificial intelligence in practical, user-centric contexts.",
    image: image7,
    icons: [nodeIcon, openaiIcon, pythonIcon, flaskIcon, jqIcon ]
    },

    {title: "WordWise for Iphone",
    website: 'https://github.com/sfreifeld/wordwise_master',
    s_description: "WordWise was an educational iPhone app developed with SwiftUI, utilizing the Wordnik Word of the Day API to allow users to learn new words daily through an interactive swipe interface. Although no longer available on the App Store, the project was instrumental in enhancing my expertise with SwiftUI and the Model-View-ViewModel (MVVM) paradigm, refining my skills in mobile app development.",
    l_description: "WordWise was an educational iPhone application developed using SwiftUI, designed to enhance vocabulary by leveraging the Wordnik Word of the Day API. Each day, the app presented a new word to users, who could then interact with the word by swiping left to save it to their personal library or swiping right to discard it. This intuitive user interface made learning new words engaging and simple, integrating seamlessly with iOS devices to deliver a fluid, user-friendly experience. \n Despite its removal from the App Store due to lack of maintenance, WordWise served as an invaluable project for gaining practical experience with SwiftUI and the Model-View-ViewModel (MVVM) design pattern. Through this project, I deepened my understanding of modern app development frameworks and techniques, particularly in handling data dynamically and creating reactive user interfaces that respond to user interactions effectively. This experience has been crucial in honing my skills as a software developer, particularly in the mobile development arena.",
    image: image4,
    icons: [swiftIcon ]
    }
]

function Projects() {
    return (

        <section className='bg-lavender hero flex justify-center items-center flex-col'>
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </section>
    )
}


export default Projects