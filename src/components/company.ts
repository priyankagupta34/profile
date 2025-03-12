export type Company = {
	company: string;
	logoUrl: string;
	joined: string;
	slogan: string;
	points: Point[];
};

export type Point = {
	title: string;
	description: string;
	keyContributions?: string[];
	endingStatement?: string;
};
const companies: Company[] = [
	{
		company: "Salesforce",
		logoUrl: "/companies/salesforce.png",
		joined: "Febraury-2025 - Current",
		slogan: "The End of Software.",
		points: [],
	},
	{
		company: "BitGo",
		logoUrl: "/companies/bitgo.png",
		slogan: "One stake, endless possibilities.",
		joined: "September-2025 - February-2024",
		points: [
			{
				title:
					"Staff Software Engineer - BitGo (VASP: Virtual Asset Service Provider)",
				description:
					"Senior Full Stack Engineer with extensive experience in building and optimizing customer-facing and admin applications. At BitGo, I contributed to the staking report generation feature and enhanced the admin platform for seamless quarterly statement generation.",
				keyContributions: [
					"Developed and maintained features using React, Node.js, Snowflake, and Kubernetes.",
					"Owned the complete frontend development for the Travel Rule feature, ensuring a seamless user experience for secure transfers and address whitelisting.",
					"Worked on cryptocurrency transfer systems, gaining deep expertise in blockchain transactions.",
					"Led the development of an admin tool, providing administrators with a robust interface to resolve customer issues, manage permissions, and enhance customer support.",
					"Developed a strong understanding of VASP technology in blockchain transfers.",
				],
				endingStatement:
					"Passionate about designing scalable systems, improving application performance, and driving innovation in full-stack development.",
			},
		],
	},
	{
		company: "Intuit",
		logoUrl: "/companies/intuit.png",
		slogan: "Powering prosperity around the world.",
		joined: "September-2025 - February-2024",
		points: [
			{
				title:
					"Senior Software Engineer – Intuit (PPM: Pricing and Product Manager)",
				description:
					"Worked on PPM (Pricing and Product Manager), a critical internal tool that helps organize Intuit’s products—such as TurboTax and QuickBooks—into market-sellable entities with pricing and promotions.",
				keyContributions: [
					"Frontend Development: Led development efforts using React.js, ensuring a seamless user experience.",
					"Backend Development: Contributed to the backend using Java, integrating with GraphQL for efficient data retrieval.",
					"Team Leadership: Managed and guided a team, ensuring high-quality deliverables and smooth collaboration.",
					"Cloud & Infrastructure: Worked with Kubernetes, AWS, Cassandra, and PostgreSQL, optimizing application deployment and database performance.",
				],
				endingStatement:
					"Passionate about building scalable, high-performance applications while mentoring teams and driving innovation in full-stack development.",
			},
		],
	},

	{
		company: "PayPal",
		logoUrl: "/companies/paypal.png",
		slogan: "Invented for life.",
		joined: "July-2021 - September-2022",
		points: [
			{
				title: "Staff Software Engineer – PayPal (Chatbot Services)",
				description:
					"Developed and optimized chatbot services to enhance user experience by enabling automated issue resolution without needing customer support. This system allows users to handle cases such as 'Item Not Received' or 'Item Received Partial', providing seamless refund requests and other services through a chatbot-driven workflow.",
				keyContributions: [
					"Chatbot Development: Worked with Google Dialogflow and IBM Watson to build intelligent, automated customer support solutions.",
					"Backend Development: Developed a Java Spring Boot service to enable users to request support directly from the chatbot.",
					"Automation & Service Orchestration: Contributed to Node.js projects for various automation tasks, ensuring efficient backend workflows.",
					"Seamless User Experience: Designed and integrated the chatbot with PayPal’s money transfer gateway, streamlining customer issue resolution.",
				],
				endingStatement:
					"Passionate about AI-driven automation, full-stack development, and enhancing customer interactions through intelligent chatbots.",
			},
		],
	},
	{
		company: "Bosch",
		logoUrl: "/companies/bosch.png",
		slogan: "Invented for life.",
		joined: "Novemeber-2018 - July-2021",
		points: [
			{
				title:
					"Senior Full Stack Engineer – Bosch (Component Tracking & Search Tool)",
				description:
					"Developed an application from scratch to help users track and analyze components across various brands and models, enabling them to create or fix similar components with Bosch. The tool provides end-to-end component tracking, streamlining the identification and management process.",
				keyContributions: [
					"Search & Tracking Tool: Designed and implemented a powerful search tool to track components efficiently.",
					"Full Stack Development: Built the backend using Python and Node.js, and the frontend with React.js and Angular.",
					"User-Centric Approach: Developed features based on deep user demand analysis, ensuring a seamless and intuitive experience.",
				],
			},
			{
				title: "Front-End Engineer – UX & Data Visualization Projects",
				description:
					"Led the front-end development of multiple projects, focusing on wireframing, UX design implementation, and data visualization.",
				keyContributions: [
					"Client-Centric UI Development: Designed intuitive interfaces based on wireframes and UX designs, aligning features with client requirements.",
					"Advanced Data Visualization: Used SVG graphs to create interactive and insightful visual representations of data.",
					"Technology Stack: Extensively worked with React.js, Python, and Node.js to build responsive and dynamic applications.",
				],
				endingStatement:
					"Passionate about building intuitive UIs, optimizing full-stack performance, and creating seamless user experiences.",
			},
		],
	},
	{
		company: "Infosys",
		logoUrl: "/companies/infosys.png",
		slogan: "Invented for life.",
		joined: "May-2015 - Novemeber-2018",
		points: [
			{
				title:
					"Front-End Engineer – Infosys (Ticket Analysis & Automation System)",
				description:
					"Contributed primarily to the frontend development, enhancing the user interface with new features and data visualizations. Worked on an application that extracts and analyzes tickets, automating workflows such as sending no-reply emails to relevant users based on extracted insights.",
				keyContributions: [
					"Feature Development: Added interactive UI components and enhanced user experience.",
					"Data Visualization: Utilized SVG graphs to analyze and present extracted ticket data effectively.",
					"Automation & Workflow Optimization: Helped streamline processes by automating task execution, including email notifications.",
					"Technology Stack: Focused on frontend development while integrating automation features into the system.",
				],
				endingStatement:
					"Passionate about building intuitive interfaces, leveraging data visualization, and improving workflow efficiency through automation.",
			},
		],
	},
];

export default companies;
