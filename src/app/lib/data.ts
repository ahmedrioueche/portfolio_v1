export const main = {
  title: "Welcome To My Portfolio",
  subtitle: "I am Ahmed Drioueche",
  desc: `I graduated with a Computer Engineering degree in 2024 from the institute of Electric and Electronic Engineering in Algeria. 
  I have over 5 years of experience in programming and over 2 years in web development.
  Coming from the world of electronics, i have aquired the fundamentals that make me capable of working on complex and exciting projects.`,
};

export const projects = [
  {
    id: "1",
    title: "Pointer",
    rank: 4,
    description:
      "An engaging web application designed to promote positive behavior in children through a fun and interactive reward system, encouraging discipline and personal growth.",
    techStack:
      "Nextjs, TypeScript, TailwindCSS, Nextauth, PostgreSQL, Prisma, Superbase, Nodemailer, Gemini, Stripe, Bcript, REST APIs, Vercel.",
    imageDescPairs: [
      {
        image: "/pointer/pointer_home.png",
        description:
          "An engaging web application designed to promote positive behavior in children through a fun and interactive reward system, encouraging discipline and personal growth.",
      },
      {
        image: "/pointer/pointer_main.png",
        description:
          "The app includes several features such as creating routines for children, assigning tasks, creating rewards, challenges, and quizzes, and setting budgets for each kid.",
      },
      {
        image: "/pointer/pointer_rewards.png",
        description:
          "The tools used to create this app are Next.js (React.js, TypeScript), TailwindCSS, Nextauth, PostgreSQL, Prisma, Superbase, Nodemailer, Gemini, Stripe, and it is hosted on Vercel.",
      },
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
          "Parents can assign tasks to specific children, or create a global task for all their kids.",
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
          "Parents can set up engaging quizzes to test their children’s knowledge and progress, the quizzes are generated via Google's Gemini AI, by prompting it with parent's input and child's age.",
      },
      {
        image: "/pointer/pointer_quizzes_child.png",
        description:
          "Children can engage in the quizzes to earn points, they can filter quizzes by topic, review already answered ones, and can track their progress via the point system",
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
          "When the free trial ends, parents are faced with a blocking modal that prompts them to pay for a subscription in order to continue using the app.",
      },
    ],
    conclusion:
      "While this project is still a work in progress, it holds immense potential for future enhancements. One exciting feature under consideration is a 'Teacher Mode,' which would empower educators to assign homework and track students' grades and progress. This addition would enable parents to monitor their children's academic journey more closely, fostering a collaborative environment between teachers and families. Furthermore, i envision integrating gamification elements to make learning more engaging, along with personalized learning plans tailored to each child's unique needs and preferences. As i continue to develop this application, i aim to create a comprehensive tool that supports not only children’s behavioral growth but also their academic achievements.",
    detailedDescription: [],
    detailsLink: "/projects/1",
    demoLink: "https://pointer-app.vercel.app",
    githubLink: "https://github.com/ahmedrioueche/pointer",
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
          'This application is a part of a bigger project titled "Design and Implementation of a Modbus TCP/RTU Industrial Gateway", finished in june 2024 as a part of my graduation project supervised by Cevie Doofas Innovative Solutions. This gateway is created to facilitate communication between industrial machines that use Modbus protocol variations (TCP, RTU).',
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
  },
  {
    id: "3",
    title: "KeyMaster",
    rank: 3,
    techStack:
      "Nextjs, TypeScript, Reactjs, Tailwindcss, Prisma, PostgreSQL, Supabase, Pusher, Bcript, Gemini, REST APIs, Vercel",
    description:
      "KeyMaster is a lightweight, responsive web app designed for typing practice with a built-in leaderboard, real-time competition, and personalized settings. The app leverages Gemini to fetch training paragraphs tailored to the user’s preferences, and real time competetion via Pusher.",
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
          "Users can compete in real-time typing challenges with friends or other players, powered by Pusher for seamless real-time communication. Real time communication poses various challenges such as synchronization, race conditions and dead locks, which had to be overcame.",
      },
      {
        image: "/km/km_search.png",
        description:
          "The search functionality allows users to look up specific games or competitors using a custom search algorithm that ensures fast and accurate results.",
      },
      {
        image: "/km/km_join.png",
        description:
          "Users can create rooms to invite friends, or join friend's rooms, this funcionality is managed in the Postgres database.",
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
  },
  {
    id: "4",
    title: "Beam",
    rank: 2,
    techStack:
      "Nextjs, TypeScript, Reactjs, Redux, NextAuth, Tailwindcss, Prisma, PostgreSQL, Neon, Bcript, REST APIs, Vercel",
    description:
      "Beam is a fully responsive live streaming platform, that leverages PostgreSQL for data persistance and NextAuth for authentication.",
    imageDescPairs: [
      {
        image: "/beam/home.png",
        description:
          "Users can navigate the current streams, or search, with having usual followed streamers and recommended ones. ",
      },
      {
        image: "/beam/dashboard.png",
        description:
          "Users can access the creator's dashboard for managing live streams.",
      },
      {
        image: "/beam/community.png",
        description:
          "Streamers can manage their community, block or unblock users.",
      },
      {
        image: "/beam/profile.png",
        description:
          "Users can manage their profiles, and visite other users profiles. Moreover, all views are built to support dark and light theme according to users preference.",
      },
      {
        image: "/beam/settings.png",
        description: "Users can manage their account's setting...",
      },
      {
        image: "/beam/settings_2.png",
        description: "Such as changing the language, and more.",
      },
      {
        image: "/beam/mobileSidebar.png",
        description: "A custom mobile sidebar for a nice responsive design.",
      },
      {
        image: "/beam/signup.png",
        description:
          "A user can create a custom account that is inserted in Neon PostgreSQL database using a Prisma schema.",
      },
      {
        image: "/beam/login.png",
        description:
          "Users can login via a custom account or using Google 0Auth, the authentication is handled via NextAuth that provides a session that is used in all pages to verify user's authentication",
      },
    ],
    detailsLink: "/projects/4",
    demoLink: "null",
    githubLink: "https://github.com/ahmedrioueche/beam",
  },
  {
    id: "5",
    title: "GymPro",
    rank: 1,
    techStack:
      "TypeScript, Reactjs, Redux, Tailwindcss, Nodejs, JWT, Express, TensorFlow.js, Prisma, PostgreSQL, Supabase, Bcript, Graphql, Gemini, Vercel",
    description:
      "GymPro is a gym managment application that utilizes facial recognition for member authentication.",
    imageDescPairs: [
      {
        image: "/gp/home.png",
        description: "The Home page provides a quick acess to the app.",
      },
      {
        image: "/gp/addMember.png",
        description:
          "We can add a member by taking a picture of them or uploading an image of them, which is stored in Supabase storage, then filling their data, which is stored in Supabase.",
      },
      {
        image: "/gp/members.png",
        description: "User can filter members based on a set criteria.",
      },
      {
        image: "/gp/dashboard.png",
        description:
          "A dashboard is useful for analyzing the behavior of the buisness.",
      },
      {
        image: "/gp/chatbot.png",
        description:
          "Built using Gemini AI, this chatbot provides answers to users questions and concers, it works by being prompted a thourough description of the app, along with user's input.",
      },
      {
        image: "/gp/mobileSideBar.png",
        description:
          "A custom side bar is used to ensure responsivity along small screens.",
      },
      {
        image: "/gp/settings.png",
        description:
          "Users can cutomize their experience using the settings menu.",
      },
      {
        image: "/gp/feedback.png",
        description: "A page where users can submit feedback and ratings.",
      },

      {
        image: "/gp/login.png",
        description:
          "The login process utilizes Supabase Auth for authentication users.",
      },
      {
        image: "/gp/signup.png",
        description:
          "Users can signup using a custom account or through a google account which is enabked using Supabase Auth.",
      },
    ],
    conclusion:
      "This project is still in progress, and furthes will be provided as development continues.",
    detailsLink: "/projects/5",
    demoLink: "https://gympro-web.vercel.app",
    githubLink: "https://github.com/ahmedrioueche/gympro-web",
  },
];
