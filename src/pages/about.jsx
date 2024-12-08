import React from "react";
import Head from "next/head";
import styles from "@/styles/About.module.css";
import { QuickLinks } from "@/components/QuickLinks";

export default function About({ aboutData = [] }) {
	return (
		<div className={styles.aboutContainer}>
			<Head>
				<title>Manoj Bhoyar</title>
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
			"Welcome! I’m Manoj Bhoyar, a seasoned Vice President and Technical Manager with over 24 years of expertise in building complex distributed software systems. My journey in technology has been driven by a passion for innovation, process improvement, and delivering impactful solutions in dynamic environments.","With a strong foundation in software architecture and development, I specialize in Java, Scala, Apache Spark, and cutting-edge technologies that power financial systems. My experience spans across the entire software development lifecycle, from requirement gathering and design to implementation and support. I have successfully led cross-functional global teams, architecting solutions that streamline operations and enhance performance in real-time environments.","In my current role, I drive strategic initiatives such as consolidating reference data platforms and optimizing workflows for client onboarding. I’m deeply experienced in FIX protocols, portfolio trading systems, and regulatory compliance, ensuring seamless integration and operational excellence.","I thrive in roles that demand technical leadership, problem-solving, and collaboration. As a hands-on technical expert, I’ve developed custom frameworks, conducted client/broker certifications, and leveraged next-gen technologies like Spark and Akka to deliver robust, scalable systems.","When not innovating in the tech space, I enjoy mentoring teams, refining processes, and exploring new advancements in data-driven solutions.",
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
