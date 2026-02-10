import React from "react"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import Link from "next/link"

import { images } from "../../constants"
import Image from "next/image"

type Props = {}

function ProjectDetails({}: Props) {
  const vpa_connect = [
    {
      summary: `VPA Connect is an enterprise B2B SaaS platform that streamlines vendor-paid advertising for the Australian residential real estate industry. It acts as a digital intermediary connecting real estate agents, agencies, and suppliers — enabling property marketing campaigns to launch immediately through flexible payment models including upfront (Stripe), deferred financing (Campaign Flow, Afterpay), and BECS direct debit, while handling multi-party invoice reconciliation and settlement.`,
      type: [
        "B2B SaaS",
        "Fintech",
        "Real Estate",
        "Dashboard",
        "Multi-Tenant",
        "Payments",
        "Modern Design",
        "Database",
        "Admin",
      ],
      landingImage: images.vpa_marketing, // update with your actual image reference
      objective: `In Australian real estate, marketing a property requires upfront capital from sellers for services like photography, signage, and advertising — often before the property is even sold. Agencies and agents were relying on fragmented manual processes, spreadsheets, and phone calls to coordinate suppliers, track invoices, and manage payments across multiple parties. There was no unified platform to handle the complex payment flows, especially deferred financing where sellers need campaigns to launch immediately but pay later. VPA Connect aims to solve this with the following objectives:
    Unified Campaign Management: A single platform for agents to create property marketing campaigns, add suppliers, build budgets, and track every invoice item from creation to settlement.
    Flexible Payment Orchestration: Support for upfront payments (Stripe checkout), deferred financing (Campaign Flow with KYC/AML verification), and BECS direct debit — including split payments across methods on a single campaign.
    Multi-Stakeholder Coordination: Seamlessly connect agencies, their agents, and service suppliers with role-based access, approval workflows, and automated invoice lifecycle management.
    Subscription-Based Revenue Model: Tiered agency subscriptions (Bronze to Platinum) with usage-based billing, campaign quotas, and overage charges.
    Compliance & Security: Integrated identity verification (ConnectID), ABN/GST validation via the Australian Business Register, DocuSign for director agreements, and robust financial compliance for BECS mandates and deferred payment applications.
    Automated Supplier Settlement: Stripe Connect integration for direct supplier payouts, platform fee calculation, and end-to-end payment tracking from seller to supplier. Please note this repo is private.`,
      webStack:
        "Built with Next.js 15 App Router and React 18 in strict TypeScript for a type-safe, server-first architecture with server actions replacing traditional API routes.\nMongoDB with Typegoose provides flexible document modeling for complex relational data across campaigns, invoices, agencies, and payment transactions.\nClerk handles multi-tenant authentication with role-based access control for agents, suppliers, and admins, integrated into Next.js middleware for route protection.\nStripe powers the complete payment infrastructure — checkout sessions for upfront payments, BECS direct debit mandates, Connect accounts for supplier settlement, and subscription billing with tiered pricing.\nCampaign Flow and Afterpay integrations provide deferred payment financing with webhook-driven async status updates processed via Upstash QStash task queuing.\nZustand manages client-side state while React Hook Form with Zod validation handles complex multi-step forms.\nTailwindCSS with shadcn/ui components delivers a consistent, accessible UI with TanStack Table powering data-heavy views.\nUpstash Redis provides API rate limiting, and the CI/CD pipeline includes ESLint, Prettier, TypeScript strict checking, and Jest testing with pre-commit hooks.",
      stack: [
        "Next.js 15",
        "React 18",
        "TypeScript",
        "MongoDB",
        "Typegoose",
        "Clerk",
        "Stripe",
        "Zustand",
        "React Hook Form",
        "Zod",
        "TailwindCSS",
        "shadcn/ui",
        "TanStack Table",
        "Upstash Redis",
        "Upstash QStash",
        "SendGrid",
        "DocuSign",
        "pnpm",
        "Jest",
        "Vercel",
      ],
      liveUrl: "https://vpaconnect.com.au/",
      gitUrl: "#", // private repo — update or remove as needed
      learnings: `This project deepened my understanding of complex payment orchestration in a regulated fintech environment — handling multiple payment methods (Stripe checkout, BECS direct debit, deferred financing) on a single transaction required careful state machine design and webhook-driven reconciliation. Building a multi-tenant platform with three distinct user roles (agents, suppliers, agencies) taught me how to architect role-based middleware, conditional routing, and organization-scoped data access at scale. Working with Australian financial compliance (AML/KYC via ConnectID, ABN/GST verification, BECS mandates) was particularly valuable — understanding how regulatory requirements shape API design and user flows. The subscription billing system with tiered pricing, campaign quotas, and usage-based overages gave me hands-on experience with Stripe's billing APIs beyond simple checkout. Implementing server actions in Next.js 15 App Router as a replacement for traditional API routes was a significant architectural shift that improved type safety and reduced boilerplate across the entire backend.`,
      bottomImage: images.vpa_app, // update with your actual image reference
      imageDesc: `Campaign Dashboard`,
    },
  ]

  const EduProvide = [
    {
      summary: `Sikh Volunteers Australia operates a medium-sized school that offers a variety of classes during weekends and weekdays. These sessions are conducted face-to-face and are structured around a comprehensive curriculum, incorporating both classwork and homework to support student learning.`,
      type: [
        "Open Source",
        "Educational",
        "Instructional",
        "Dashboard",
        "Modern Design",
        "Database",
        "Admin",
      ],
      landingImage: images.ftgraph,
      objective: ` The school has been using an enterprise school management software , an expensive cloud-based subscription model that offers limited functionalities. Additionally, the previous custom system used by the school was found to be unstable, suffering from critical functional defects that frequently disrupted operations. Sikh Volunteers Australia aims to implement an affordable solution—either custom-built or off-the-shelf—that delivers the necessary functionalities efficiently and securely.Some of the objectives are as follows - Seamless and Smooth Administration: Ensures efficient management of student and school administrative tasks without disruptions,
Automated and Optimised Workflows:Streamlines business processes with automation, leading to enhanced operational efficiency,
Increased Engagement: Fosters greater interaction between teachers, students, and parents, enhancing the educational experience,
 Unique Learning Journeys: Offers personalised educational pathways that cater to the individual needs of each student.
 Increased Enrollments: Attracts more students through an improved educational environment and streamlined administrative processes,
 Centralized Information Hub: Provides a single access point for all essential information about students, teachers, curriculum, and school operations,
 Enhanced Security Features:Protects personal data and sensitive information from cyber threats with robust security measure.

      `,
      webStack:
        "Used React.js for faster build with SPA for rendering to load pages leading to faster page loading times. \n Designed the architecture and as a sole developer to create core features and integrate third party UI kits like Shadcn, headless UI etc. Implemented Redux Toolkit to maintain a centralized client side state and keep changes mapped to UI through a complex and dynamic frontend allowing for connection to multiple APIs. optimised Redux Query and cache data for better user experience. Designed UI using Tailwind CSS with accessibility and responsiveness on all devices.	Worked on different branches, making pull requests to resolve merge conflicts and maintain a smooth git workflow.	Implemented CI/CD pipeline using git hub actions with self hosted workers with code linting and preview deploys. The Backend is setip using express and the database is based on Postgres db hosted on aws RDS instance.",
      stack: [
        "React Js",
        "Tailwind",
        "Redux Toolkit",
        "Redux Query",
        "Express",
        "Node",
        "PostgreSql",
        "Prisma",
        "Git Actions",
        "AWS ec2",
        "nginx",
      ],
      liveUrl: "https://ft-dashboard-app.onrender.com/",
      gitUrl: "https://github.com/sethumadh/FT-Dashboard/",
      learnings: ` I worked hybrid environment  on the project as  using
      Github. The project design was wire framed using figma
      and the overall application architecture and file folder was inspired by existing best practises. Creating features both backend and frontend gave me new and usefull insights and helped me undertsand time management.
      Rolled out own custom jwt authentication system , which will be useful in my upcoming
      projects. Also used Shadcn UI which is UI kit based on tailwind which improved my skillset`,
      bottomImage: images.ftstdDetails,
      imageDesc: `Student Details`,
    },
  ]

  const famChat = [
    {
      summary: `A personal project aimed at self improvemnt and learning new next js app router paradigm and mental model by creating core
      functionalities for a family chat application inspired from discord. Implemented on a custom designed schema using postgres
      DB using prisma orm with back-end using the serverless functions of next js, the new app router, server actions and react server components.
      On the front end, tailwind and typescript completed the core tech stack. For upload, 
      used uploadthing.com which is a wrapper around AWS s3 bucket and for real time chat socket.io and Livekit for video chat. Implemented CI/CD pipeline with
      Typescript type-checking, database migration and code linting and deployed in railway app`,
      type: [
        "Open Source",
        "Full Stack",
        "chat",
        "Entertainment",
        "Modern Design",
        "relational Database",
        "social networking",
      ],
      landingImage: images.landingPage,
      objective: `  The objective is to code a beautifully designed family/ closed friends chat
      application dubbed 'famChat' App. This Application had a time line of 2 weeks time. The app should
      have search function for searching members, channels , live chat and video chat. Role based actions is a must which are
       "admin", "moderator" and "guest". It is importamt for the admin/moderators to kick out members and or change their status. Infinte query for loading past chat messages only upon scroll is included. The user needs to sign up and log
      in and must be able to join a channel through invitation or can simply sig up and create a new server to start. 
      Relational postgres is used to wore up relationship models between entities. 
      `,
      webStack: `"Designed front-end using Next js with zustand for client sidestate management and performed API integration of 10+ endpoints and the data is fetched using
        react server components. Engineered back-end using next js serverless functions and modelled database layer
         with postgres and prisma and designing functionalities for the project ‘s search, infinite loading. Designed and implemented a secure  authentication
          system for both back-end and front-end using
          clerk auth, allowing users to register an account and gain access to additional features. Designed the project UI interface and navigation 
          for both Desktop and Mobile responsiveness using tailwind and shadcn ui. Implemented CI/CD pipeline with Typescript type-checking, code linting and preview deploys."`,
      stack: [
        "NextJs",
        "TypeScript",
        "Tailwind",
        "Zustand",
        "react server components",
        "Next app router",
        "Postgres",
        "Prisma",
        "Clerk",
        "socket.io",
        "eslint",
      ],
      gitUrl: "https://github.com/sethumadh/famChat",
      liveUrl: "https://famchat-production.up.railway.app/",
      learnings: `This project was a personal project aimed at skill improvement. The new paradigm shift happening in the next js world using
      the app router with server actions is used with this project. Composing the client components and server components was a challenge albiet do-able.
      The sockets still wouldnt work with the app router so I had to make us of the pages./api folder to use socket. Hopefully in future that would change. 
      SImilarily in this project I have mainly used react server components for server actions and not server mutations. That is because I was getting bugs
      and unxepected behaviour upon server mutations and revalidations. At the time of writing this , server actions is still experimental therefore I would revisit this
      section once server actions are stable. Uploadthing and sockets were other new learnings for me and also the use of zustand which is a lightweight alternative to redux toolkit 
      `,
      bottomImage: images.oneOnOne,
      imageDesc: ` Direct chat`,
    },
  ]
  const router = useRouter()
  const projectId = router.query.projectId
  return (
    <section
      className={`works  bg-white pt-10 md:pt-2 font-muli text-xl font-light`}
    >

      {projectId == "Bright" && (
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.0 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0.2, x: 0 },
            visible: { opacity: 1, x: 0 },
          }}
          className="w-[85%] md:w-[70%] mx-auto mt-8 md:mt-12 md:px-8 md:py-8"
        >
          <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-4 pt-8 pb-4">
            <div className="relative  text-2xl md:text-4xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
              {projectId}
              <div className="h-[13.5px] w-[100%] bg-orange-600 absolute right-0 bottom-0 -z-30"></div>
            </div>
          </div>
          <div>
            <div className="mb-2">1 minute read</div>
            <div className="leading-loose tracking-wide mb-2 md:mb-4">
              {/* summary*/}
              {EduProvide[0].summary}
            </div>
            <div className=" mb-4">
              <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-1 md:mb-4 pt-8 pb-4">
                <div className="relative  text-xl md:text-2xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                  Project Type
                  <div className="h-[8.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
                </div>
              </div>
              <div className="flex justify-center md:justify-start flex-wrap">
                {/* Project Type */}
                {EduProvide[0].type.map((item, i) => (
                  <div
                    className="text-white bg-orange-700 px-2 py-1  mr-1 mb-1 text "
                    key={i}
                  >
                    <h2 className="text-center md:text-left italic text-sm md:text-md">
                      {item}
                    </h2>{" "}
                  </div>
                ))}
              </div>
            </div>
            {/* landing image */}
            <div className="max-w-[100%] md:max-w-[80%] border border-none rounded mx-auto mb-2 md:mb-6">
              <Image src={images.ftgraph} className="w-full" alt="filmpire" />
              <p className="text-sm mt-1">{projectId} landing page</p>
            </div>
            <div className="w-full md:w-1/3  flex-col items-center mx-auto hidden">
              {/* status */}
              <h1 className="text-lg md:text-xl font-semibold md:font-bold tracking-wide text-center italic py-4">
                Status
              </h1>
              <div className="flex mx-auto items-center justify-center mb-3 md:mb-0">
                <Link
                  href={EduProvide[0].gitUrl}
                  className="mr-12 text-sm md:text-base relative -top-1 -left-1 bg-orange-700 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-2 before:left-2 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 duration-300"
                >
                  Github
                </Link>
                <Link
                  target={`_blank`}
                  href={EduProvide[0].liveUrl}
                  className="relative text-sm md:text-base -top-1 -left-1 bg-orange-700 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-2 before:left-2 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 duration-300"
                >
                  Live
                </Link>
              </div>
            </div>

            <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-1 md:mb-4 pt-8 pb-4">
              <div className="relative  text-xl md:text-2xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                Project Objective
                <div className="h-[13.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
              </div>
            </div>
            <div className="leading-relaxed tracking-wide mb-2 md:mb-4">
              {/*  Project Objective */}
              {EduProvide[0].objective}
            </div>
            <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-widemb-1 md:mb-4 pt-8 pb-4">
              <div className="relative  text-xl md:text-2xl  font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                Web Stack - Explanation
                <div className="h-[13.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
              </div>
            </div>
            <div className="leading-relaxed tracking-wide mb-4 md:mb-4">
              {/*  Web Stack - Explanation */}
              {EduProvide[0].webStack}
            </div>
            <div className="flex flex-col md:flex-row justify-around my-4  h-[250px] md:h-auto">
              <div className="w-full ">
                <h1 className="text-lg md:text-xl font-semibold md:font-bold tracking-wide text-center md:text-left italic py-4">
                  Stack
                </h1>
                {/*  Stack */}
                <ul className="flex flex-wrap">
                  {EduProvide[0].stack.map((item, i) => (
                    <div
                      key={i}
                      className="text-white bg-black px-2 py-1  mr-1 mb-1 text "
                    >
                      {item}
                    </div>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-1 md:mb-4 pt-8 pb-4">
              <div className="relative  text-xl md:text-2xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                Problems & Learnings
                <div className="h-[13.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
              </div>
            </div>
            <div className="leading-relaxed tracking-wide mb-2 md:mb-4">
              {/* Problems and Learnings */}
              {EduProvide[0].learnings}
            </div>
            {/* image */}
            <div className="max-w-[100%] md:max-w-[80%] border border-none rounded mx-auto mb-2 md:mb-6">
              <Image
                src={images.ftstdDetails}
                className="w-full"
                alt="filmpire"
              />
              <p className="text-sm mt-1">{EduProvide[0].imageDesc}</p>
            </div>
          </div>
        </motion.article>
      )}
      {projectId == "vpa_connect" && (
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.0 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0.2, x: 0 },
            visible: { opacity: 1, x: 0 },
          }}
          className="w-[85%] max-w-7xl md:w-[70%] mx-auto mt-8 md:mt-12 md:px-8 md:py-8"
        >
          <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-4 pt-8 pb-4">
            <div className="relative  text-2xl md:text-4xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
              {projectId}
              <div className="h-[13.5px] w-[100%] bg-orange-600 absolute right-0 bottom-0 -z-30"></div>
            </div>
          </div>
          <div>
            <div className="mb-2">1 minute read</div>
            <div className="leading-loose tracking-wide mb-2 md:mb-4">
              {/* summary*/}
              {vpa_connect[0].summary}
            </div>
            <div className=" mb-4">
              <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-1 md:mb-4 pt-8 pb-4">
                <div className="relative  text-xl md:text-2xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                  Project Type
                  <div className="h-[8.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
                </div>
              </div>
              <div className="flex justify-center md:justify-start flex-wrap">
                {/* Project Type */}
                {vpa_connect[0].type.map((item, i) => (
                  <div
                    className="text-white bg-orange-700 px-2 py-1  mr-1 mb-1 text "
                    key={i}
                  >
                    <h2 className="text-center md:text-left italic text-sm md:text-md">
                      {item}
                    </h2>{" "}
                  </div>
                ))}
              </div>
            </div>
            {/* landing image */}
            <div className="max-w-[100%] md:max-w-[80%] border border-none rounded mx-auto mb-2 md:mb-6">
              <Image src={images.vpa_app} className="w-full" alt="vpa_connect" />
              <p className="text-sm mt-1">{projectId} landing page</p>
            </div>

            <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-1 md:mb-4 pt-8 pb-4">
              <div className="relative  text-xl md:text-2xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                Project Objective
                <div className="h-[8.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
              </div>
            </div>
            <div className="leading-relaxed tracking-wide mb-2 md:mb-4">
              {/*  Project Objective */}
              {vpa_connect[0].objective}
            </div>
            <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-widemb-1 md:mb-4 pt-8 pb-4">
              <div className="relative  text-xl md:text-2xl  font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                Web Stack - Explanation
                <div className="h-[13.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
              </div>
            </div>
            <div className="leading-relaxed tracking-wide mb-4 md:mb-4">
              {/*  Web Stack - Explanation */}
              {vpa_connect[0].webStack}
            </div>
            <div className="flex flex-col md:flex-row justify-around  h-[250px] md:h-auto">
              <div className="w-full md:w-1/3">
                <h1 className="text-lg md:text-xl font-semibold md:font-bold tracking-wide text-center md:text-left italic py-4">
                  Stack
                </h1>
                {/*  Stack */}
                <ul className="flex flex-wrap">
                  {vpa_connect[0].stack.map((item, i) => (
                    <div
                      key={i}
                      className="text-white bg-black px-2 py-1  mr-1 mb-1 text "
                    >
                      {item}
                    </div>
                  ))}
                </ul>
              </div>

              <div className="w-full md:w-1/3">
                {/* status */}
                <h1 className="text-lg md:text-xl font-semibold md:font-bold tracking-wide text-center md:text-left italic py-4">
                  Status
                </h1>
                <div className="flex mx-auto items-center justify-center mb-3 md:mb-0">
                  <Link
                    href={vpa_connect[0].gitUrl}
                    className="mr-12 text-sm md:text-base relative -top-1 -left-1 bg-orange-700 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-2 before:left-2 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 duration-300"
                  >
                    Github Code
                  </Link>
                  <Link
                    target={`_blank`}
                    href={vpa_connect[0].liveUrl}
                    className="relative text-sm md:text-base -top-1 -left-1 bg-orange-700 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-2 before:left-2 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 duration-300"
                  >
                    Live
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-1 md:mb-4 pt-8 pb-4">
              <div className="relative  text-xl md:text-2xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                Problems & Learnings
                <div className="h-[13.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
              </div>
            </div>
            <div className="leading-relaxed tracking-wide mb-2 md:mb-4">
              {/* Problems and Learnings */}
              {vpa_connect[0].learnings}
            </div>
            {/* image */}
            <div className="max-w-[100%] md:max-w-[80%] border border-none rounded mx-auto mb-2 md:mb-6">
              <Image src={images.vpa_app} className="w-full" alt="vpa_connect" />
              <p className="text-sm mt-1">{vpa_connect[0].imageDesc}</p>
            </div>
          </div>
        </motion.article>
      )}
      {/*  Car rent application */}

      {projectId == "famChat" && (
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.0 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0.2, x: 0 },
            visible: { opacity: 1, x: 0 },
          }}
          className="w-[85%] md:w-[70%] mx-auto mt-8 md:mt-12 md:px-8 md:py-8"
        >
          <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-4 pt-8 pb-4">
            <div className="relative  text-2xl md:text-4xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
              {projectId}
              <div className="h-[13.5px] w-[100%] bg-orange-600 absolute right-0 bottom-0 -z-30"></div>
            </div>
          </div>
          <div>
            <div className="mb-2">1 minute read</div>
            <div className="leading-loose tracking-wide mb-2 md:mb-4">
              {/* summary*/}
              {famChat[0].summary}
            </div>
            <div className=" mb-4">
              <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-1 md:mb-4 pt-8 pb-4">
                <div className="relative  text-xl md:text-2xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                  Project Type
                  <div className="h-[8.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
                </div>
              </div>
              <div className="flex justify-center md:justify-start flex-wrap">
                {/* Project Type */}
                {famChat[0].type.map((item, i) => (
                  <div
                    className="text-white bg-orange-700 px-2 py-1  mr-1 mb-1 text "
                    key={i}
                  >
                    <h2 className="text-center md:text-left italic text-sm md:text-md">
                      {item}
                    </h2>{" "}
                  </div>
                ))}
              </div>
            </div>
            {/* landing image */}
            <div className="max-w-[100%] md:max-w-[80%] border border-none rounded mx-auto mb-2 md:mb-6">
              <Image
                src={images.landingPage}
                className="w-full"
                alt="filmpire"
              />
              <p className="text-sm mt-1">{projectId} landing page</p>
            </div>

            <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-1 md:mb-4 pt-8 pb-4">
              <div className="relative  text-xl md:text-2xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                Project Objective
                <div className="h-[8.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
              </div>
            </div>
            <div className="leading-relaxed tracking-wide mb-2 md:mb-4">
              {/*  Project Objective */}
              {famChat[0].objective}
            </div>
            <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-widemb-1 md:mb-4 pt-8 pb-4">
              <div className="relative  text-xl md:text-2xl  font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                Web Stack - Explanation
                <div className="h-[13.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
              </div>
            </div>
            <div className="leading-relaxed tracking-wide mb-8 md:mb-4">
              {/*  Web Stack - Explanation */}
              {famChat[0].webStack}
            </div>
            {/* stack
             */}
            <div className="flex flex-col items-center md:flex-row justify-center my-4">
              <div className="w-full md:w-1/2">
                <h1 className="text-lg md:text-xl font-semibold md:font-bold tracking-wide text-center md:text-left italic py-4">
                  Stack
                </h1>
                <ul className="flex flex-wrap  ">
                  {famChat[0].stack.map((item, i) => (
                    <div
                      key={i}
                      className="text-white bg-black px-2 py-1  mr-1 mb-1 text "
                    >
                      {item}
                    </div>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3">
                <h1 className="text-lg md:text-xl font-semibold md:font-bold tracking-wide text-center md:text-left italic py-4">
                  Status
                </h1>
                <div className="flex mx-auto items-center justify-center mb-3 md:mb-0 w-full md:w-1/2 ">
                  <Link
                    href={famChat[0].gitUrl}
                    className="mr-12 text-sm md:text-base relative -top-1 -left-1 bg-orange-700 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-2 before:left-2 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 duration-300"
                  >
                    Github
                  </Link>
                  <Link
                    target={`_blank`}
                    href={`#`}
                    className="relative text-sm md:text-base -top-1 -left-1 bg-orange-700 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-2 before:left-2 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 duration-300"
                  >
                    Live
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-1 md:mb-4 pt-8 pb-4">
              <div className="relative  text-xl md:text-2xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                Problems & Learnings
                <div className="h-[13.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
              </div>
            </div>
            <div className="leading-relaxed tracking-wide mb-2 md:mb-4">
              {/* Problems and Learnings */}
              {famChat[0].learnings}
            </div>
            {/* image */}
            <div className="max-w-[100%] md:max-w-[80%] border border-none rounded mx-auto mb-2 md:mb-6">
              <Image src={images.oneOnOne} className="w-full" alt="filmpire" />
              <p className="text-sm mt-1">{famChat[0].imageDesc}</p>
            </div>
          </div>
        </motion.article>
      )}
    </section>
  )
}

export default ProjectDetails
