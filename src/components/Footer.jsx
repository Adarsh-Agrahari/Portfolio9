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
					<h1 className={styles.logo}>Swetha Chinta</h1>
					<p className={styles.tagline}>
						Oracle ERP Expert | 17+ Years in EBS R12 & Cloud
						Integration
					</p>
				</div>
				<div className={styles.socialSection}>
					<h3 className={styles.heading}>Follow Me</h3>
					<div className={styles.socialIcons}>
						<Link href="www.linkedin.com/in/swetha-chinta-945964140">
							<FaLinkedin /> LinkedIn
						</Link>
						<Link href=" https://independent.academia.edu/SwethaChinta1">
							<SiAcademia /> Academia
						</Link>
						<Link href="https://scholar.google.com/citations?user=r3tuO9UAAAAJ&hl=en&authuser=6">
							<FaGoogleScholar /> Google Scholar
						</Link>
					</div>
				</div>
			</div>
			<div className={styles.footerBottom}>
				<p>
					&copy; {new Date().getFullYear()} Swetha Chinta. All Rights
					Reserved.
				</p>
			</div>
		</footer>
	);
};
