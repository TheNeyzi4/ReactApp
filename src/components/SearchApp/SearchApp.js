import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import useUsers from '../../hooks/useUsers';

const SearchApp = () => {
	const [search, setSearch] = useState('');
	const inputRef = useRef(null);

	const { users, loading } = useUsers();

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const filterUsers = useCallback(
		(users, search) => {
			return users.filter((user) =>
				user.name.toLowerCase().includes(search.toLowerCase())
			);
		},
		[]
	);

	const filteredUsers = useMemo(() => filterUsers(users, search), [users, search, filterUsers]);

	return (
		<div>
			<h1>Пошук користувачів</h1>
			<input
				ref={inputRef}
				type="text"
				placeholder="Пошук за іменем"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			{loading ? (
				<p>Завантаження користувачів...</p>
			) : (
				<ul>
					{filteredUsers.map((user) => (
						<li key={user.email}>
							{user.name} - {user.age} - {user.email}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default SearchApp;
