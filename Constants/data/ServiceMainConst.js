import { Typography } from 'antd'

const { Paragraph } = Typography

export const dataMainService = [
	{
		id: 1,
		img: '/digital22.webp',
		alt: 'цифровая печать ',
		h3: 'ЦИФРОВАЯ ПЕЧАТЬ',
		content: (
			<Paragraph
				ellipsis={{
					rows: 3,
					expandable: true,
					symbol: 'читать дальше',
				}
				}
			>
				Цифровая печать имеет ряд преимуществ перед традиционной печатью в том, что она позволяет получить высокое качество продукции с небольшими затратами.Это связано с отсутствием необходимости создания печатных форм и возможностью производить печать небольших тиражей, что позволяет сэкономить на стоимости и избежать излишних затрат.Более того, цифровая печать позволяет осуществлять индивидуальную настройку каждого экземпляра, что повышает качество продукции и удовлетворяет потребности каждого клиента.Мы предлагаем услуги по цифровой печати с высоким качеством продукции и низкой цене, что делает нашу компанию оптимальным выбором для заказа печатной продукции.
			</Paragraph>
		),
		price: [
			{
				id: 1,
				title: `Печать и ксерокопия черно-белая
				`,
				img_price: '/digitalBlackWhite.webp',
				alt_price: 'Цены на черно-белую ксерокопию и печать'

			},
			{
				id: 2,
				title: `Печать и ксерокопия цветная`,
				img_price: '/digitalcolor2.webp',
				alt_price: 'Цены на черно-белую ксерокопию и печать',
				err: (
					<div className="">
						<p><span className="text-orange-600">*</span>
							На цветные отпечатки, содержащие подписи и печати, ставится штамп "Распечатано с электронного носителя", на копии - штамп "Копия" в соответствии со ст. 380 УК РБ. Печать осуществляется из файлов разных форматов (Word, Excel, Autocad, PDF и др.).
						</p>
						<p><span className="text-orange-600">*</span>
							Печатный центр не несёт ответственность за распечатку файлов с ошибками!
						</p>
						<p><span className="text-orange-600">*</span>
							Файлы проверяются Заказчиком до момента оказания услуги.
						</p>
					</div>
				)
			},
			{
				id: 3,
				title: `сканирование`,
				img_price: '/scan.webp',
				alt_price: 'Цены на сканирование',
				err: (
					<div className="">
						<p><span className="text-orange-600">*</span>
							Отсканированные документы могут быть записаны на носитель Заказчика либо отправлен на электронную почту, viber, telegram. Так же может быть произведена запись на носитель исполнителя, после приобретения Заказчиком у Исполнителя необходимого носителя информации.
						</p>
						<p><span className="text-orange-600">*</span>
							Редактирование отсканированного документа в стоимость не входит и при необходимости оплачивается отдельно в зависимости от сложности редактирования.
						</p>
					</div>
				)
			},
		],
	},
	{
		id: 2,
		img: '/foto.webp',
		alt: 'Фотопечать',
		h3: 'Фотопечать',
		content: (
			<Paragraph
				ellipsis={{
					rows: 3,
					expandable: true,
					symbol: 'читать дальше',
				}
				}
			>
				Заказ фотопечати в нашем печатном центре предоставляет ряд преимуществ, таких как высокое качество и низкая цена. Мы используем современное оборудование и высококачественные материалы для производства продукции, что гарантирует яркие и четкие цвета, глубокие тени и богатые детали. Наша компания также предлагает различные форматы и размеры для фото печати, чтобы удовлетворить потребности каждого клиента. Кроме того, мы предлагаем конкурентоспособные цены и скидки для крупных заказов, что делает нас оптимальным выбором для тех, кто хочет получить качественную фото продукцию по низкой цене.
			</Paragraph>
		),
		price: [
			{
				id: 1,
				title: `ФОТО НА ДОКУМЕНТЫ`,
				img_price: '/docum.webp',
				alt_price: 'Стоимость фото на документы',
				err: (
					<div className="">
						<p><span className="text-orange-600">*</span>
						Срок выполнения от 10 минут до 3-х часов в зависимости от загруженности оператора.
						</p>
						<p><span className="text-orange-600">*</span>
						Минимальная ретушь входит в стоимость фото. Детальная ретушь выполняется по желанию Заказчика и оплачивается отдельно, стоимость  4,00руб.
						</p>
					</div>
				)
			},
			{
				id: 2,
				title: `ПЕЧАТЬ ФОТО EPSON`,
				img_price: '/epson.webp',
				alt_price: 'Стоимость ПЕЧАТИ ФОТО EPSON',
				err: (
					<div className="">
						<p><span className="text-orange-600">*</span>
						Сроки исполнения заказов от 1 до 5 дней в зависимости от загруженности.
						</p>
						<p><span className="text-orange-600">*</span>
						Дополнительная ретушь и коррекция фото производится по желанию Заказчика и оплачивается отдельно.
						</p>
						<p><span className="text-orange-600">*</span>
						При заказе свыше 50 фото по желанию Заказчика производится пробная печать 1 фото и на выбранном виде бумаги.
						</p>
					</div>
				)
			},
			{
				id: 3,
				title: `ПЕЧАТЬ ФОТО FUJIFILM`,
				img_price: '/fijifilm.webp',
				alt_price: 'Стоимость ПЕЧАТИ ФОТО FUJIFILM',
				err: (
					<div className="">
						<p><span className="text-orange-600">*</span>
						Сроки исполнения заказов от 1 до 5 дней в зависимости от загруженности.
						</p>
						<p><span className="text-orange-600">*</span>
						Дополнительная ретушь и коррекция фото производится по желанию Заказчика и оплачивается отдельно.
						</p>
						<p><span className="text-orange-600">*</span>
						При заказе свыше 50 фото по желанию Заказчика производится пробная печать 1 фото и на выбранном виде бумаги.
						</p>
					</div>
				)
			},
			{
				id: 4,
				title: `ФОТОКНИГИ и фотожурналы`,
				img_price: '/books.webp',
				alt_price: 'Стоимость ФОТОКНИГ и фотожурналов',
				err: (
					<div className="">
						<p><span className="text-orange-600">*</span>
						Изготовление занимает от 3 до 20 дней в зависимости от загруженности.
						</p>
						<p><span className="text-orange-600">*</span>
						Изготавливается фотокнига по Вашему готовому макету либо по нашему шаблону. Шаблоны для согласования предоставляются администратором фотосалона. Возможно создать Ваш индивидуальный макет фотокниги¸ стоимость создания макета указаны ниже и зависят от сложности дизайна.
						</p>
					</div>
				)
			},

		],
	},
	{
		id: 3,
		img: '/pruzhin.webp',
		alt: 'Послепечатная обработка',
		h3: 'Послепечатная обработка',
		content: (
			<Paragraph
				ellipsis={{
					rows: 3,
					expandable: true,
					symbol: 'читать дальше',
				}}
			>
				Заказ в нашем печатном центре послепечатной обработки (например, пружинный переплет или ламинирование) обеспечивает высокое качество и низкую цену. Мы используем современное оборудование и материалы, чтобы гарантировать, что ваш продукт будет выглядеть профессионально и долговечно.Наша команда опытных специалистов гарантирует высокое качество каждого заказа. Наши цены также очень конкурентоспособны, что делает нас лучшим выбором для тех, кто ищет качественную послепечатную обработку по доступной цене. Независимо от того, нужен ли вам пружинный переплет или ламинирование, мы гарантируем, что ваш продукт будет выполнен профессионально и вовремя.
			</Paragraph>
		),
		price: [
			{
				id: 1,
				title: `ПЕРЕПЛЕТ НА ПЛАСТИКОВУЮ ПРУЖИНУ`,
				img_price: '/plastik.webp',
				alt_price: 'Стоимость ПЕРЕПЛЕТа НА ПЛАСТИКОВУЮ ПРУЖИНУ',
				err: (
					<div className="">
						<p><span className="text-orange-600">*</span>
						В стоимость переплета входит пружина, цвет пружины уточняется дополнительно. 
						</p>
						<p><span className="text-orange-600">*</span>
						При необходимости  установки обложек они оплачиваются отдельно.
						</p>
						<p><span className="text-orange-600">*</span>
						Каждая сшивка и расшивка документа на пластиковую пружину с добавлением или изъятием листов 2,00 руб. за журнал.
						</p>
						<p><span className="text-orange-600">*</span>
						При переплете на металлическую пружину стоимость расшивки/сшивки документа и добавлением либо изъятием листов производится по стоимости переплета.
						</p>
					</div>
				)
			},
			{
				id: 2,
				title: `ПЕРЕПЛЕТ НА МЕТАЛЛИЧЕСКУЮ ПРУЖИНУ`,
				img_price: '/metal.webp',
				alt_price: 'Стоимость ПЕРЕПЛЕТа НА МЕТАЛЛИЧЕСКУЮ ПРУЖИНУ',
				err: (
					<div className="">
						<p><span className="text-orange-600">*</span>
						В стоимость переплета входит пружина, цвет пружины уточняется дополнительно. 
						</p>
						<p><span className="text-orange-600">*</span>
						При необходимости  установки обложек они оплачиваются отдельно.
						</p>
						<p><span className="text-orange-600">*</span>
						Каждая сшивка и расшивка документа на пластиковую пружину с добавлением или изъятием листов 2,00 руб. за журнал.
						</p>
						<p><span className="text-orange-600">*</span>
						При переплете на металлическую пружину стоимость расшивки/сшивки документа и добавлением либо изъятием листов производится по стоимости переплета.
						</p>
					</div>
				)
			},
			{
				id: 3,
				title: `ЛАМИНИРОВАНИЕ`,
				img_price: '/laminirovanie.webp',
				alt_price: 'Стоимость ЛАМИНИРОВАНИЯ',
				err: (
					<div className="">
						<p><span className="text-orange-600">*</span>
						При ламинировании небольшого количества от 1 до 20 листов экземпляры ламинируются в течение 5-10 минут в присутствии Заказчика. При более крупном заказе на ламинацию сроки согласовываются с Заказчиком в зависимости от количества. 
						</p>
						
					</div>
				)
			},

		],
	},
	{
		id: 4,
		img: '/holst.webp',
		alt: 'ПЕЧАТЬ КАРТИН НА ХОЛСТЕ',
		h3: 'ПЕЧАТЬ КАРТИН НА ХОЛСТЕ',
		content: (
			<Paragraph
				ellipsis={{
					rows: 3,
					expandable: true,
					symbol: 'читать дальше',
				}}
			>
				Заказ печати картин на холсте в нашем печатном центре обеспечивает высокое качество и низкую цену. Мы используем специальные материалы и современное оборудование для производства холстовых печатей с яркими и четкими цветами. Наша команда опытных специалистов гарантирует высокое качество каждого заказа. Мы также предлагаем различные размеры и форматы для печати картин на холсте, чтобы удовлетворить потребности каждого клиента. Наши цены также очень конкурентоспособны, что делает нас лучшим выбором для тех, кто ищет качественную печать картин на холсте по низкой цене.
			</Paragraph>
		),
		price: [
			{
				id: 1,
				title: `Картина на холсте`,
				img_price: '/holstPrice.webp',
				alt_price: 'Стоимость картины на холсте',
				err: (
					<div className="">
						<p><span className="text-orange-600">*</span>
						Сроки изготовления от 2 до 5 рабочих дней. 
						</p>
						<p><span className="text-orange-600">*</span>
						Возможна печать любого Вашего изображения либо изготовление макета по индивидуальному заказу. 
						</p>
					</div>
				),
				list: (
					<div className=''>
						<ul className='text-xs'>
							<li>
								Ваше фото
							</li>
							<li>
								Модульная картина
							</li>
							<li>
								Метрика
							</li>
							<li>
								Коллаж
							</li>
							<li>
								Репродукция
							</li>
							<li>
								Love is
							</li>
							<li>
							Instagram
							</li>
							<li>
							Polaroid
							</li>
						</ul>
					</div>
				)
			},
		],
	},
	{
		id:5,
		img: '/reklama.webp',
		alt: 'РЕКЛАМНАЯ ПРОДУКЦИЯ',
		h3: 'РЕКЛАМНАЯ ПРОДУКЦИЯ',
		content: (
			<Paragraph
				ellipsis={{
					rows: 3,
					expandable: true,
					symbol: 'читать дальше',
				}}
			>
				Наш печатный центр предлагает высокое качество и низкие цены на печать рекламной продукции. Мы специализируемся на печати визиток, листовок, буклетов, флаеров, календарей и пластиковых карт, используя современное оборудование и качественные материалы. Наша команда опытных дизайнеров поможет создать уникальный дизайн, который привлечет внимание ваших потенциальных клиентов. Мы гарантируем быстрое производство и доступные цены, чтобы удовлетворить потребности каждого клиента. Обращайтесь к нам для получения качественной рекламной продукции по низкой цене!
			</Paragraph>
		),
		price: [
			{
				id: 1,
				title: `ВИЗИТКИ`,
				img_price: '/vizitkiPrice.webp',
				alt_price: 'Стоимость печати ВИЗИТОК',
				err: (
					<div className="">
						<p><span className="text-orange-600">*</span>
						Сроки изготовления зависят от количества и согласовываются с администратором. 
						</p>
						<p><span className="text-orange-600">*</span>
						Офсетную печать визиток с полно заливкой либо темным фоном на макете рекомендуем ламинировать с одной стороны что бы избежать отбивки краски с обратной стороны визитки  и просыпания краски при нарезке по краям.
						</p>
						<p><span className="text-orange-600">*</span>
						Печать всей рекламной продукции производится только по индивидуальному заказу. 
						</p>
						<p><span className="text-orange-600">*</span>
						При отсутствии у Заказчика готового макета для печати возможно изготовление макетов нашими дизайнерами. Стоимость определяется в зависимости от сложности макета и оговаривается до начала работ по его изготовлению. 
						</p>
						<p><span className="text-orange-600">*</span>
						Готовые макеты Заказчика не соответствующие параметрам печати по согласованию Заказчик исправляет сам либо исправляет наш дизайнер за дополнительную оплату.
						</p>
					</div>
				)
			},
			{
				id: 2,
				title: `Буклеты | Листовки | Флаеры`,
				img_price: '/bukletiListovki.webp',
				alt_price: 'Стоимость печати Буклетов | Листовок | Флаеров',
				err: (
					<div className="">
						<p><span className="text-orange-600">*</span>
						Сроки изготовления зависят от количества и согласовываются с администратором. 
						</p>
						<p><span className="text-orange-600">*</span>
						Офсетную печать визиток с полно заливкой либо темным фоном на макете рекомендуем ламинировать с одной стороны что бы избежать отбивки краски с обратной стороны визитки  и просыпания краски при нарезке по краям.
						</p>
						<p><span className="text-orange-600">*</span>
						Печать всей рекламной продукции производится только по индивидуальному заказу. 
						</p>
						<p><span className="text-orange-600">*</span>
						При отсутствии у Заказчика готового макета для печати возможно изготовление макетов нашими дизайнерами. Стоимость определяется в зависимости от сложности макета и оговаривается до начала работ по его изготовлению. 
						</p>
						<p><span className="text-orange-600">*</span>
						Готовые макеты Заказчика не соответствующие параметрам печати по согласованию Заказчик исправляет сам либо исправляет наш дизайнер за дополнительную оплату.
						</p>
					</div>
				)
			},
			
			{
				id: 3,
				title: `КАЛЕНДАРИ`,
				img_price: '/kalender.webp',
				alt_price: 'Стоимость печати КАЛЕНДАРЕЙ',
				err: (
					<div className="">
						<p><span className="text-orange-600">*</span>
						Сроки изготовления зависят от количества и согласовываются с администратором. 
						</p>
						<p><span className="text-orange-600">*</span>
						Офсетную печать визиток с полно заливкой либо темным фоном на макете рекомендуем ламинировать с одной стороны что бы избежать отбивки краски с обратной стороны визитки  и просыпания краски при нарезке по краям.
						</p>
						<p><span className="text-orange-600">*</span>
						Печать всей рекламной продукции производится только по индивидуальному заказу. 
						</p>
						<p><span className="text-orange-600">*</span>
						При отсутствии у Заказчика готового макета для печати возможно изготовление макетов нашими дизайнерами. Стоимость определяется в зависимости от сложности макета и оговаривается до начала работ по его изготовлению. 
						</p>
						<p><span className="text-orange-600">*</span>
						Готовые макеты Заказчика не соответствующие параметрам печати по согласованию Заказчик исправляет сам либо исправляет наш дизайнер за дополнительную оплату.
						</p>
					</div>
				)
			},
			{
				id: 4,
				title: `ПЛАСТИКОВЫЕ КАРТЫ`,
				img_price: '/plastikPrice.webp',
				alt_price: 'Стоимость печати ПЛАСТИКОВЫХ КАРТ',
				err: (
					<div className="">
						<p><span className="text-orange-600">*</span>
						Сроки изготовления зависят от количества и согласовываются с администратором. 
						</p>
						<p><span className="text-orange-600">*</span>
						Офсетную печать визиток с полно заливкой либо темным фоном на макете рекомендуем ламинировать с одной стороны что бы избежать отбивки краски с обратной стороны визитки  и просыпания краски при нарезке по краям.
						</p>
						<p><span className="text-orange-600">*</span>
						Печать всей рекламной продукции производится только по индивидуальному заказу. 
						</p>
						<p><span className="text-orange-600">*</span>
						При отсутствии у Заказчика готового макета для печати возможно изготовление макетов нашими дизайнерами. Стоимость определяется в зависимости от сложности макета и оговаривается до начала работ по его изготовлению. 
						</p>
						<p><span className="text-orange-600">*</span>
						Готовые макеты Заказчика не соответствующие параметрам печати по согласованию Заказчик исправляет сам либо исправляет наш дизайнер за дополнительную оплату.
						</p>
					</div>
				)
			},
			
		

		],
	},
	{
		id:6,
		img: '/nanesenie.webp',
		alt: 'НАНЕСЕНИЕ ИЗОБРАЖЕНИЙ',
		h3: 'НАНЕСЕНИЕ ИЗОБРАЖЕНИЙ',
		content: (
			<Paragraph
				ellipsis={{
					rows: 3,
					expandable: true,
					symbol: 'читать дальше',
				}}
			>
				Заказывая нанесение изображений на вещи и предметы в нашем печатном центре, вы можете быть уверены в высоком качестве и низкой цене. Мы предлагаем нанесение изображений на кружки, майки, магниты, брелки, свитшоты и значки, чтобы помочь вам создать запоминающийся и оригинальный подарок или рекламную продукцию. Мы используем только качественные материалы и современное оборудование, что гарантирует высокое качество и долговечность изображений на любой поверхности.
			</Paragraph>
		),
		price: [
			{
				id: 1,
				title: `На кружках`,
				img_price: '/kruzhki.webp',
				alt_price: 'Стоимость нанесения изображений на кружках',
				err: (
					<div className="">
						<p><span className="text-orange-600">*</span>
						Сроки изготовления зависят от количества и согласовываются с администратором.
						</p>
						<p><span className="text-orange-600">*</span>
						Возможна печать любого Вашего изображения либо изготовление макета по индивидуальному заказу. Так же можно воспользоваться каталогом изображений который находится у администратора.
						</p>
						<p><span className="text-orange-600">*</span>
						Вид печати, размер и место нанесения изображения согласовывается в процессе оформления заказа в зависимости от технической возможности нанесения данного вида изображения. 
						</p>
					</div>
				)
			},
			{
				id: 2,
				title: `НА ФУТБОЛКАХ`,
				img_price: '/fotobolka.webp',
				alt_price: 'Стоимость печати НА ФУТБОЛКАХ',
				err: (
					<div className="">
						<p><span className="text-orange-600">*</span>
						Сроки изготовления зависят от количества и согласовываются с администратором. 
Возможна печать любого Вашего изображения либо изготовление макета по индивидуальному заказу. Так же можно воспользоваться каталогом изображений который находится у администратора.
						</p>
						<p><span className="text-orange-600">*</span>
						Вид печати, размер и место нанесения изображения согласовывается в процессе оформления заказа в зависимости от технической возможности нанесения данного вида изображения. 
						</p>
					</div>
				)
			},		
			{
				id: 3,
				title: `НА СВИТШОТАХ`,
				img_price: '/svitshop.webp',
				alt_price: 'Стоимость печати НА СВИТШОТАХ',
				err: (
					<div className="">
						<p><span className="text-orange-600">*</span>
						Сроки изготовления зависят от количества и согласовываются с администратором. 
Возможна печать любого Вашего изображения либо изготовление макета по индивидуальному заказу. Так же можно воспользоваться каталогом изображений который находится у администратора.
						</p>
						<p><span className="text-orange-600">*</span>
						Вид печати, размер и место нанесения изображения согласовывается в процессе оформления заказа в зависимости от технической возможности нанесения данного вида изображения. 
						</p>
					</div>
				)
			},
			{
				id: 4,
				title: `На толстовке`,
				img_price: '/tolstovka.webp',
				alt_price: 'Стоимость печати На толстовке',
				err: (
					<div className="">
						<p><span className="text-orange-600">*</span>
						Сроки изготовления зависят от количества и согласовываются с администратором. 
Возможна печать любого Вашего изображения либо изготовление макета по индивидуальному заказу. Так же можно воспользоваться каталогом изображений который находится у администратора.
						</p>
						<p><span className="text-orange-600">*</span>
						Вид печати, размер и место нанесения изображения согласовывается в процессе оформления заказа в зависимости от технической возможности нанесения данного вида изображения. 
						</p>
					</div>
				)
			},
			{
				id: 5,
				title: `На шоперах`,
				img_price: '/shoper.webp',
				alt_price: 'Стоимость печати На шоперах',
				err: (
					<div className="">
						<p><span className="text-orange-600">*</span>
						Сроки изготовления зависят от количества и согласовываются с администратором. 
Возможна печать любого Вашего изображения либо изготовление макета по индивидуальному заказу. Так же можно воспользоваться каталогом изображений который находится у администратора.
						</p>
						<p><span className="text-orange-600">*</span>
						Вид печати, размер и место нанесения изображения согласовывается в процессе оформления заказа в зависимости от технической возможности нанесения данного вида изображения. 
						</p>
					</div>
				)
			},
			{
				id: 6,
				title: `ИЗГОТОВЛЕНИЕ МАГНИТОВ, ЗНАЧКОВ, БРЕКЛОВ`,
				img_price: '/magnitikiBrelki.webp',
				alt_price: 'Стоимость ИЗГОТОВЛЕНИЯ МАГНИТОВ, ЗНАЧКОВ, БРЕКЛОВ',
				err: (
					<div className="">
						<p><span className="text-orange-600">*</span>
						Сроки изготовления зависят от количества и согласовываются с администратором. 
						</p>
						<p><span className="text-orange-600">*</span>
						Скругление углов по желанию Заказчика.
						</p>
					</div>
				)
			},
			
	
		],
	},
	{
		id:7,
		img: '/dorobotkaDokum.webp',
		alt: 'ДОПЕЧАТНАЯ И ПОСЛЕПЕЧАТНАЯ ОБРАБОТКА ДОКУМЕНТОВ',
		h3: 'ДОПЕЧАТНАЯ И ПОСЛЕПЕЧАТНАЯ ОБРАБОТКА ДОКУМЕНТОВ',
		content: (
			<Paragraph
				ellipsis={{
					rows: 3,
					expandable: true,
					symbol: 'читать дальше',
				}}
			>
			Заказ в нашем печатном центре - это простой способ получить высококачественную обработку ваших документов по доступной цене. Наша команда специалистов предоставляет широкий спектр услуг, таких как редактирование, резка, скрепка и скругление углов документов, а также набор текста. Мы гарантируем качественное выполнение всех работ и быструю обработку заказов. Не тратьте свое время на обработку документов самостоятельно - доверьте это нам и сэкономьте свое время и деньги!
			</Paragraph>
		),
		price: [
			{
				id: 1,
				title: ``,
				img_price: '/dorobotPrice.webp',
				alt_price: 'Стоимость резки, скругление углов, редактирования, набора текстов документов',
			},
		],
	},
	{
		id:8,
		img: '/designer2.webp',
		alt: 'ДОПЕЧАТНЫЕ УСЛУГИ',
		h3: 'ДОПЕЧАТНЫЕ УСЛУГИ',
		content: (
			<Paragraph
				ellipsis={{
					rows: 3,
					expandable: true,
					symbol: 'читать дальше',
				}}
			>
			Наш печатный центр предоставляет полный спектр услуг, связанных с печатью и допечатной подготовкой материалов. Мы гарантируем низкие цены и высокое качество во всех наших услугах. Изготовление макетов, дизайн, проявка и оцифровка пленки, восстановление фото и цветокоррекция - мы можем выполнить любой заказ нашим профессиональным подходом. С нами вы можете быть уверены в том, что получите идеальный результат для вашего проекта по низкой цене.
			</Paragraph>
		),
		price: [
			{
				id: 1,
				title: `ИЗГОТОВЛЕНИЕ МАКЕТОВ, РЕТУШЬ И ВОССТАНОВЛЕНИЕ ФОТОГРАФИЙ`,
				img_price: '/maketPrice.webp',
				alt_price: 'Стоимость ИЗГОТОВЛЕНИЯ МАКЕТОВ, РЕТУШИ И ВОССТАНОВЛЕНИЯ ФОТОГРАФИЙ',
				err: (
					<div className="">
						<p><span className="text-orange-600">*</span>
						Сроки и стоимость оговариваются с администратором и зависят от сложности выполняемых работ . 
						</p>
						<p><span className="text-orange-600">*</span>
						Готовые макеты предоставляются Заказчику в исходном варианте для возможности последующей печати, доработки и корректировки готового макета.
						</p>
						<p><span className="text-orange-600">*</span>
						Макет по желанию Заказчика отправляется на электронную почту либо сбрасывается на носитель предоставленный Заказчиком.
						</p>
					</div>
				)
			},
			{
				id: 2,
				title: `ПРОЯВКА, ОЦИФРОВКА ФОТОПЛЕНКИ И СЛАЙДОВ`,
				img_price: '/proyavkaPrice.webp',
				alt_price: 'Стоимость ПРОЯВКИ, ОЦИФРОВКИ ФОТОПЛЕНКИ И СЛАЙДОВ',
				err: (
					<div className="">
						<p><span className="text-orange-600">*</span>
						Стоимость оцифровки слайдов, пленок и фото указана без последующей ретуши и восстановления кадров.  
						</p>
						<p><span className="text-orange-600">*</span>
						При необходимости восстановления фото после оцифровки стоимость и сроки работ оговариваются отдельно в зависимости от сложности работ и степени повреждений.
						</p>
					</div>
				)
			},
		],
	},
]