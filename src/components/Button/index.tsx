import React from 'react';
import { Text, Image, View, TouchableOpacity, TouchableOpacityProps, ImageProps } from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
	title: string;
	icon?: ImageProps;
};

export function Button({ icon, title, ...rest }: Props) {
	const renderIcon = () => {
		if (typeof icon === 'undefined') {
			return;
		}
		return <View style={styles.iconWrapper}>{<Image source={icon} style={styles.icon} />}</View>;
	};

	return (
		<TouchableOpacity style={styles.container} {...rest}>
			{renderIcon()}

			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	);
}
