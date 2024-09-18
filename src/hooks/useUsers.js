import { useState, useEffect } from 'react';

const useUsers = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setUsers([
				{ name: 'John Smith', age: 25, email: 'john@example.com' },
				{ name: 'Johnson Smith', age: 30, email: 'jane@example.com' },
				{ name: 'Alice Johnson', age: 35, email: 'alice@example.com' },
			]);
			setLoading(false);
		}, 2000);
	}, []);

	return { users, loading };
};

export default useUsers;
