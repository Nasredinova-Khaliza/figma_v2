import { useState } from "react";
import scss from "./Section4.module.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const url1 =
	"https://api.elchocrud.pro/api/v1/5d1f6631698eae883fbd2892c881666f/bloger";
const url2 =
	"https://api.elchocrud.pro/api/v1/47167fc575455279844b6c114dd1663c/advertising";

const Section4 = () => {
	const [nameInput, setNameInput] = useState("");
	const [emailInput, setEmailInput] = useState("");
	const [phoneInput, setPhoneInput] = useState("");
	const [commentInput, setCommentInput] = useState("");

	const [blogerColor, setBlogerColor] = useState(false);
	const [advertisingColor, setAdvertisingColor] = useState(false);

	const [loading, setLoading] = useState(false);

	const postRequest = async () => {
		if (
			nameInput === "" ||
			emailInput === "" ||
			phoneInput === "" ||
			commentInput === ""
		) {
			toast.error("ERROR");
			return;
		}

		const newData1 = {
			name: nameInput,
			email: emailInput,
			phone: phoneInput,
			comment: commentInput,
		};

		setNameInput("");
		setEmailInput("");
		setPhoneInput("");
		setCommentInput("");
		try {
			const response = await axios.post(loading ? url1 : url2, newData1);
			console.log(response.data);
			toast.success("sucsess");
		} catch (error) {
			console.log("ERROR", error);
		}
	};
	console.log(postRequest);

	const bloggerAdd = () => {
		setBlogerColor(true);
		setAdvertisingColor(false);
		setLoading(true);
	};

	const bloggerStyle = {
		backgroundColor: blogerColor ? "white" : " rgb(255, 63, 98)",
	};

	const advertisingAdd = () => {
		setAdvertisingColor(true);
		setBlogerColor(false);
		setLoading(false);
	};
	const advertisingStyle = {
		backgroundColor: advertisingColor ? "white" : " rgb(255, 63, 98)",
	};

	return (
		<div className={scss.Section4}>
			<div className={scss.content}>
				<div className={scss.texts}>
					<h1>Оставить заявку</h1>
					<p>
						Рекламные агентства имеют опыт работы в разных отраслях и знают, как
						эффективно привлекать целевую аудиторию.
					</p>
				</div>

				<div className={scss.content2}>
					<div className={scss.buttons}>
						<h3>Кто по жизни?</h3>
						<div className={scss.buttonss}>
							<button
								style={bloggerStyle}
								onClick={bloggerAdd}
								className={scss.bloger_button}>
								Блогер
							</button>
							<button
								style={advertisingStyle}
								onClick={advertisingAdd}
								className={scss.rec_button}>
								Рекламодатель
							</button>
						</div>
					</div>
					<div className={scss.inputs}>
						<div className={scss.input_1}>
							<label>Ваше имя:</label>
							<input
								type="text"
								id="name"
								placeholder="Введите ваше имя"
								value={nameInput}
								onChange={(e) => setNameInput(e.target.value)}
							/>
						</div>
						<div className={scss.input_2}>
							<label>Почта:</label>
							<input
								type="text"
								id="adres"
								value={emailInput}
								onChange={(e) => setEmailInput(e.target.value)}
								placeholder="Введите электронную почту"
							/>
						</div>
						<div className={scss.input_3}>
							<label>Телефон</label>
							<input
								type="text"
								id="phone"
								value={phoneInput}
								onChange={(e) => setPhoneInput(e.target.value)}
								placeholder="Введите ваш номер телефона"
							/>
						</div>
						<div className={scss.input_4}>
							<label htmlFor="com">Комментарий</label>
							<textarea
								name="com"
								rows="9"
								cols="70"
								placeholder="Введите ваш комментарий"
								value={commentInput}
								onChange={(e) => setCommentInput(e.target.value)}
							/>
						</div>

						<div className={scss.add_buttons}>
							<button
								className={scss.add_button}
								onClick={() => {
									postRequest();
								}}>
								Отправить
							</button>
							<ToastContainer />
							<p>
								Нажав на кнопку, вы соглашаетесь на обработку персональных
								данных
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section4;
