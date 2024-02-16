import scss from "./Section3.module.scss";
import img1 from "../../../assets/Vector 3.svg";
import img2 from "../../../assets/img.png";
import img3 from "../../../assets/Vector 5.svg";
import img4 from "../../../assets/Vector 6.svg";

const Section3 = () => {
	return (
		<div className={scss.Section3}>
			<div className="container">
				<div className={scss.content}>
					{/* //!card1 */}
					<h1>Наши преимущества</h1>
					<div className={scss.cards1}>
						<div className={scss.card1}>
							<div className={scss.background1}>
								<div className={scss.text1}>
									<h1>Всегда выполняем ваши запросы</h1>
									<p>
										Разнообразный и богатый опыт консультация с профессионалами
										из IT играет важную роль в формировании
									</p>
								</div>
								<img className={scss.img1} src={img1} alt="" />
							</div>
						</div>
						{/* //!card2 */}
						<div className={scss.card2}>
							<div className={scss.background2}>
								<div className={scss.text2}>
									<h1>Профессиональный подход:</h1>
									<p>
										Рекламные агентства имеют опыт работы в разных отраслях и
										знают, как эффективно привлекать целевую аудиторию.
									</p>
								</div>
								<img src={img2} alt="" />
							</div>
						</div>
					</div>
					{/* //!card3*/}
					<div className={scss.cards2}>
						<div className={scss.card3}>
							<div className={scss.background3}>
								<img className={scss.img3} src={img3} alt="" />
								{/* <h1>Креативность</h1> */}
							</div>
						</div>
						{/* //!card4 */}
						<div className={scss.card4}>
							<div className={scss.background4}>
								<div className={scss.text3}>
									<h1>Доступ к новейшим технологиям</h1>
									<p>
										Рекламные агентства обычно имеют доступ к самым передовым
										инструментам и технологиям в области маркетинга и рекламы.
									</p>
								</div>
								<img className={scss.img4} src={img4} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section3;
