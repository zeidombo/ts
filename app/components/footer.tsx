export const Footer: React.FC = () => {
	return (
		<div className="absolute bottom-4 left-4">
			<p className="text-xs text-gray-500 bg-opacity-0">
				© {new Date().getFullYear()} Jeraldy Cascayan
			</p>
		</div>
	);
}
