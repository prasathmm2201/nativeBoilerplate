import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';

export const Profile = () => {
  const {t} = useTranslation(['common']);
  return (
    <View>
      <Text>{t('Profile')}</Text>
    </View>
  );
};
