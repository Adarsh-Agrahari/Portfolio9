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
		name: "Swetha Chinta",
		title: "Oracle ERP Expert | 17+ Years in EBS R12 & Cloud Integration",
		profileImage: "/img/pic.jpg",
		about: `
			I am an experienced Oracle ERP professional with 17+ years of expertise 
			in Oracle e-Business Suite R12 and Oracle ERP Cloud. I specialize in 
			system integration, project management, and technical leadership, 
			with strong skills in Oracle Cloud technologies like ICS, PCS, VBCS, 
			and REST/SOAP Web Services. As a certified Oracle Cloud Implementation 
			Specialist, I have a proven track record in delivering seamless 
			solutions in Finance, Procurement, and Inventory, ensuring client 
			success and satisfaction.
		`,
	};

	return {
		props: { user },
	};
}
