import React from 'react'

const BookMark = ({ status, id, ...rest}) => {
	return (
		<><i className={status ? `bi bi-bookmark-fill` : `bi bi-bookmark`} onClick={() => { rest.handleToggleBookMark(id) }}></i></>
	)
}

export default BookMark