import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth';

export function Routes() {
	return (
		<NavigationContainer>
			<AuthRoutes />
		</NavigationContainer>
	);
}
