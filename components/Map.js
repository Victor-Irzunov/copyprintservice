

const Map = ({ address }) => {

	return (
		<>
			{
				address === 1 ?
					
					<div className='overflow-hidden relative rounded-lg'><a href="https://yandex.by/maps/157/minsk/?utm_medium=mapframe&utm_source=maps" className='absolute top-0 text-[#eee]'>Минск</a><a href="https://yandex.by/maps/157/minsk/house/Zk4YcwJlT0cDQFtpfXR4c31lYg==/panorama/?indoorLevel=1&ll=27.555624%2C53.892166&panorama%5Bdirection%5D=337.801204%2C0.380228&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=27.555767%2C53.891900&panorama%5Bspan%5D=92.996688%2C60.000000&tab=panorama&utm_medium=mapframe&utm_source=maps&z=16.81" className='absolute top-4 text-[#eee]'>Улица Кирилла Туровского, 8 — Яндекс Карты</a><iframe src="https://yandex.by/map-widget/v1/?indoorLevel=1&ll=27.555624%2C53.892166&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg2NjY4OTQxMBJF0JHQtdC70LDRgNGD0YHRjCwg0JzRltC90YHQuiwg0KPQu9GM0Y_QvdCw0Z7RgdC60LDRjyDQstGD0LvRltGG0LAsIDMwIgoN6nHcQRWUkVdC&panorama%5Bdirection%5D=337.801204%2C0.380228&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=27.555767%2C53.891900&panorama%5Bspan%5D=92.996688%2C60.000000&tab=panorama&z=16.81" width="560" height="180" frameborder="1" allowfullscreen="true" className='relative'></iframe></div>
					:
					null
			}
			
		</>
	)
}

export default Map
