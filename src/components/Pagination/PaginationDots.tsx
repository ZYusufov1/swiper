import { FC, ReactNode } from 'react'

export interface Service {
	title: string;
	subTitle: string;
	icon: ReactNode;
}

interface PaginationDotsProps {
	total: number;
	current: number;
	onChange: (index: number) => void;
}

const PaginationDots: FC<PaginationDotsProps> = ({ total, current, onChange }) => {
	return (
		<div className="relative flex items-center gap-4 mt-4">
			<div
				className="absolute h-4 w-8 bg-black rounded-full transition-transform duration-500 ease-in-out"
				style={{
					transform: `translateX(${current * 32}px)`,
				}}
			/>

			{Array.from({ length: total }).map((_, index) => (
				<div
					key={index}
					className={`h-4 transition-all duration-500 ease-in-out ${
						index === current
							? 'w-12 bg-gray-300 rounded-full'
							: 'w-4 bg-gray-300 rounded-full'
					}`}
					onClick={() => onChange(index)}
				/>
			))}
		</div>
	)
}

export default PaginationDots