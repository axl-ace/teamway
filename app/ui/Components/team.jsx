import Image from "next/image";
import styles from "./team.module.sass";

import boss from "../../../public/her.jpg";


export default function Team() {
	return (
		<div>
			<div className={styles.team}>
				<h1>Meet Our team.</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
					temporibus architecto nobis ullam voluptatum nihil iusto dolorum.
					Quisquam recusandae vitae pariatur consectetur vel dolores dignissimos
					at alias est esse. Iure.
				</p>
			</div>

			<div className={styles.flex2}>
				<div className={styles.flex3}>
					<div className={styles.flex4}>
						<Image
							src={boss}
							style={{ width: "100%", height: "100%", objectFit: "cover" }}
							alt="thumbnail"
						/>
					</div>
					<div>
						<h3>Rob Zuber</h3>
						<span>IT Manager</span>
					</div>
				</div>
				<div className={styles.flex3} style={{ marginTop: "3rem" }}>
					<div className={styles.flex4} style={{ height: "55%" }}>
						<Image
							src={boss}
							style={{ width: "100%", height: "100%", objectFit: "cover" }}
							alt="thumbnail"
						/>
					</div>
					<div>
						<h3>Melonle Pickett</h3>
						<span>Engineer</span>
					</div>
				</div>
				<div className={styles.flex3} style={{ marginTop: "6rem" }}>
					<div className={styles.flex4} style={{ height: "60%" }}>
						<Image
							src={boss}
							style={{ width: "100%", height: "100%", objectFit: "cover" }}
							alt="thumbnail"
						/>
					</div>
					<div>
						<h3>Regla Wilson</h3>
						<span>CEO</span>
					</div>
				</div>
				<div className={styles.flex3} style={{ marginTop: "3rem" }}>
					<div className={styles.flex4} style={{ height: "55%" }}>
						<Image
							src={boss}
							style={{ width: "100%", height: "100%", objectFit: "cover" }}
							alt="thumbnail"
						/>
					</div>
					<div>
						<h3>Riley Walker</h3>
						<span>System Architect</span>
					</div>
				</div>
				<div className={styles.flex3}>
					<div className={styles.flex4}>
						<Image
							src={boss}
							style={{ width: "100%", height: "100%", objectFit: "cover" }}
							alt="thumbnail"
						/>
					</div>
					<div>
						<h3>Ron Douglas</h3>
						<span>Designer</span>
					</div>
				</div>
			</div>
		</div>
	);
}
