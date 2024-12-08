import React from "react";
import Head from "next/head";
import styles from "@/styles/News.module.css";
import Link from "next/link";

export default function News({ articles = [] }) {
	return (
		<div className={styles.newsContainer}>
			<Head>
				<title>Suprit Pattanayak - News</title>
				<meta name="author" content="Your Name" />
			</Head>
			<div className={styles.newsContent}>
				<h1 className={styles.heading}>Latest News</h1>
				<div className={styles.newsList}>
					{articles.length > 0 ? (
						articles.map((article, index) => (
							<div className={styles.newsItem} key={index}>
								<Link
									href={article.link}
									className={styles.newsLink}
									target="_blank"
								>
									<img
										src={article.image}
										alt={article.title}
										className={styles.newsImage}
									/>
								</Link>
								<h5 className={styles.newsTitle}>
									{article.title}
								</h5>
							</div>
						))
					) : (
						<p>No news available at the moment.</p>
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
				title: "Machine Learning Maestro Manoj Bhoyar Unveils New Book ‘Deep AI Integration: Theory and Practice of Machine Learning in Complex Systems’",
				link: "https://nyweekly.com/business/machine-learning-maestro-manoj-bhoyar-unveils-new-book-deep-ai-integration-theory-and-practice-of-machine-learning-in-complex-systems/",
				image: "img/news.png",
			},
		];

		return {
			props: { articles },
		};
	} catch (error) {
		console.error("Error fetching news:", error);
		return {
			props: { articles: [] },
		};
	}
}
