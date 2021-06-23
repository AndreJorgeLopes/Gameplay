import React from 'react';
import { Text, Image, View, TouchableOpacity, TouchableOpacityProps, ImageProps } from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
	title: string;
	icon?: ImageProps;
};

export function ButtonIcon({ icon, title,...rest }: Props) {
  const renderIcon = () => {
    if (typeof icon === "undefined") {
      return
    }
    return <Image source={icon} style={styles.icon} />
  }

	return (
		<TouchableOpacity style={styles.container} {...rest}>
			<View style={styles.iconWrapper}>
        {renderIcon()}
			</View>

			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	);
}
