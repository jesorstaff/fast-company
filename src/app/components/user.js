import React from 'react'
import Qualitie from './qualitie'
import Bookmark from './bookmark'

const User = ({ user, ...rest }) => {

	return (
		<>
			<tr key={user._id}>
	      <td>{user.name}</td>
	      <td>
	        {user.qualities.map((item) => (
            <Qualitie
            	key={item._id}
            	color={item.color}
            	name={item.name}
            	_id={item._id}
            />
	        ))}
	      </td>
	      <td>{user.profession.name}</td>
	      <td>{user.completedMeetings}</td>
	      <td>{user.rate} /5</td>
	      <td><Bookmark status={user.bookmark} {...rest} id={user._id} /></td>
	      <td>
	        <button
	            onClick={() => rest.handleDelete(user._id)}
	            className="btn btn-danger"
	        >
	            delete
	        </button>
	      </td>
	    </tr>
		</>
	)
}

export default User