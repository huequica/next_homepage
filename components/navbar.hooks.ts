import React from 'react';
const useNavbar = () => {
	const [isOpen, setOpen] = React.useState(false);

	const toggleNavBarOpen = React.useCallback(
		() => setOpen((prev) => !prev),
		[setOpen],
	);

	const menuClassName = React.useMemo((): string => {
		return `navbar-menu${isOpen ? ' is-active' : ''}`;
	}, [isOpen]);

	const burgerClassName = React.useMemo(
		(): string => `navbar-burger${isOpen ? ' is-active' : ''}`,
		[isOpen],
	);

	return {
		isOpen,
		toggleNavBarOpen,
		menuClassName,
		burgerClassName,
	};
};

export { useNavbar };
