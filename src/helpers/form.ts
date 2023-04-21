export const submitOnEnter = (node: HTMLElement) => {

	const handleSubmit = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			node.dispatchEvent(new CustomEvent('enter_submit'))
		}
	}

	document.addEventListener('keydown', handleSubmit)

	return {
		destroy() {
			document.removeEventListener('keydown', handleSubmit)
		}
	}

}
