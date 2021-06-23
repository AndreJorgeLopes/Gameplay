import React from 'react';
import { Text, Image, View, ImageProps } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

type Props = RectButtonProps & {
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
		<RectButton style={styles.container} {...rest}>
			{renderIcon()}

			<Text style={styles.title}>{title}</Text>
		</RectButton>
	);
}
