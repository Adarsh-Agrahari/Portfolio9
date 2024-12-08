import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { QuickLinks } from "@/components/QuickLinks";
import Link from "next/link";

export default function Home({ user }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>{user.name}</title>
				<meta
					name="description"
					content={`Welcome to ${user.name} portfolio`}
				/>
			</Head>
			<div className={styles.home}>
				<section className={styles.hero}>
					<div className={styles.heroText}>
						<h1>Hi, I&apos;m {user.name}</h1>
						<p>{user.title}</p>
					</div>
					<div className={styles.heroImage}>
						<img src={user.profileImage} alt="Profile" />
					</div>
				</section>
				<div className={styles.mainContent}>
					<div className={styles.contentPanel}>
						<section id="about" className={styles.about}>
							<div className={styles.aboutText}>
								<h2>About Me</h2>
								<p>{user.about}</p>
							</div>
						</section>
						<div className={styles.heroButtons}>
							<Link href="/about" className={styles.heroButton}>
								Read More ...
							</Link>
						</div>
					</div>
					<div className={styles.quickLinksPanel}>
						<QuickLinks />
					</div>
				</div>
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	const user = {
		name: "Manoj Bhoyar",
		title: "Vice President | Technical Manager | Expert in Distributed Systems, Java, Scala & Apache Spark | Innovating Financial Systems with Strategic Leadership",
		profileImage: "/img/pic.jpg",
		about: `
			I’m Manoj Bhoyar, a technology leader with over 24 years of experience in designing and
			implementing complex software systems. Specializing in Java, Scala, Apache Spark, and
			financial technology, I excel in leading global teams, optimizing workflows, and driving process
			improvements. My expertise includes FIX protocols, portfolio trading systems, and regulatory
			compliance, with a proven track record in delivering innovative, scalable solutions. Passionate
			about mentoring teams and leveraging emerging technologies, I bring strategic vision and
			technical depth to every challenge I undertake.
		`,
	};

	return {
		props: { user },
	};
}
