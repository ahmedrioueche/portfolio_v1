export const main = {
  title: "Welcome To My Portfolio",
  subtitle: "I am Ahmed Drioueche",
  desc: `I graduated with a Computer Engineering degree in 2024 from the Institute of Electric and Electronic Engineering in Algeria. 
  I have over 5 years of experience in programming and over 2 years in web development. 
  Coming from the world of electronics, I have acquired the fundamentals that make me capable of working on complex and exciting projects.`,
};

export const projects = [
  {
    id: "1",
    title: "Pointer",
    rank: 4,
    description:
      "A web application designed to promote positive behavior in children through a fun and interactive reward system, encouraging discipline and personal growth.",
    techStack:
      "Nextjs, TypeScript, TailwindCSS, Nextauth, PostgreSQL, Prisma, Supabase, Nodemailer, Gemini, Stripe, Bcrypt, REST APIs, Vercel.",
    imageDescPairs: [
      {
        image: "/pointer/pointer_home.png",
        description:
          "The landing page presents an overview for the app, covering the main features, pricing and more.",
      },
      {
        image: "/pointer/pointer_main.png",
        description:
          "The app includes several features such as creating routines for children, assigning tasks, creating rewards, challenges, and quizzes, and setting budgets for each kid.",
      },
      {
        image: "/pointer/pointer_rewards.png",
        description:
          "Parents can create rewards associated with points, and children can claim the rewards after reaching the set amount of points through completing tasks, answering quizzes and participating in quizzes.",
      },
      {
        image: "/pointer/pointer_child_profile.png",
        description:
          "As you open the child’s profile, you’re greeted with a dashboard that organizes their routines, tasks, rewards, and progress. Each child is given a generated username and password to access their account.",
      },
      {
        image: "/pointer/pointer_rewards_child.png",
        description:
          "A dedicated space for celebrating success, where the child’s rewards and achievements are proudly displayed, motivating them to keep pushing forward.",
      },
      {
        image: "/pointer/pointer_routines_weekly.png",
        description:
          "A glance at the weekly routine reveals an intuitive layout where parents can assign tasks and monitor progress seamlessly.",
      },
      {
        image: "/pointer/pointer_routine_daily.png",
        description:
          "The daily breakdown provides a comprehensive view of what’s been done and what still needs attention, empowering kids to stay on top of their responsibilities.",
      },
      {
        image: "/pointer/pointer_kids_modal.png",
        description:
          "Parents can assign tasks to specific children or create a global task for all their kids.",
      },
      {
        image: "/pointer/pointer_challenge_form.png",
        description:
          "Creating challenges is easy and fun—parents can craft custom tasks with specific rewards, adding a layer of excitement to their child’s day-to-day activities.",
      },
      {
        image: "/pointer/pointer_challenge_card.png",
        description:
          "Each challenge card displays the challenge’s details—what’s at stake, how it’s earned, and the reward awaiting completion.",
      },
      {
        image: "/pointer/pointer_quizzes.png",
        description:
          "Parents can set up engaging quizzes to test their children’s knowledge and progress. The quizzes are generated via Google's Gemini AI, by prompting it with the parent's input and child's age.",
      },
      {
        image: "/pointer/pointer_quizzes_child.png",
        description:
          "Children can engage in the quizzes to earn points. They can filter quizzes by topic, review already answered ones, and track their progress via the point system.",
      },
      {
        image: "/pointer/pointer_budget.png",
        description:
          "Parents can manage their kids' rewards by using the budget tool, ensuring they allocate rewards wisely while maintaining fun incentives for the kids.",
      },
      {
        image: "/pointer/pointer_notif.png",
        description:
          "Parents stay informed with instant notifications about their child’s progress, upcoming tasks, and completed activities, fostering communication and connection.",
      },
      {
        image: "/pointer/pointer_settings.png",
        description:
          "The settings page, built with flexibility in mind, allows users to tailor the app to their unique needs—everything from notifications to account preferences can be fine-tuned here.",
      },
      {
        image: "/pointer/pointer_freeTrial.png",
        description:
          "New users are invited to try the app’s full potential through a risk-free trial, easing them into the experience without any commitment.",
      },
      {
        image: "/pointer/pointer_plans.png",
        description:
          "A detailed breakdown of the available plans showcases the benefits of each, allowing parents to choose the best fit for their needs.",
      },
      {
        image: "/pointer/pointer_please_pay.png",
        description:
          "When the free trial ends, parents are faced with a blocking modal that prompts them to pay for a subscription to continue using the app.",
      },
    ],
    conclusion:
      "While this project is still a work in progress, it holds immense potential for future enhancements. One exciting feature under consideration is a 'Teacher Mode,' which would empower educators to assign homework and track students' grades and progress. This addition would enable parents to monitor their children's academic journey more closely. Furthermore, I envision integrating gamification elements to make learning more engaging, along with personalized learning plans tailored to each child's unique needs and preferences. As I continue to develop this application, I aim to create a comprehensive tool that supports not only children’s behavioral growth but also their academic achievements.",
    detailedDescription: [],
    detailsLink: "/projects/1",
    demoLink: "https://pointer-app.vercel.app",
    githubLink: "https://github.com/ahmedrioueche/pointer",
    isVisible: true,
  },
  {
    id: "2",
    title: "Modbus Gateway Manager",
    rank: 5,
    techStack:
      "Electronjs, Javascript, Nodejs, CSS, Sqlite, Bcript, Serialport.",
    description:
      "A Desktop application based on Electron for the configuration and diagnosis of a Modbus gateway, part of my master's degree graduation project supervised by Cevie Doofas Innovative Solutions company.",
    imageDescPairs: [
      {
        image: "/gm/gm_login.png",
        description:
          "This application is a part of a bigger project titled 'Design and Implementation of a Modbus TCP/RTU Industrial Gateway', finished in june 2024 as a part of my graduation project from the institue of electrical and electronic engineering in Algeria with a master's in computer engineering supervised by Cevie Doofas Innovative Solutions. This gateway is created to facilitate communication between industrial machines that use Modbus protocol variations (TCP, RTU).",
      },
      {
        image: "/gm/gateway_1.jpg",
        description:
          "I designed and built a fully functional PCB using KiCad and developed the firmware in C and C++ with STM32Cube. This project significantly sharpened my technical skills and guided me through the complete process of building a complex, multi-component project from start to finish.",
      },
      {
        image: "/gm/gm_general.png",
        description:
          "The main feature of this app is configuring the Modbus gateway. by specifying different parameters that are used in the gateway's firmware.",
      },
      {
        image: "/gm/gm_mode.png",
        description:
          "Users should configure the Modbus mode (RTU or TCP) that the gateway should run on, for instance, if it is hooked to a machine operating as Modbus RTU client (master), the gateway should be configured as an RTU server (slave), and vice versa.",
      },
      {
        image: "/gm/gm_serial.png",
        description:
          "Users are able to configue the different serial parameters, such as the baudrate, parity, stop bits, data size, and the slave identifier (server id) of the gateway (If its connected to an RTU master (client)).",
      },
      {
        image: "/gm/gm_network.png",
        description:
          "Users are able to configure the IP of the gateway along with the mask and gateway IP, and specify the remote IP of the TCP server machine. The configuration data is sent via USB utilizing the Serialport library.",
      },
      {
        image: "/gm/gm_diag_1.png",
        description:
          "The other main feature of this app is diagnosing the packets going through the gateway. By having copies of the packets sent to the app via USB, users can diagnos and analyze the behavior of the gateway and troubleshoot the overall system.",
      },
      {
        image: "/gm/gm_settings.png",
        description:
          "The app offer settings to change the username, reset password, or choose another language (English, french, or spanish). user's data is stored in a local Sqlite database.",
      },
    ],
    conclusion:
      "Built using the Model-View-Controller (MVC) design pattern, this ElectronJS application streamlines the configuration and diagnosis of a Modbus TCP/RTU gateway via USB, serving as an essential bridge between the Modbus variations in industrial communication systems. Through this project, I gained valuable hands-on experience and deepened my understanding of embedded systems, communication protocols, and software-hardware integration, significantly enhancing my technical expertise.",
    detailsLink: "/projects/2",
    demoLink: "null",
    githubLink: "https://github.com/ahmedrioueche/modbus_gateway_manager",
    isVisible: true,
  },
  {
    id: "3",
    title: "KeyMaster",
    rank: 2,
    techStack:
      "Nextjs, TypeScript, Reactjs, Tailwindcss, Prisma, PostgreSQL, Supabase, Pusher, Bcrypt, Gemini, REST APIs, Vercel",
    description:
      "KeyMaster is a lightweight, responsive web app designed for typing practice with a built-in leaderboard, real-time competition, and personalized settings. The app leverages Gemini to fetch training paragraphs tailored to the user’s preferences and real-time competition via Pusher.",
    imageDescPairs: [
      {
        image: "/km/km_home.png",
        description:
          "Users can select a topic and language of choice, press the start button, and trigger Gemini to provide a paragraph of the specified length. As they type, the timer, speed calculator, and character counter offer real-time feedback and performance metrics.",
      },
      {
        image: "/km/km_loginModal.png",
        description:
          "Users are prompted to log in for a full app experience, including access to the leaderboard and personalized settings.",
      },
      {
        image: "/km/km_signup.png",
        description:
          "New users can sign up using a simple form. The user data is stored in Supabase, utilizing Prisma for schema management and seamless database migrations.",
      },
      {
        image: "/km/km_compete.png",
        description:
          "Users can compete in real-time typing challenges with friends or other players, powered by Pusher for seamless real-time communication. Real-time communication poses challenges such as synchronization, race conditions, and deadlocks, which had to be overcome.",
      },
      {
        image: "/km/km_search.png",
        description:
          "The search functionality allows users to look up specific games or competitors using a custom search algorithm that ensures fast and accurate results.",
      },
      {
        image: "/km/km_join.png",
        description:
          "Users can create rooms to invite friends or join friends' rooms. This functionality is managed in the Postgres database.",
      },
      {
        image: "/km/km_settings.png",
        description:
          "Users can customize their preferences (such as language and typing mode), which are stored in Supabase with a one-to-one relationship to their user profiles for persistent settings across sessions.",
      },
    ],
    conclusion:
      "KeyMaster is a fun and productive typing game that improves efficiency and competitive spirit. Future improvements include adding Google Ads for monetization.",
    detailsLink: "/projects/3",
    demoLink: "http://keymaster-type.vercel.app",
    githubLink: "https://github.com/ahmedrioueche/keymaster",
    isVisible: true,
  },
  {
    id: "4",
    title: "Beam",
    rank: 6,
    techStack:
      "Nextjs, TypeScript, Reactjs, Redux, NextAuth, Tailwindcss, Prisma, PostgreSQL, Neon, Bcrypt, REST APIs, Vercel",
    description:
      "Beam is a fully responsive live streaming platform that leverages PostgreSQL for data persistence and NextAuth for authentication.",
    imageDescPairs: [
      {
        image: "/beam/home.png",
        description:
          "Users can navigate current streams or search while viewing followed streamers and recommended ones.",
      },
      {
        image: "/beam/dashboard.png",
        description:
          "Users can access the creator's dashboard for managing live streams.",
      },
      {
        image: "/beam/community.png",
        description:
          "Streamers can manage their community and block or unblock users.",
      },
      {
        image: "/beam/profile.png",
        description:
          "Users can manage their profiles and visit other users' profiles. Moreover, all views are built to support dark and light themes according to user preference.",
      },
      {
        image: "/beam/settings.png",
        description: "Users can manage their account settings.",
      },
      {
        image: "/beam/settings_2.png",
        description: "Users can change the language and other settings.",
      },
      {
        image: "/beam/mobileSidebar.png",
        description:
          "A custom mobile sidebar ensures a nice responsive design.",
      },
      {
        image: "/beam/signup.png",
        description:
          "A user can create a custom account that is inserted into the Neon PostgreSQL database using a Prisma schema.",
      },
      {
        image: "/beam/login.png",
        description:
          "Users can log in via a custom account or using Google OAuth. Authentication is handled by NextAuth, which provides a session for all pages to verify user authentication.",
      },
    ],
    detailsLink: "/projects/4",
    demoLink: "null",
    githubLink: "https://github.com/ahmedrioueche/beam",
    isVisible: true,
  },
  {
    id: "5",
    title: "GymPro",
    rank: 3,
    techStack:
      "TypeScript, Reactjs, Redux, Tailwindcss, Nodejs, JWT, Express, TensorFlow.js, Prisma, PostgreSQL, Supabase, Bcrypt, GraphQL, Gemini, Vercel",
    description:
      "GymPro is a gym management application that utilizes facial recognition for member authentication.",
    imageDescPairs: [
      {
        image: "/gp/home.png",
        description:
          "The Home page provides an overview of key metrics and member activities, giving users quick access to important business information.",
      },
      {
        image: "/gp/addMember.png",
        description:
          "Users can add a member by taking a picture of them or uploading an image, which is stored in Supabase storage. Then, users fill in their data, which is stored in Supabase.",
      },
      {
        image: "/gp/members.png",
        description: "Users can filter members based on a set of criteria.",
      },
      {
        image: "/gp/dashboard.png",
        description:
          "The dashboard is useful for analyzing business performance.",
      },
      {
        image: "/gp/chatbot.png",
        description:
          "Built using Gemini AI, this chatbot provides answers to users' questions and concerns. It works by being prompted with a thorough description of the app, along with user input.",
      },
      {
        image: "/gp/mobileSideBar.png",
        description:
          "A custom sidebar is used to ensure responsiveness on small screens.",
      },
      {
        image: "/gp/settings.png",
        description:
          "Users can customize their experience using the settings menu.",
      },
      {
        image: "/gp/profile.png",
        description: "Users can customize their profile information.",
      },
      {
        image: "/gp/feedback.png",
        description: "A page where users can submit feedback and ratings.",
      },
      {
        image: "/gp/login.png",
        description:
          "The login process utilizes Supabase Auth for authenticating users.",
      },
      {
        image: "/gp/signup.png",
        description: "Users can sign up using a custom account.",
      },
    ],
    conclusion:
      "This project is still in progress, and further updates will be provided as development continues.",
    detailsLink: "/projects/5",
    demoLink: "https://gympro-web.vercel.app",
    githubLink: "https://github.com/ahmedrioueche/gympro-web",
    isVisible: true,
  },
  {
    id: "6",
    title: "AI-Read",
    rank: 1,
    techStack:
      "TypeScript, Next.js, Tailwind CSS, Gemini, Prisma, Supabase, RESTAPIs, Vercel",
    description: `AI-Read is a smart reading app that helps users learn languages through reading. It offers AI-powered translation, explanations, and summaries, making texts easier to understand. The app also includes a text-to-speech feature to improve pronunciation and boost language comprehension.`,
    imageDescPairs: [
      {
        image: "/ai-read/trans.png",
        description: `The translation of words or sentences is a key feature in this app. Thanks to the Gemini API, users can get instant translations of text just by clicking or highlighting it, making the app very useful.`,
      },
      {
        image: "/ai-read/autoRead.png",
        description: `The text-to-speech feature triggers as soon as the user the button is clicked. Built using the browser's text-to-speech API in basic mode, and ElevenLabs API in premium mode, it is accompanied by auto scrolling and heighlighting to provice a smooth reading experience.`,
      },
      {
        image: "/ai-read/settings.png",
        description:
          "The settings page allows users to customize their experience, such as selecting the TTS type and voice, theme and more",
      },
      {
        image: "/ai-read/features.png",
        description:
          "Thee features modal allows users to explore the app's features and available plans.",
      },
      {
        image: "/ai-read/free-trial.png",
        description:
          "The free trial triggers as soon the user launches the app the first time. The app detects the visitors and logs them into the DB, if the visitor creates an account, the free trial info is transformed to the user's account to make the free trial based on the user's device and not account.",
      },
      {
        image: "/ai-read/payment.png",
        description:
          "Users can upgrade their account by paying via paypal. more payemnt methods will be added in the furure",
      },
      {
        image: "/ai-read/signup.png",
        description:
          "Supabase authentication is used to allow users login or signup.",
      },
    ],
    conclusion:
      "As someone who loves reading and is passionate about learning new languages, this app has been a game-changer. It's the perfect tool for making the reading process more enjoyable and convenient, helping me learn and improve my language skills effortlessly.",
    detailsLink: "/projects/6",
    demoLink: "https://ai-read-sigma.vercel.app",
    githubLink: "https://github.com/ahmedrioueche/ai-read",
    isVisible: true,
  },
];

