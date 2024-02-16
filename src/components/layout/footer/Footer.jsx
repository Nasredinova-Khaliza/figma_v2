import scss from "./Footer.module.scss";
import logo from "../../../assets/Logo.png";
import img1 from "../../../assets/icons/twitter.svg";
import img2 from "../../../assets/icons/wk.svg";
import img3 from "../../../assets/icons/twitch.svg";
import img4 from "../../../assets/icons/instagram.svg";
import img5 from "../../../assets/icons/teleg.svg";
import img6 from "../../../assets/icons/face.svg";

const Footer = () => {
	const icons = [
		{
			img: img1,
		},
		{
			img: img2,
		},
		{
			img: img3,
		},
		{
			img: img4,
		},
		{
			img: img5,
		},
		{
			img: img6,
		},
	];
	const links = [
		{
			name: "Блогерам",
			href: "/",
		},
		{
			name: "Рекламодателям",
			href: "/",
		},
		{
			name: "Пользовательское соглашение",
			href: "/",
		},
		{
			name: "Наши кейсы",
			href: "/",
		},
		{
			name: "Помощь",
			href: "/",
		},
	];
	return (
		<footer className={scss.Footer}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.footer_button}>
						<div className={scss.footer_logo}>
							<img src={logo} alt="logo" />
							<p>
								С другой стороны рамки и место обучения кадров позволяет оценить
								значение направлений прогрессивного развития!
							</p>
						</div>
						<div className={scss.footer_email}>
							<p>Остались вопросы?</p>
							<button>Почта</button>
						</div>
					</div>

					<nav>
						{links.map((item) => (
							<li key={item.name}>
								<a href={item.href}>{item.name}</a>
							</li>
						))}
					</nav>
					<hr />

					<div className={scss.footer_icons}>
						<h3>© 2024 Khaliza. All rights reserved.</h3>
						<div className={scss.icons}>
							{icons.map((item) => (
								<img key={item.img} src={item.img} alt="img" />
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
