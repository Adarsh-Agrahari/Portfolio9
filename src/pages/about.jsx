import React from "react";
import Head from "next/head";
import styles from "@/styles/About.module.css";
import { QuickLinks } from "@/components/QuickLinks";

export default function About({ aboutData = [] }) {
	return (
		<div className={styles.aboutContainer}>
			<Head>
				<title>Swetha Chinta</title>
				<meta
					name="description"
					content="Learn more about my 17+ years of expertise in Oracle ERP technologies, technical leadership, system integration, and project management."
				/>
				<meta
					name="keywords"
					content="Oracle ERP, Oracle e-Business Suite R12, Cloud Integration, System Integration, Project Management, VBCS, REST Web Services"
				/>
				<meta name="author" content="Your Name" />
			</Head>
			<div className={styles.aboutContent}>
				<h1>About Me</h1>
				<div className={styles.aboutBody}>
					{aboutData.length > 0 ? (
						aboutData.map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))
					) : (
						<p>No information available at the moment.</p>
					)}
				</div>
			</div>
			<div className={styles.sidebar}>
				<QuickLinks />
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	try {
		const aboutData = [
			"With over 17 years of expertise in Oracle e-Business Suite R12 and Oracle ERP Cloud, I am a seasoned professional specializing in technical leadership, system integration, and project management. My experience spans diverse roles such as Technical Lead, Fusion/Cloud Integration Consultant, and Solution Architect. I have a proven track record of delivering high-quality results in implementation, support processes, and product upgrades, employing both Agile and Waterfall methodologies.",
			"My skill set includes Oracle Cloud technologies like ICS, PCS, VBCS, REST/SOAP Web Services, BI, and OTBI, as well as hands-on experience with data migrations, system integration, and project delivery in global onshore-offshore models. I am passionate about leveraging my problem-solving and risk analysis skills to navigate complex challenges and deliver innovative, efficient solutions for clients.",
			"As a certified Oracle Cloud Implementation Specialist, I bring a strong foundation in functional areas such as Finance, Procurement, and Inventory, complemented by extensive experience in developing web and mobile applications using VBCS and integrating third-party systems. My commitment to excellence ensures seamless project execution and client satisfaction. Outside of work, I continuously expand my knowledge through certifications and skill enhancements, staying ahead in the dynamic field of Oracle ERP technologies. Whether driving cross-functional collaboration or mentoring teams, I am dedicated to fostering innovation and achieving impactful outcomes.",
		];

		return {
			props: { aboutData },
		};
	} catch (error) {
		console.error("Error fetching about data:", error);
		return {
			props: { aboutData: [] },
		};
	}
}
