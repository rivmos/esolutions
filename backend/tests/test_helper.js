const CaseStudy = require('../models/casestudy')

const initialCaseStudies = [
    {
        title: 'Case Study One',
        description: 'Case Study One Description',
        content: '<p>This is <b>case study one</b></p>',
        image: null
    },
    {
        title: 'Case Study Two',
        description: 'Case Study Two Description',
        content: '<p>This is <b>case study two</b></p>',
        image: null
    },
    {
        title: 'Smart City Mobility Solutions',
        description: 'Integrating IoT and AI to optimize urban transportation.',
        content: '<p>Our smart city mobility solutions leverage IoT and AI technologies to enhance urban transportation systems. By implementing real-time data analysis and predictive modeling, we improve traffic flow, reduce congestion, and promote sustainable commuting options.</p>',
        image: 'smart-city-mobility.jpg'
    },
    {
        title: 'Blockchain in Supply Chain Management',
        description: 'Enhancing transparency and traceability in global supply chains.',
        content: '<p>Blockchain technology is revolutionizing supply chain management by enhancing transparency and traceability across global networks. Our implementation ensures secure transactions, reduces fraud, and improves efficiency from manufacturing to delivery.</p>',
        image: 'blockchain-supply-chain.jpg'
    },
    {
        title: 'E-commerce Personalization Algorithms',
        description: 'Delivering personalized shopping experiences through advanced algorithms.',
        content: '<p>Our e-commerce personalization algorithms utilize machine learning and data analytics to deliver tailored shopping experiences. By analyzing customer behavior and preferences, we enhance engagement, increase conversions, and foster brand loyalty.</p>',
        image: 'ecommerce-personalization.jpg'
    },
    {
        title: 'Augmented Reality in Education',
        description: 'Transforming learning experiences through immersive AR applications.',
        content: '<p>Augmented reality is transforming education by creating immersive learning experiences. Our AR applications enhance engagement, facilitate interactive lessons, and improve knowledge retention across various subjects and age groups.</p>',
        image: 'augmented-reality-education.jpg'
    },
    {
        title: 'Remote Work Collaboration Tools',
        description: 'Enabling seamless collaboration and productivity in remote work environments.',
        content: '<p>Our remote work collaboration tools facilitate seamless communication, project management, and productivity in virtual teams. From video conferencing platforms to task management apps, we empower organizations to thrive in remote work settings.</p>',
        image: 'remote-work-collaboration.jpg'
    },
    {
        title: 'Clean Energy Innovations',
        description: 'Developing scalable solutions for renewable energy generation and storage.',
        content: '<p>Our clean energy innovations focus on developing scalable solutions for renewable energy generation and storage. From solar panel efficiency improvements to grid-scale battery technologies, we are advancing sustainable energy solutions for a greener future.</p>',
        image: 'clean-energy-innovations.jpg'
    },
    {
        title: 'Healthcare AI Diagnostics',
        description: 'Utilizing AI to enhance medical diagnostics and patient care.',
        content: '<p>AI-powered diagnostics are revolutionizing healthcare by improving accuracy and efficiency in medical testing and diagnosis. Our solutions analyze medical images, patient data, and genetic information to assist healthcare providers in delivering personalized care and treatment.</p>',
        image: 'healthcare-ai-diagnostics.jpg'
    },
    {
        title: 'Digital Marketing Automation',
        description: 'Optimizing marketing campaigns through automated strategies and data-driven insights.',
        content: '<p>Our digital marketing automation strategies streamline campaign management, optimize customer targeting, and maximize ROI. By leveraging AI-driven analytics and automation tools, we deliver personalized marketing experiences across multiple channels.</p>',
        image: 'digital-marketing-automation.jpg'
    },
    {
        title: 'Cybersecurity Threat Intelligence',
        description: 'Protecting organizations from evolving cyber threats with proactive intelligence.',
        content: '<p>Our cybersecurity threat intelligence services provide proactive monitoring, analysis, and response to protect organizations from evolving cyber threats. By leveraging advanced threat detection techniques and threat intelligence feeds, we mitigate risks and safeguard sensitive data.</p>',
        image: 'cybersecurity-threat-intelligence.jpg'
    },
    {
        title: 'Urban Renewal and Sustainability',
        description: 'Revitalizing urban areas through sustainable development and community engagement.',
        content: '<p>Our urban renewal projects focus on sustainable development practices and community engagement to revitalize urban areas. By integrating green infrastructure, affordable housing solutions, and cultural preservation efforts, we create vibrant and resilient cities.</p>',
        image: 'urban-renewal-sustainability.jpg'
    },
    {
        title: 'AI-driven Customer Service Solutions',
        description: 'Enhancing customer experiences through AI-powered support and engagement tools.',
        content: '<p>AI-driven customer service solutions improve customer experiences by providing personalized support and engagement across multiple channels. Our AI chatbots, virtual assistants, and sentiment analysis tools optimize service delivery and customer satisfaction.</p>',
        image: 'ai-customer-service.jpg'
    },
    {
        title: 'Space Exploration Technologies',
        description: 'Pushing the boundaries of space exploration with innovative technologies and missions.',
        content: '<p>Our space exploration initiatives focus on advancing technology and conducting missions to explore the cosmos. From satellite launches and lunar exploration to deep space missions, we pioneer new discoveries and inspire future generations.</p>',
        image: 'space-exploration.jpg'
    },
    {
        title: 'AI in Agriculture',
        description: 'Improving agricultural productivity and sustainability through AI-driven solutions.',
        content: '<p>AI technologies are transforming agriculture by enhancing crop management, optimizing resource use, and improving yield predictions. Our AI-powered farming solutions promote sustainable practices and ensure food security for growing populations.</p>',
        image: 'ai-agriculture.jpg'
    },
    {
        title: 'Virtual Reality for Training',
        description: 'Enhancing workforce training and skill development through immersive VR simulations.',
        content: '<p>Virtual reality training simulations revolutionize workforce development by creating realistic and interactive learning experiences. Our VR training solutions improve retention, enhance skill acquisition, and reduce training costs across industries.</p>',
        image: 'virtual-reality-training.jpg'
    },
    {
        title: 'Bioinformatics and Genomics',
        description: 'Advancing research in bioinformatics and genomics to unlock new insights in healthcare.',
        content: '<p>Our bioinformatics and genomics research initiatives leverage data analytics and computational biology to accelerate scientific discoveries. By analyzing genetic data and biological systems, we drive innovation in personalized medicine and disease prevention.</p>',
        image: 'bioinformatics-genomics.jpg'
    },
    {
        title: 'Social Media Analytics',
        description: 'Harnessing big data analytics to derive actionable insights from social media platforms.',
        content: '<p>Our social media analytics solutions analyze big data to derive actionable insights and optimize marketing strategies. By monitoring trends, sentiment analysis, and audience behavior, we empower businesses to make informed decisions and drive engagement.</p>',
        image: 'social-media-analytics.jpg'
    },
    {
        title: 'Renewable Energy Microgrids',
        description: 'Building resilient energy infrastructure with renewable energy microgrid solutions.',
        content: '<p>Renewable energy microgrids provide decentralized and resilient energy solutions for communities, businesses, and remote locations. Our microgrid systems integrate renewable sources like solar and wind to reduce dependence on fossil fuels and enhance energy security.</p>',
        image: 'renewable-energy-microgrids.jpg'
    },
    {
        title: 'AI-driven Predictive Maintenance',
        description: 'Optimizing asset performance and reliability through AI-driven predictive maintenance.',
        content: '<p>AI-driven predictive maintenance enhances asset performance by forecasting equipment failures and optimizing maintenance schedules. Our solutions leverage machine learning algorithms and IoT sensors to reduce downtime, lower maintenance costs, and prolong asset lifespan.</p>',
        image: 'ai-predictive-maintenance.jpg'
    },
    {
        title: '3D Printing in Manufacturing',
        description: 'Revolutionizing manufacturing processes with additive manufacturing technologies.',
        content: '<p>3D printing technologies revolutionize manufacturing by enabling rapid prototyping, customization, and cost-effective production. Our additive manufacturing solutions enhance design flexibility, reduce material waste, and accelerate time-to-market for innovative products.</p>',
        image: '3d-printing-manufacturing.jpg'
    },
    {
        title: 'Digital Twin Technology',
        description: 'Creating virtual replicas to optimize operations and simulate real-world scenarios.',
        content: '<p>Digital twin technology creates virtual replicas of physical assets, processes, and systems to optimize operations and simulate real-world scenarios. Our digital twin solutions improve decision-making, enhance performance monitoring, and drive innovation across industries.</p>',
        image: 'digital-twin-technology.jpg'
    },
    {
        title: 'AI-driven Financial Services',
        description: 'Transforming financial services with AI-powered solutions for banking and investment.',
        content: '<p>AI-driven financial services leverage machine learning and predictive analytics to enhance banking operations, improve customer service, and optimize investment strategies. Our solutions empower financial institutions to deliver personalized experiences and drive business growth.</p>',
        image: 'ai-financial-services.jpg'
    },
    {
        title: 'Robotics in Healthcare',
        description: 'Advancing patient care and medical procedures through robotic-assisted technologies.',
        content: '<p>Robotics in healthcare revolutionizes patient care and medical procedures by improving surgical precision, rehabilitation therapies, and patient monitoring. Our robotic-assisted solutions enhance healthcare outcomes, reduce recovery times, and increase patient safety.</p>',
        image: 'robotics-healthcare.jpg'
    },
    {
        title: 'Smart Home Automation',
        description: 'Enhancing convenience, security, and energy efficiency with smart home technologies.',
        content: '<p>Smart home automation technologies integrate IoT devices to enhance convenience, security, and energy efficiency. From automated lighting and climate control to smart security systems, our solutions empower homeowners to create connected and sustainable living spaces.</p>',
        image: 'smart-home-automation.jpg'
    },
    {
        title: 'AI-powered Retail Analytics',
        description: 'Optimizing retail operations and customer experiences with AI-driven analytics.',
        content: '<p>AI-powered retail analytics transform retail operations by analyzing customer behavior, predicting trends, and optimizing inventory management. Our solutions improve merchandising strategies, personalize shopping experiences, and drive sales growth for retailers.</p>',
        image: 'ai-retail-analytics.jpg'
    },
    {
        title: 'Urban Air Quality Monitoring',
        description: 'Monitoring and improving urban air quality with IoT sensors and data analytics.',
        content: '<p>Urban air quality monitoring systems utilize IoT sensors and data analytics to monitor pollution levels and improve environmental health. Our solutions provide real-time insights, support regulatory compliance, and promote sustainable urban development.</p>',
        image: 'urban-air-quality-monitoring.jpg'
    },
    {
        title: 'Blockchain for Digital Identity',
        description: 'Securing digital identities and enhancing trust with blockchain technology.',
        content: '<p>Blockchain technology enhances digital identity security by providing decentralized, tamper-proof verification systems. Our solutions enable secure access to services, protect personal data, and streamline identity verification processes across industries.</p>',
        image: 'blockchain-digital-identity.jpg'
    },
    {
        title: 'AI-driven Logistics Optimization',
        description: 'Streamlining logistics operations with AI-powered route optimization and predictive analytics.',
        content: '<p>AI-driven logistics optimization improves efficiency, reduces costs, and enhances delivery reliability in supply chain operations. Our solutions optimize route planning, inventory management, and warehouse operations to meet growing customer demands and market dynamics.</p>',
        image: 'ai-logistics-optimization.jpg'
    },
    {
        title: '5G Network Infrastructure',
        description: 'Building robust 5G network infrastructure to support high-speed connectivity and IoT applications.',
        content: '<p>5G network infrastructure supports high-speed connectivity and enables transformative IoT applications in industries like healthcare, manufacturing, and smart cities. Our solutions enhance network reliability, reduce latency, and pave the way for next-generation digital innovations.</p>',
        image: '5g-network-infrastructure.jpg'
    },
    {
        title: 'AI in Legal Tech',
        description: 'Enhancing legal services with AI-powered tools for contract analysis and case management.',
        content: '<p>AI in legal tech transforms legal services by automating routine tasks, analyzing contracts, and managing case data. Our solutions improve efficiency, reduce legal costs, and enable legal professionals to focus on strategic decision-making and client advocacy.</p>',
        image: 'ai-legal-tech.jpg'
    },
    {
        title: 'Precision Agriculture Technologies',
        description: 'Optimizing agricultural practices with IoT sensors, AI, and data-driven insights.',
        content: '<p>Precision agriculture technologies improve crop yields, optimize resource use, and reduce environmental impact through data-driven insights and automation. Our solutions monitor soil health, manage irrigation, and enhance pest control strategies to ensure sustainable farming practices.</p>',
        image: 'precision-agriculture.jpg'
    },
    {
        title: 'Remote Patient Monitoring',
        description: 'Enabling proactive healthcare management with remote monitoring devices and AI analytics.',
        content: '<p>Remote patient monitoring enhances healthcare management by providing real-time health data and predictive analytics. Our solutions improve patient outcomes, reduce hospital readmissions, and empower individuals to manage chronic conditions from home.</p>',
        image: 'remote-patient-monitoring.jpg'
    },
    {
        title: 'AI-driven Personalized Medicine',
        description: 'Tailoring medical treatments and therapies to individual genetic profiles and health data.',
        content: '<p>AI-driven personalized medicine revolutionizes healthcare by leveraging genetic data, patient history, and AI algorithms to tailor treatments and therapies. Our solutions improve treatment efficacy, reduce adverse reactions, and advance precision medicine practices.</p>',
        image: 'ai-personalized-medicine.jpg'
    },
    {
        title: 'Industrial IoT Solutions',
        description: 'Connecting industrial equipment and processes to optimize operations and maintenance.',
        content: '<p>Industrial IoT solutions integrate sensors, connectivity, and analytics to optimize equipment performance, predict maintenance needs, and enhance operational efficiency. Our solutions enable predictive maintenance, reduce downtime, and drive productivity in manufacturing and industrial sectors.</p>',
        image: 'industrial-iot.jpg'
    },
    {
        title: 'Blockchain for Healthcare Data Security',
        description: 'Securing healthcare data with blockchain technology to protect patient privacy and integrity.',
        content: '<p>Blockchain technology enhances healthcare data security by providing decentralized, immutable records that protect patient privacy and ensure data integrity. Our solutions enable secure data sharing, streamline regulatory compliance, and safeguard sensitive medical information.</p>',
        image: 'blockchain-healthcare.jpg'
    },
    {
        title: 'AI-powered Customer Insights',
        description: 'Gaining actionable customer insights through AI-driven analytics and predictive modeling.',
        content: '<p>AI-powered customer insights enable businesses to understand customer behavior, preferences, and trends through advanced analytics and predictive modeling. Our solutions enhance marketing strategies, optimize product offerings, and foster long-term customer relationships.</p>',
        image: 'ai-customer-insights.jpg'
    }
]

const emptyCaseStudies = async () => {
    await CaseStudy.deleteMany({})
}

const caseStudiesInDb = async () => {
    const caseStudies = await CaseStudy.find({})
    return caseStudies.map(caseStudy => caseStudy.toJSON())
}

const nonExistingId = async () => {
    const caseStudy = new CaseStudy({ title: 'willremovethissoon' })
    await caseStudy.save()
    await caseStudy.deleteOne()

    return caseStudy._id.toString()
}


module.exports = {
    initialCaseStudies,
    caseStudiesInDb,
    emptyCaseStudies,
    nonExistingId
}