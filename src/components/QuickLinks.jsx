import React from "react";
import styles from "../styles/QuickLinks.module.css";
import { FaLinkedin } from "react-icons/fa";
import { SiAcademia } from "react-icons/si";
import { FaGoogleScholar } from "react-icons/fa6";
import Link from "next/link";

export const QuickLinks = () => {
	return (
		<div className={styles.quickLinks}>
			<h1>Quick Links</h1>
			<div>
				<li>
					<Link href="https://www.linkedin.com/in/manoj-bhoyar-7a4b8a4/">
						<FaLinkedin /> LinkedIn
					</Link>
				</li>
				<li>
					<Link href=" https://independent.academia.edu/ManojBhoyar">
						<SiAcademia /> Academia
					</Link>
				</li>
				<li>
					<Link href="https://scholar.google.com/citations?user=b_oxJaAAAAAJ&hl=en&authuser=6">
						<FaGoogleScholar /> Google Scholar
					</Link>
				</li>
			</div>
		</div>
	);
};
