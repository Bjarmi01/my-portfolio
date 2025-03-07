import { Project } from '../types/project';

export const projects: Project[] = [
   {
     id: 1,
     name: 'Atlas Active',
     internalPage: true,
     logo: '/images/logos/atlas-active-logo.png',
     description:  `
      <p class="text my-5">
        Atlas Active is a dynamic and habit-focused workout app designed to empower users to build sustainable fitness routines. Unlike traditional fitness apps, Atlas Active doesn't just track workouts—it focuses on fostering consistency and gradual improvement by aligning fitness activities with habit formation principles, making it a comprehensive tool for achieving long-term health and wellness.
      </p>
      <p class="text my-5">
        To bring this vision to life, I developed the app using Flutter, which provided a seamless cross-platform experience, and Firebase, ensuring real-time data synchronization for user progress. On the backend, TypeScript cloud functions powered many of the app's advanced features, offering scalability and precision for a wide range of functionalities.
      </p>
      <p class="text my-5">
        The journey to build Atlas Active was exciting yet challenging. The app had to cater to users at all fitness levels, from beginners to advanced athletes, while keeping the experience simple, intuitive, and engaging. I designed and implemented features such as habit-based workout tracking, where users could set small, actionable goals that encouraged consistency. Additionally, the app included streak tracking, achievements, and habit rewards to motivate users to stay on track.
      </p>
      <p class="text my-5">
        A key aspect of Atlas Active's development was the ability to create fully customizable workout plans. Users could choose from a variety of pre-designed plans or build their own routines tailored to specific fitness goals.The aim is to implement social features, which will allow users to connect with friends, share progress, and participate in group challenges, to foster a sense of accountability and community.
      </p>
      <p class="text my-5">
        The backend presented some of the most intriguing challenges. Using Firebase and TypeScript cloud functions, I created logic for personalized habit reminders, intelligent workout recommendations, and advanced performance analytics. This backend ensured that user data remained consistent and accessible across multiple devices, offering a seamless experience.
      </p>
      <p class="text my-5">
        User experience was a critical part of the process, and I worked meticulously to design a clean, intuitive interface that made it easy for users to navigate the app. Every element, from the onboarding flow to the gamification elements, was designed with usability and user engagement in mind. I'll also be collaborating with testers and users to refine the app based on feedback, ensuring that the product met their needs effectively.
      </p>
      <p class="text my-5">
        The app's development wasn’t without challenges. Integrating multiple features—such as real-time data synchronization, cloud-powered habit logic, and advanced UI elements—while maintaining performance and scalability required constant reevaluation of strategies and workflows. I also had to make key decisions about state management and development tooling to ensure that the app could scale effectively.
      </p>
      <p class="text my-5">
        The result was an app powered by cutting-edge technologies like Flutter, Firebase, TypeScript, and Dart. I worked across various segments of the project, from feature design to DevOps, ensuring that every part of the app worked harmoniously to deliver a seamless experience. Building this app gave me the opportunity to explore complex areas of app development while also growing as a developer and strategist.
      </p>
      <p class="text my-5">
        Although the app is still in its early stages and yet to reach a large audience, I believe in its potential to help users transform their fitness journeys. The project allowed me to lead development efforts, collaborate with talented individuals, and deliver a product that aligns technology with behavioral science to create a meaningful impact.
      </p>
      
    `,
    images: [
      '/work-images/atlas-active/screen1.png',
      '/work-images/atlas-active/screen2.png',
      '/work-images/atlas-active/screen3.png',
      '/work-images/atlas-active/screen4.png',
      '/work-images/atlas-active/screen5.png',
      '/work-images/atlas-active/screen6.png',
      '/work-images/atlas-active/screen7.png',
      '/work-images/atlas-active/screen8.png',
      '/work-images/atlas-active/screen9.png',
      '/work-images/atlas-active/screen10.png',
      '/work-images/atlas-active/screen11.png',
      '/work-images/atlas-active/screen12.png',
      '/work-images/atlas-active/screen13.png',
    ],
    techStack: [
      { name: 'Flutter', icon: '/images/icons/flutter-original.svg' },
      { name: 'TypeScript', icon: '/images/icons/typescript-original.svg' },
      { name: 'Firebase', icon: '/images/icons/firebase-plain.svg' },
    ],
   },
   {
     id: 2,
     name: 'Beanfee Direct',
     internalPage: true,
     logo: '/images/logos/bf-logo.png',
     description: `
      <p class="text my-5">
        Beanfee Direct is a cutting-edge extension of the primary Beanfee platform, designed to revolutionize behavioral feedback in the classroom. Beanfee itself stands for "Behavioral and Analysis Feedback," embodying its core philosophy of integrating technology with behavioral training methodologies. Beanfee Direct takes this vision further by providing teachers with tools to set goals, track progress, and reward students based on behavioral milestones, fostering an environment of positive reinforcement and structured growth.
      </p>
      <p class="text my-5">
      As the lead programmer for this project, I was responsible for developing and scaling the platform. Built with a robust tech stack leveraging Flutter for cross-platform development, Firebase for real-time synchronization, and TypeScript cloud functions for backend logic—Beanfee Direct offers a seamless user experience for educators and students alike.
      </p>
      <p class="text my-5"> Key features include:</p>
        <ul class="text my-5 list-disc list-inside space-y-3">
          <li>Goal Setting and Tracking: Teachers can set behavioral goals for students, monitor progress, and provide actionable feedback in real-time.</li>
          <li>Reward System: A gamified rewards system that motivates students to reach their goals, reinforcing positive behavior.</li>
          <li>Real-Time Data Insights: Firebase powers synchronized data across devices, ensuring seamless classroom management and communication.</li>
          <li>Customizable Templates: Teachers can create personalized feedback and goal-setting templates tailored to their classroom dynamics.</li>
          <li>Scalability and Security: The platform's cloud-based architecture ensures it can handle increasing classroom sizes while maintaining data integrity and security.</li>
        </ul>
      <p class="text my-5">
        The platform emphasizes ease of use, ensuring teachers can focus on teaching while leveraging powerful tools to manage classroom behavior effectively. By combining behavioral science with cutting-edge technology, Beanfee Direct provides a transformative approach to education, making classrooms more engaging, structured, and supportive for both teachers and students.
      </p>
      <p class="text my-5">
        You can read more about Beanfee <a href="https://beanfee.com/" class="link text-[#4831d4] underline" target="_blank">HERE</a>.
      </p>
    `,
    images: [
      '/work-images/beanfee/screen1.png',
      '/work-images/beanfee/screen2.png',
      '/work-images/beanfee/screen3.png',
    ],
    techStack: [
      { name: 'Flutter', icon: '/images/icons/flutter-original.svg' },
      { name: 'TypeScript', icon: '/images/icons/typescript-original.svg' },
      { name: 'Firebase', icon: '/images/icons/firebase-plain.svg' },
    ],
   },
   {
     id: 3,
     name: 'Showdeck Chat',
     internalPage: true,
     logo: '/images/logos/showdeck-logo.png',
     description: `
      <p class="text my-5">
        Showdeck Chat is an innovative communication tool designed specifically for the showbusiness industry, simplifying and streamlining interactions within production teams. Developed as my final assignment at Reykjavik University, Showdeck Chat was built in collaboration with four other team members, where I took the lead in driving the frontend development. The project utilizes a modern tech stack, including VueJS, TypeScript, and Django, to deliver a responsive and feature-rich user experience.
      </p>
      <p class="text my-5">
       The primary goal of Showdeck Chat is to address the unique communication challenges faced in the showbusiness industry. Similar to platforms like Slack or Messenger, it facilitates real-time communication and collaboration but is tailored with industry-specific features to enhance efficiency and productivity.
      </p>
      <p class="text my-5"> Key features include:</p>
      <ul class="text my-5 list-disc list-inside space-y-3">
        <li>Real-Time Messaging: A robust chat interface with support for individual and group conversations, ensuring seamless communication across teams.</li>
        <li>File Sharing and Collaboration: Easily share scripts, production schedules, and other critical documents within chat threads, keeping everything organized and accessible.</li>
        <li>Industry-Specific Tools: Features like role-based permissions cater specifically to the needs of showbusiness professionals.</li>
        <li>Secure and Scalable Backend: Powered by Django, the backend ensures secure data handling and the ability to scale with growing production teams.</li>
      </ul>
      <p class="text my-5">
        Showdeck Chat exemplifies the integration of technical expertise and industry insights to create a tool that addresses the unique challenges of a fast-paced, high-demand environment. By leading the frontend development, I ensured a user-friendly interface along with a graphic designer that enhances collaboration and productivity, providing a seamless experience for all stakeholders in the entertainment industry. This project not only honed my technical skills but also deepened my understanding of creating solutions tailored to niche industries.
      </p>
      <p class="text my-5">
        You can read more about the project and its development process <a href="https://skemman.is/bitstream/1946/47650/1/Showdeck-Chat.pdf" class="link text-[#4831d4] underline" target="_blank">HERE</a>.
      </p>
    `,
    images: [
      '/work-images/showdeck/screen1.png',
    ],
    techStack: [
      { name: 'Vue.js', icon: '/images/icons/vuejs-original.svg' },
      { name: 'TailwindCSS', icon: '/images/icons/tailwindcss-plain.svg' },
      { name: 'TypeScript', icon: '/images/icons/typescript-original.svg' },
      { name: 'Socket.io', icon: '/images/icons/socketio-original.svg' },
      { name: 'FastAPI', icon: '/images/icons/fastapi_icon.svg' },
    ],
   },
   {
      id: 4,
      name: 'Bjarmi.dev',
      siteName: 'bjarmi.dev',
      internalPage: false,
      logo: '/images/logos/bjarmi-dev-logo.png',
      description: 'My personal portfolio site.',
      images: [],
      techStack: [
        { name: 'Next.js', icon: '/images/icons/nextjs-original-wordmark.svg' },
        { name: 'TailwindCSS', icon: '/images/icons/tailwindcss-plain.svg' },
        { name: 'TypeScript', icon: '/images/icons/typescript-original.svg' },
      ],
   },
    {
        id: 5,
        name: 'PolarVault',
        internalPage: true,
        logo: '/images/logos/polarvault-logo.png',
        description: 'Coming soon...',
        images: [],
        techStack: [
          { name: 'Next.js', icon: '/images/icons/nextjs-original-wordmark.svg' },
          { name: 'TailwindCSS', icon: '/images/icons/tailwindcss-plain.svg' },
          { name: 'TypeScript', icon: '/images/icons/typescript-original.svg' },
          { name: 'FastAPI', icon: '/images/icons/fastapi_icon.svg' },
          { name: 'SQLite', icon: '/images/icons/sqlite-original.svg' },
          { name: 'AWS', icon: '/images/icons/amazonwebservices-original.svg' },
        ],
    },
 ];
 