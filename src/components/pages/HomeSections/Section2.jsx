import scss from "./Section2.module.scss";
import img1 from "../../../assets/Rectangle 14.svg";
import logo from "../../../assets/Rectangle 15.svg";
import card0 from "../../../assets/cards/card0.svg";
import card1 from "../../../assets//cards/card1.svg";
import card2 from "../../../assets/cards/card2.svg";
import card3 from "../../../assets//cards/card3.svg";

const Section2 = () => {
	return (
		<div className={scss.Section2}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.content1}>
						<div className={scss.left}>
							<h1>Наши кейсы</h1>
							<img src={img1} alt="" />
						</div>
						<div className={scss.right}>
							<div className={scss.buttons}>
								<span>🔥</span>
								<button className={scss.game}>Игры</button>
								<button className={scss.colab}>Коллабарация</button>
							</div>
							<h1>Игровой проект War Thunder X ДУЛО</h1>
							<p>
								Разнообразный и богатый опыт консультация с профессионалами из
								IT играет важную роль в формировании всесторонне
								сбалансированных нововведений. Значимость этих проблем настолько
								очевидна, что новая модель организационной.
							</p>
							<button className={scss.button}>Подробнее</button>
						</div>
					</div>
					<div className={scss.content2}>
						<div className={scss.text1}>
							<img src={logo} alt="" />
							<div className={scss.text}>
								<h3>Общее кол-во просмотров</h3>
								<h2>20.000+</h2>
							</div>
							<hr />
						</div>
						<div className={scss.text1}>
							<img src={logo} alt="" />
							<div className={scss.text}>
								<h3>Лайков</h3>
								<h2>20.000+</h2>
							</div>
							<hr />
						</div>
						<div className={scss.text1}>
							<img src={logo} alt="" />
							<div className={scss.text}>
								<h3>охваты</h3>
								<h2>20.000+</h2>
							</div>
						</div>
					</div>
					<div className={scss.content3}>
						<div className={scss.card0}>
							<div className={scss.letter}>
								<h3>Игровой проект War Thunder</h3>
								<p>Специальный проект с Моргенштерном</p>
							</div>
							<img src={card0} alt="" />
						</div>
						<div className={scss.card1}>
							<div className={scss.letter}>
								<h3>Казино Stake x Drake </h3>
								<p>Азарт, Рэп, Реклама</p>
							</div>
							<img src={card1} alt="" />
						</div>
						<div className={scss.card1}>
							<div className={scss.letter}>
								<h3>Игровой проект Free Fire</h3>
								<p>Уникальная рекламная компания</p>
							</div>
							<img src={card2} alt="" />
						</div>
						<div className={scss.card1}>
							<div className={scss.letter}>
								<h3>VK Music</h3>
								<p>Музыкальный сервис соц. сети ВКонтакте</p>
							</div>
							<img src={card3} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section2;
