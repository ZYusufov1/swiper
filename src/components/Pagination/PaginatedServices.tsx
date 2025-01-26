import { useState, FC } from 'react'
import PaginationDots, { Service } from './PaginationDots.tsx'

interface PaginatedServicesProps {
	services: Service[];
}

const PaginatedServices: FC<PaginatedServicesProps> = ({ services }) => {
	const [currentPage, setCurrentPage] = useState(0)

	const handleChangePage = (pageIndex: number) => {
		setCurrentPage(pageIndex)
	}

	return (
		<div className="w-full flex flex-col gap-6">
			<PaginationDots
				total={services.length}
				current={currentPage}
				onChange={handleChangePage}
			/>

			<div className="relative h-[300px] overflow-hidden">
				<div
					className="flex transition-transform duration-500 ease-in-out"
					style={{
						transform: `translateX(-${currentPage * 100}%)`,
					}}
				>
					{services.map((service, index) => (
						<div
							key={index}
							className="min-w-full bg-[#F0F0F0] rounded-lg flex flex-col p-4 gap-[60px] text-2xl"
						>
							<div className={'flex flex-row gap-6 items-center'}>
								<div className="text-5xl">{service.icon}</div>

								<div className="text-left text-[24px] font-semibold text-gray-700">
									{service.title}
								</div>
							</div>

							<div className={'text-left text-[14px]'}>{service.subTitle}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default PaginatedServices
