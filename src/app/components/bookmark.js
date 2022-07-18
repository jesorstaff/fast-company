import React from 'react'

const BookMark = ({ status, ...rest }) => {
	return (
		<button { ...rest }>
			<i className={status ? `bi bi-bookmark-heart-fill` : `bi bi-bookmark`}></i>
		</button>
	)
}

export default BookMark