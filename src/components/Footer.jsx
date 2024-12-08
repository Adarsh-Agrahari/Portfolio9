import React from "react";
import styles from "@/styles/Footer.module.css";
import { FaLinkedin } from "react-icons/fa";
import { SiAcademia } from "react-icons/si";
import { FaGoogleScholar } from "react-icons/fa6";
import Link from "next/link";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.logoSection}>
					<h1 className={styles.logo}>Manoj Bhoyar</h1>
					<p className={styles.tagline}>
					Vice President | Technical Manager | Expert in Distributed Systems, Java, Scala & Apache Spark | Innovating Financial Systems with Strategic Leadership
					</p>
				</div>
				<div className={styles.socialSection}>
					<h3 className={styles.heading}>Follow Me</h3>
					<div className={styles.socialIcons}>
						<Link href="https://www.linkedin.com/in/manoj-bhoyar-7a4b8a4/">
							<FaLinkedin /> LinkedIn
						</Link>
						<Link href=" https://independent.academia.edu/ManojBhoyar">
							<SiAcademia /> Academia
						</Link>
						<Link href="https://scholar.google.com/citations?user=b_oxJaAAAAAJ&hl=en&authuser=6">
							<FaGoogleScholar /> Google Scholar
						</Link>
					</div>
				</div>
			</div>
			<div className={styles.footerBottom}>
				<p>
					&copy; {new Date().getFullYear()} Manoj Bhoyar. All Rights
					Reserved.
				</p>
			</div>
		</footer>
	);
};
