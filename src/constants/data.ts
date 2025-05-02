import { calculateExperience } from "../utils/helper";

export const personalData = {
  greeting: "Hello, I'm",
  name: "Ahmed Drioueche",
  location: "Algiers, Algeria",
  description: `A Computer Engineer with expertise in full-stack development 
  specializing in Reactjs and Nodejs.
  With ${calculateExperience(
    2019
  )} in software development and ${calculateExperience(2022)} 
  in web technologies.`,

  highlights: [
    "Full-stack development",
    "Cloud architecture",
    "Performance optimization",
    "Clean code practices",
  ],
};

export const projects = [
  {
    id: "1",
    title: "Pointer",
    rank: 5,
    description:
      "A web application designed to promote positive behavior in children through a fun and interactive reward system, encouraging discipline and personal growth.",
    techStack:
      "Nextjs, TypeScript, TailwindCSS, Nextauth, PostgreSQL, Prisma, Supabase, Nodemailer, Gemini, Stripe, Bcrypt, REST APIs, Vercel.",
    imageDescPairs: [
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374127/pointer_home_vbwqra.png",
        description:
          "The landing page presents an overview for the app, covering the main features, pricing and more.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374128/pointer_main_cuwisx.png",
        description:
          "The app includes several features such as creating routines for children, assigning tasks, creating rewards, challenges, and quizzes, and setting budgets for each kid.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374122/pointer_rewards_di149y.png",
        description:
          "Parents can create rewards associated with points, and children can claim the rewards after reaching the set amount of points through completing tasks, answering quizzes and participating in quizzes.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374101/pointer_child_profile_cpnup4.png",
        description:
          "As you open the child’s profile, you’re greeted with a dashboard that organizes their routines, tasks, rewards, and progress. Each child is given a generated username and password to access their account.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374110/pointer_rewards_child_rfslzn.png",
        description:
          "A dedicated space for celebrating success, where the child’s rewards and achievements are proudly displayed, motivating them to keep pushing forward.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374114/pointer_routines_weekly_pb5a8l.png",
        description:
          "A glance at the weekly routine reveals an intuitive layout where parents can assign tasks and monitor progress seamlessly.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374114/pointer_routine_daily_o0wbhk.png",
        description:
          "The daily breakdown provides a comprehensive view of what’s been done and what still needs attention, empowering kids to stay on top of their responsibilities.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374117/pointer_kids_modal_qvvtgo.png",
        description:
          "Parents can assign tasks to specific children or create a global task for all their kids.",
      },

      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374124/pointer_challenge_card_dqgdil.png",
        description:
          "Creating challenges is easy and fun—parents can craft custom tasks with specific rewards, adding a layer of excitement to their child’s day-to-day activities. Each challenge card displays the challenge’s details—what’s at stake, how it’s earned, and the reward awaiting completion.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374120/pointer_quizzes_eig2cc.png",
        description:
          "Parents can set up engaging quizzes to test their children’s knowledge and progress. The quizzes are generated via Google's Gemini AI, by prompting it with the parent's input and child's age.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374096/pointer_quizzes_child_xiqljh.png",
        description:
          "Children can engage in the quizzes to earn points. They can filter quizzes by topic, review already answered ones, and track their progress via the point system.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374112/pointer_budget_em8nqa.png",
        description:
          "Parents can manage their kids' rewards by using the budget tool, ensuring they allocate rewards wisely while maintaining fun incentives for the kids.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374106/pointer_notif_k4mtxh.png",
        description:
          "Parents stay informed with instant notifications about their child’s progress, upcoming tasks, and completed activities, fostering communication and connection.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374126/pointer_settings_lnpolt.png",
        description:
          "The settings page, built with flexibility in mind, allows users to tailor the app to their unique needs—everything from notifications to account preferences can be fine-tuned here.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374130/pointer_freeTrial_snle3c.png",
        description:
          "New users are invited to try the app’s full potential through a risk-free trial, easing them into the experience without any commitment.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374132/pointer_plans_babk2a.png",
        description:
          "A detailed breakdown of the available plans showcases the benefits of each, allowing parents to choose the best fit for their needs.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374109/pointer_please_pay_cpvi8o.png",
        description:
          "When the free trial ends, parents are faced with a blocking modal that prompts them to pay for a subscription to continue using the app.",
      },
    ],
    conclusion:
      "While this project holds immense potential for future enhancements. One exciting feature under consideration is a 'Teacher Mode,' which would empower educators to assign homework and track students' grades and progress. This addition would enable parents to monitor their children's academic journey more closely. Furthermore, I envision integrating gamification elements to make learning more engaging, along with personalized learning plans tailored to each child's unique needs and preferences. As I continue to develop this application, I aim to create a comprehensive tool that supports not only children’s behavioral growth but also their academic achievements.",
    detailedDescription: [],
    detailsLink: "/projects/1",
    demoLink: "https://pointer-app.vercel.app",
    githubLink: "https://github.com/ahmedrioueche/pointer",
    isVisible: true,
  },
  {
    id: "2",
    title: "Modbus Gateway Manager",
    rank: 6,
    techStack:
      "Electronjs, Javascript, Nodejs, CSS, Sqlite, Bcript, Serialport.",
    description:
      "A Desktop application based on Electron for the configuration and diagnosis of a Modbus gateway, part of my master's degree graduation project supervised by Cevie Doofas Innovative Solutions company.",
    imageDescPairs: [
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374478/gm_login_yzbdfl.png",
        description:
          "This application is a part of a bigger project titled 'Design and Implementation of a Modbus TCP/RTU Industrial Gateway', finished in june 2024 as a part of my graduation project from the institue of electrical and electronic engineering in Algeria with a master's in computer engineering supervised by Cevie Doofas Innovative Solutions. This gateway is created to facilitate communication between industrial machines that use Modbus protocol variations (TCP, RTU).",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374485/gateway_1_pj2ylj.jpg",
        description:
          "I designed and built a fully functional PCB using KiCad and developed the firmware in C and C++ with STM32Cube. This project significantly sharpened my technical skills and guided me through the complete process of building a complex, multi-component project from start to finish.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374475/gm_general_plw7kn.png",
        description:
          "The main feature of this app is configuring the Modbus gateway. by specifying different parameters that are used in the gateway's firmware.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374478/gm_mode_uj7zqv.png",
        description:
          "Users should configure the Modbus mode (RTU or TCP) that the gateway should run on, for instance, if it is hooked to a machine operating as Modbus RTU client (master), the gateway should be configured as an RTU server (slave), and vice versa.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374481/gm_serial_gkjtfl.png",
        description:
          "Users are able to configue the different serial parameters, such as the baudrate, parity, stop bits, data size, and the slave identifier (server id) of the gateway (If its connected to an RTU master (client)).",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374479/gm_network_fnleu1.png",
        description:
          "Users are able to configure the IP of the gateway along with the mask and gateway IP, and specify the remote IP of the TCP server machine. The configuration data is sent via USB utilizing the Serialport library.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374484/gm_diag_1_ofxf7q.png",
        description:
          "The other main feature of this app is diagnosing the packets going through the gateway. By having copies of the packets sent to the app via USB, users can diagnos and analyze the behavior of the gateway and troubleshoot the overall system.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374482/gm_settings_ervzpw.png",
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
    rank: 3,
    techStack:
      "Nextjs, TypeScript, Reactjs, Tailwindcss, Prisma, PostgreSQL, Supabase, Pusher, Bcrypt, Gemini, REST APIs, Vercel",
    description:
      "KeyMaster is a lightweight, responsive web app designed for typing practice with a built-in leaderboard, real-time competition, and personalized settings. The app leverages Gemini to fetch training paragraphs tailored to the user’s preferences and real-time competition via Pusher.",
    imageDescPairs: [
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741369866/km_home_revhuy.png",
        description:
          "Users can select a topic and language of choice, press the start button, and trigger Gemini to provide a paragraph of the specified length. As they type, the timer, speed calculator, and character counter offer real-time feedback and performance metrics.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741369869/km_loginModal_ndbj35.png",
        description:
          "Users are prompted to log in for a full app experience, including access to the leaderboard and personalized settings.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741369870/km_signup_mlye5d.png",
        description:
          "New users can sign up using a simple form. The user data is stored in Supabase, utilizing Prisma for schema management and seamless database migrations.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741369866/km_compete_mkwtd8.png",
        description:
          "Users can compete in real-time typing challenges with friends or other players, powered by Pusher for seamless real-time communication. Real-time communication poses challenges such as synchronization, race conditions, and deadlocks, which had to be overcome.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741369870/km_search_ft5gmy.png",
        description:
          "The search functionality allows users to look up specific games or competitors using a custom search algorithm that ensures fast and accurate results.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741369866/km_join_tpqqwh.png",
        description:
          "Users can create rooms to invite friends or join friends' rooms. This functionality is managed in the Postgres database.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741369870/km_settings_cekzj9.png",
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
    rank: 7,
    techStack:
      "Nextjs, TypeScript, Reactjs, Redux, NextAuth, Tailwindcss, Prisma, PostgreSQL, Neon, Bcrypt, REST APIs, Vercel",
    description:
      "Beam is a fully responsive live streaming platform that leverages PostgreSQL for data persistence and NextAuth for authentication.",
    imageDescPairs: [
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374615/home_txq94w.png",
        description:
          "Users can navigate current streams or search while viewing followed streamers and recommended ones.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374613/dashboard_kg1f8i.png",
        description:
          "Users can access the creator's dashboard for managing live streams.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374609/community_bchoqf.png",
        description:
          "Streamers can manage their community and block or unblock users.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374621/profile_apfzef.png",
        description:
          "Users can manage their profiles and visit other users' profiles. Moreover, all views are built to support dark and light themes according to user preference.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374622/settings_ko0rxt.png",
        description: "Users can manage their account settings.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374624/settings_2_tqpxqe.png",
        description: "Users can change the language and other settings.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374619/mobileSidebar_gfg0cm.png",
        description:
          "A custom mobile sidebar ensures a nice responsive design.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374608/signup_dsyekc.png",
        description:
          "A user can create a custom account that is inserted into the Neon PostgreSQL database using a Prisma schema.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374618/login_a7ccxf.png",
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
    rank: 4,
    techStack:
      "TypeScript, Reactjs, Redux, Tailwindcss, Nodejs, JWT, Express, TensorFlow.js, Prisma, PostgreSQL, Supabase, Bcrypt, GraphQL, Gemini, Vercel",
    description:
      "GymPro is a gym management application that utilizes facial recognition for member authentication.",
    imageDescPairs: [
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374303/home_rml6jv.png",
        description:
          "The Home page provides an overview of key metrics and member activities, giving users quick access to important business information.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374298/addMember_tveiyl.png",
        description:
          "Users can add a member by taking a picture of them or uploading an image, which is stored in Supabase storage. Then, users fill in their data, which is stored in Supabase.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374307/members_ikxrnl.png",
        description: "Users can filter members based on a set of criteria.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374301/dashboard_o1o3f4.png",
        description:
          "The dashboard is useful for analyzing business performance.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374298/chatbot_wkwbkm.png",
        description:
          "Built using Gemini AI, this chatbot provides answers to users' questions and concerns. It works by being prompted with a thorough description of the app, along with user input.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374308/mobileSideBar_p4wfhh.png",
        description:
          "A custom sidebar is used to ensure responsiveness on small screens.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374310/settings_cbvfsz.png",
        description:
          "Users can customize their experience using the settings menu.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374309/profile_xm2evi.png",
        description: "Users can customize their profile information.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374302/feedback_ngk9bs.png",
        description: "A page where users can submit feedback and ratings.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374305/login_mjilrt.png",
        description:
          "The login process utilizes Supabase Auth for authenticating users.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741374297/signup_nq0x9d.png",
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
    rank: 2,
    techStack:
      "TypeScript, Next.js, Tailwind CSS, Gemini, Prisma, Supabase, ElevenLabs, RESTAPIs, Vercel",
    description: `AI-Read is a smart reading app that helps users learn languages through reading. It offers AI-powered translation, explanations, and summaries, making texts easier to understand. The app also includes a text-to-speech feature to improve pronunciation and boost language comprehension.`,
    imageDescPairs: [
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741369794/trans_z4s3bm.png",
        description: `The translation of words or sentences is a key feature in this app. Thanks to the Gemini API, users can get instant translations of text just by clicking or highlighting it, making the app very useful.`,
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741369788/autoRead_d3s9tx.png",
        description: `The text-to-speech feature triggers as soon as the user the button is clicked. Built using the browser's text-to-speech API in basic mode, and ElevenLabs API in premium mode, it is accompanied by auto scrolling and heighlighting to provice a smooth reading experience.`,
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741369793/settings_dobylt.png",
        description:
          "The settings page allows users to customize their experience, such as selecting the TTS type and voice, theme and more",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741369788/features_m64qij.png",
        description:
          "Thee features modal allows users to explore the app's features and available plans.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741369789/free-trial_hyvdmw.png",
        description:
          "The free trial triggers as soon the user launches the app the first time. The app detects the visitors and logs them into the DB, if the visitor creates an account, the free trial info is transformed to the user's account to make the free trial based on the user's device and not account.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741369789/payment_gsykyd.png",
        description:
          "Users can upgrade their account by paying via paypal. more payemnt methods will be added in the furure",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741369793/signup_p4tf5i.png",
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
  {
    id: "7",
    title: "CodeArena",
    rank: 1,
    techStack:
      "Reactjs, TypeScript, Redux, React-Query, Tailwindcss, Nodejs, Express, MongoDB, Mongoose, Gemini, Railway, Vercel",
    description:
      "An AI-powered coding platform where developers elevate their skills through competitive programming battles and collaborative challenges. Featuring real-time AI mentorship, personalized problem generation, and comprehensive performance analytics.",
    imageDescPairs: [
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1746229238/solo_v6abeh.png",
        description:
          "Player can choose their prefered language, topics, skill level and time duration of the problem.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741369632/solo_xquuwk.png",
        description: `The player is greeted with a neat playground consisting mainly of a code editor using Monaco Editor,
           and the problem container.`,
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741369631/solo-problem_y7znwj.png",
        description: `When the game is started, The coding problem is fetched via Gemini with carefully designed prompt ensuring the correct 
          retrieval of the response as a JSON, consisting of examples and test cases, with the ability to get hints.`,
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741369631/solo-test-cases_lrxiji.png",
        description: `Players can create their own test cases or generate them via AI. They can also validate the test cases if created manually, 
          and run the tests against their code to help them get to the correct solution.`,
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741369632/solo-get-solution_eqyoxe.png",
        description:
          "If the player can't think of a solution, they can get it directly. They can also get help by asking for the next line of code to move forward if stuck.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741369632/solo-board_vv08qa.png",
        description:
          "A board is for the player to draw flowcharts and brainstorm.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741369632/solo-notepad_jdkxnt.png",
        description:
          "A notepad is helpful if the player wants to save notes or brainstorm ideas.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741369632/solo-problem-chat_epbe4y.png",
        description: `The chat is useful for asking about concepts and topics, or getting help. The chat is powered by Gemini 
          by prompting it with the player's question along with the chat's history to make the conversation flow,`,
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741369632/solo-settings_xpdepw.png",
        description:
          "Players can change the game settings to generate different problems to keep the learning process fun and engaging.",
      },

      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741369631/solo-submit-1_vju3vn.png",
        description: `When the player submits their solution, Gemini is prompted to evaluate the solution's correctness and accuraccy, 
          provide feedback, correct mistakes. A point system is used to evaluate the player's performance.`,
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741369631/solo-submit-2_r99nll.png",
        description:
          "Gemini is also prompted to provide the correct solution, bottleneck analysis and suggestions for improvement.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1741369633/solo-solution-chat_uqjeve.png",
        description:
          "The player can chat with Gemini to discuss the problem and solution, resolve ambiguities, and maximize learning benefits.",
      },
      {
        image:
          "https://res.cloudinary.com/drh61flr3/image/upload/v1743017469/landing-chat_ral52u.png",
        description:
          "Landing page FAQ section with a creative twist, a chat with a an AI chatbot, enabled via Gemini.",
      },
    ],
    conclusion:
      "This project is still under development, and further updates will be provided as the project advances.",
    detailsLink: "/projects/7",
    demoLink: "https://codearena-landing.vercel.app/",
    githubLink: "https://github.com/ahmedrioueche/codearena",
    isVisible: true,
  },
];
export const experience = [
  {
    companyName: "Qareeb",
    companyLogo: "/images/qareeb.png",
    jobTitle: "Frontend Developer (React, TypeScript)",
    startDate: "November 2024",
    endDate: "Present",
    introduction: `Qareeb is an innovative tech startup focused on AI-driven solutions including computer vision, machine learning, and LLMs.`,
    summary: [
      "Led frontend development of Wizabot, an AI-powered marketing assistant, from concept to MVP to SAAS",
      "Built the frontend with React and TypeScript, working closely with UI/UX designers",
      "Integrated REST APIs in collaboration with backend developers",
      "Developed an AI-powered translation tool for multi-language support",
      "Played key role in transforming Wizabot into market-ready product",
    ],
    description: `Wizabot is an advanced AI-powered web application that provides marketing assistance to businesses through intelligent AI agents.`,
    myWork: `As the frontend developer, I architected and implemented the React/TypeScript frontend for Wizabot, ensuring optimal performance and user experience. I collaborated cross-functionally to integrate AI capabilities and REST APIs, and developed innovative solutions like our translation automation tool.`,
    conclusion: `This role significantly advanced my React expertise, particularly in building performant, component-based architectures with TypeScript. I deepened my understanding of state management, hooks optimization, and API integration patterns while developing scalable SAAS platforms at the intersection of frontend development and AI technologies.`,
    isVisible: true,
    link: "https://dashboard.wizabot.com",
  },
  {
    companyName: "Doofas Innovative Solutions",
    companyLogo: "/images/doofas.png",
    jobTitle: "Computer Engineering Intern",
    startDate: "January 2024",
    endDate: "June 2024",
    introduction: `Tech consulting company specializing in embedded systems for automation, IoT, and industrial communication.`,
    summary: [
      "Built desktop application using Electron.js for configuring Modbus devices",
      "Developed lightweight web server with REST APIs using Mongoose",
      "Created frontend interfaces with HTML, CSS, and JavaScript",
      "Wrote firmware in C/C++ using FreeRTOS and STM32CubeIDE",
      "Documented full development process and implementation details",
    ],
    description: `Worked on industrial automation projects involving Modbus communication protocols and embedded systems.`,
    myWork: `I developed both software and firmware components for industrial systems, including a configuration desktop app and embedded communication firmware. My work involved full-stack development from low-level hardware to user interfaces.`,
    conclusion: `This internship provided hands-on experience with embedded systems and full-stack development, strengthening my technical documentation and problem-solving skills.`,
    isVisible: true,
    link: null,
  },
];
