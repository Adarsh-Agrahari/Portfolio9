import React from "react";
import Head from "next/head";
import styles from "@/styles/Articles.module.css";
import Link from "next/link";

export default function Articles({ articles = [] }) {
	return (
		<div className={styles.articleContainer}>
			<Head>
				<title>Swetha Chinta</title>
				<meta
					name="description"
					content="Explore articles on topics like AI, cloud computing, ERP integration, and more. Authored by a seasoned professional with expertise in Oracle ERP and emerging technologies."
				/>
				<meta
					name="keywords"
					content="AI, Oracle ERP, Cloud Computing, Machine Learning, Big Data, Articles, Research"
				/>
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
				title: "AI-Powered Edge Computing in Cloud Ecosystems: Enhancing Latency Reduction and Real-Time Decision-Making in Distributed Networks",
				link: "https://welltestingjournal.com/index.php/WT/article/view/109",
				year: 2024,
				image: "img/paper9.jpg",
			},
			{
				title: "Autonomous Test Oracles: Integrating AI for Intelligent Decision-Making in Automated Software Testing",
				link: "https://welltestingjournal.com/index.php/WT/article/view/108",
				year: 2024,
				image: "img/paper8.jpg",
			},
			{
				title: "Exploring The Ethical Implications Of Ai In Data Analytics: Challenges And Strategies For Responsible Implementation",
				link: "https://ijcrt.org/papers/IJCRT2309747.pdf",
				year: 2023,
				image: "img/paper6.jpg",
			},
			{
				title: "Optimizing Database Replication Strategies through Machine Learning for Enhanced Fault Tolerance in Cloud-Based Environments",
				link: "https://revistadecineforum.com/index.php/cf/article/view/178",
				year: 2023,
				image: "img/paper7.jpg",
			},
			{
				title: "Federated Learning for Privacy-Preserving AML in Multi-Bank Collaborations",
				link: "https://tijer.org/tijer/papers/TIJER2311128.pdf",
				year: 2023,
				image: "img/paper10.jpg",
			},
			{
				title: "Evaluating The Impact Of Erp Cloud Integration On Organizational Agility And Decision-Making",
				link: "https://ijcrt.org/papers/IJCRT2106901.pdf",
				year: 2021,
				image: "img/paper2.jpg",
			},
			{
				title: "Advancements In Deep Learning Architectures: A Comparative Study Of Performance Metrics And Applications In Real-World Scenarios",
				link: "https://ijcrt.org/papers/IJCRT2110463.pdf",
				year: 2021,
				image: "img/paper3.jpg",
			},
			{
				title: "Harness Oracle Cloud Infrastructure for Scalable AI Solutions: A Study on Performance and Cost Efficiency",
				link: "https://tijer.org/tijer/papers/TIJER2111004.pdf",
				year: 2021,
				image: "img/paper4.jpg",
			},
			{
				title: "Integrating Machine Learning Algorithms in Big Data Analytics: A Framework for Enhancing Predictive Insights",
				link: "https://www.ijaresm.com/uploaded_files/document_file/Swetha_ChintaBTSS.pdf",
				year: 2021,
				image: "img/paper5.jpg",
			},
			{
				title: "The role of generative AI in oracle database automation: Revolutionizing data management and analytics",
				link: "https://wjarr.com/content/role-generative-ai-oracle-database-automation-revolutionizing-data-management-and-analytics",
				year: 2019,
				image: "img/paper1.jpg",
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
