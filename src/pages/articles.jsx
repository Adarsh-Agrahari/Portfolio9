import React from "react";
import Head from "next/head";
import styles from "@/styles/Articles.module.css";
import Link from "next/link";

export default function Articles({ articles = [] }) {
	return (
		<div className={styles.articleContainer}>
			<Head>
				<title>Manoj Bhoyar</title>
				<meta name="author" content="Your Name" />
			</Head>
			<div className={styles.articleContent}>
				<h1>Articles</h1>
				<div className={styles.articlelist}>
					{articles.length > 0 ? (
						articles.map((item, index) => (
							<div className={styles.card} key={index}>
								<div className={styles.imageWrapper}>
									<img
										className={styles.cardImage}
										src={item.image}
										alt={`Article: ${item.title}`}
									/>
								</div>
								<div className={styles.cardText}>
									<p className={styles.title}>{item.title}</p>
									<div className={styles.linkBox}>
										<span>Read Article:</span>
										<Link
											href={item.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											{item.link}
										</Link>
									</div>
									<p className={styles.year}>
										Year of publication: {item.year}
									</p>
								</div>
							</div>
						))
					) : (
						<p>No articles available at the moment.</p>
					)}
				</div>
			</div>
		</div>
	);
}
export async function getServerSideProps() {
	try {
		const articles = [
			{
				title: "Optimizing Database Replication Strategies through Machine Learning for Enhanced Fault Tolerance in Cloud-Based Environments",
				link: "https://revistadecineforum.com/index.php/cf/article/view/178",
				year: 2023,
				image: "img/papers/paper1.jpg",
			},
			{
				title: "Autonomous Test Oracles: Integrating AI for Intelligent Decision-Making in Automated Software Testing",
				link: "https://welltestingjournal.com/index.php/WT/article/view/108",
				year: 2024,
				image: "img/papers/paper2.jpg",
			},
			{
				title: "Decentralized machine learning model orchestration in distributed cloud environments: A meta-learning framework integrating Artificial Intelligence for predictive resource allocation ",
				link: "https://wjarr.com/sites/default/files/WJARR-2019-0029.pdf",
				year: 2019,
				image: "img/papers/paper3.jpg",
			},
			{
				title: "AI-Powered Edge Computing in Cloud Ecosystems: Enhancing Latency Reduction and Real-Time Decision-Making in Distributed Networks",
				link: "https://welltestingjournal.com/index.php/WT/article/view/109",
				year: 2024,
				image: "img/papers/paper4.jpg",
			},
			{
				title: "The Integration of Data Engineering and Cloud Computing in the Age of Machine Learning and Artificial Intelligence",
				link: "https://www.irejournals.com/formatedpaper/1700696.pdf",
				year: 2018,
				image: "img/papers/paper5.jpg",
			},
			{
				title: "Integrating AI for Intelligent Automation: A Paradigm Shift in Software Engineering Practices for Optimizing Development Lifecycles",
				link: "https://www.ijaresm.com/uploaded_files/document_file/Manoj_BhoyarYNj4.pdf",
				year: 2021,
				image: "img/papers/paper6.jpg",
			},
			{
				title: "A Hybrid Approach to Big Data Analytics: Integrating Cloud Computing with Distributed Machine Learning Algorithms",
				link: "https://erpublications.com/uploaded_files/download/manoj-bhoyar_WdjAS.pdf",
				year: 2020,
				image: "img/papers/paper7.jpg",
			},
			{
				title: "AI-Driven Predictive Maintenance in IoT-Enabled Industrial Systems",
				link: "https://www.irejournals.com/formatedpaper/1701235.pdf",
				year: 2019,
				image: "img/papers/paper8.jpg",
			},
			{
				title: "Next-Generation Cloud Computing: Advancements in Distributed Architectures, AI-Orchestrated Workloads, and Autonomous Multi-Cloud Management for Enhanced Operational Efficiency",
				link: "https://ijcrt.org/papers/IJCRT2211621.pdf",
				year: 2022,
				image: "img/papers/paper9.jpg",
			},
			{
				title: "Federated Learning for Privacy-Preserving AML in Multi-Bank Collaborations",
				link: "https://tijer.org/tijer/papers/TIJER2311128.pdf",
				year: 2023,
				image: "img/papers/paper10.jpg",
			},
			{
				title: "Advancing Natural Language Processing with Generative AI: A Framework for Contextual Understanding and Automated Content Creation",
				link: "https://www.irjet.net/archives/V8/i10/IRJET-V8I10312.pdf",
				year: 2021,
				image: "img/papers/paper11.jpg",
			},
			{
				title: "Enhancing Conversational Agents with Generative AI: A Framework for Creating More Adaptive and Context-aware chatbots",
				link: "https://www.irjet.net/archives/V10/i10/IRJET-V10I10132.pdf",
				year: 2023,
				image: "img/papers/paper12.jpg",
			},
			{
				title: "AUTOMATED ANOMALY DETECTION IN BIG DATA USING DEEP LEARNING AND ADVANCED DATA MINING TECHNIQUES",
				link: "https://tijer.org/tijer/papers/TIJER2411079.pdf",
				year: 2024,
				image: "img/papers/paper13.jpg",
			},
			{
				title: "Hybrid Cloud-Edge Architectures for Low-Latency IoT Machine Learning",
				link: "https://www.ijirset.com/upload/2023/march/4_Hybrid.pdf",
				year: 2023,
				image: "img/papers/paper14.jpg",
			},
		];
		return {
			props: { articles },
		};
	} catch (error) {
		console.error("Error fetching articles:", error);
		return {
			props: { articles: [] },
		};
	}
}
