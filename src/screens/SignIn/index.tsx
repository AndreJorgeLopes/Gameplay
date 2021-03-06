import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import IllustrationImg from '../../assets/illustration.png';
import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

import { Button } from '../../components/Button';
import { Background } from '../../components/Background';

export function SignIn() {
	const navigation = useNavigation();

	function handleSignIn() {
		navigation.navigate('Home');
	}

	return (
		<Background>
			<View style={styles.container}>
				<Image source={IllustrationImg} style={styles.image} resizeMode='stretch' />

				<View style={styles.content}>
					<Text style={styles.title}>
						Conecte-se {'\n'}e organize suas {'\n'}
						jogatinas
					</Text>

					<Text style={styles.subtitle}>
						Crie grupos para jogar seus games {`\n`}
						favoritos com seus amigos
					</Text>

					<Button icon={DiscordImg} title='Entrar com Discord' onPress={handleSignIn} />
				</View>
			</View>
		</Background>
	);
}