export const experience = [
  {
    companyName: "Qareeb",
    companyLogo: "/q.png",
    jobTitle: "Frontend Developer (React, TypeScript)",
    startDate: "October 2024",
    endDate: "Present",
    introduction: `Qareeb is an innovative tech startup based in Algeria, focused on providing solutions to global business challenges through AI technologies like computer vision, machine learning, and large language models (LLMs). One of its flagship products is Wizabot.`,
    description: `Wizabot is an advanced web chatbot powered by proprietary AI models. It allows business owners to upload their data, which the AI uses to train its models. This enables businesses' clients to engage with the chatbot and inquire about the business's products or services.`,
    myWork: `At Qareeb, my role involves developing responsive, functional, and performant web interfaces for Wizabot. I work closely with the backend team to integrate APIs and ensure the smooth, seamless operation of the application. My focus is on creating an intuitive and efficient user experience for our clients.`,
    conclusion: `Working at Qareeb has been an exciting journey filled with learning opportunities. As a frontend developer and computer engineer, I am constantly surrounded by talented engineers in backend, AI, and networking, which has helped me grow both as a developer and a technology enthusiast.`,
    isVisible: true,
  },
  {
    companyName: "Doofas Innovative Solutions",
    companyLogo: "/d.png",
    jobTitle: "Embedded Systems and Software Developer",
    startDate: "January 2024",
    endDate: "June 2024",
    introduction: `Doofas Innovative Solutions is a tech consulting company that specializes in creating tailored embedded systems solutions for industries like automation, IoT, and communication systems. They focus on providing cutting-edge technology to improve system efficiency and product reliability.`,
    description: `At Doofas, I worked on a project related to industrial systems and automation, involving the design and development of a Modbus Gateway, which integrates with embedded systems and facilitates communication between industrial machines. The system uses Modbus RTU/TCP protocols for communication and provides tools for configuring and diagnosing industrial systems.`,
    myWork: `I was responsible for both hardware and software development. I helped design the gateway’s PCB using KiCad, developed embedded firmware for the gateway with STM32, and contributed to the creation of the desktop application in ElectronJS for configuring and diagnosing the gateway. I worked closely with clients to understand their requirements and provide tailored solutions that improved their system reliability and performance.`,
    conclusion: `My time at Doofas provided valuable experience in embedded systems design, firmware development, and industrial communication protocols. I gained hands-on experience designing complex systems and working with clients to develop innovative solutions. This role was crucial in sharpening my skills in both software development and hardware integration.`,
    isVisible: true,
  },
];

const temp = {
  pointer: {
    imageDescPairs: [
      {
        image: "/pointer/pointer_signup.png",
        description:
          "Users can either create an account or login via Google OAuth. Authentication is handled using Nextauth",
      },
      {
        image: "/pointer/pointer_verify.png",
        description:
          "Email verification is implemented via Nodemailer to ensure email integrity.",
      },
      {
        image: "/pointer/pointer_confirm.png",
        description:
          "Users are prompted to fill in some data to finish setting up their environment, like their children's details and preferences.",
      },
      {
        image: "/pointer/pointer_plans_2.png",
        description:
          "Users can choose to engage in a free trial or subscribe with monthly or yearly payment plans.",
      },
      {
        image: "/pointer/pointer_payment.png",
        description: "Secure payment is implemented using Stripe.",
      },
    ],
  },
};
