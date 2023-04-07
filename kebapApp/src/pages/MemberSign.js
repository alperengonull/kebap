import { View, Text } from 'react-native'
import React from 'react'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'

const MemberSign = () => {
  return (
    <View>
      <Input label={"Üye adı"} placeholder="Üyenin ismini giriniz..." />
      <Input label={"Üye Soyadı"} placeholder="Üyenin soyismini giriniz..." />
      <Input label={"Üye Yaşı"} placeholder="Üyenin yaşını giriniz..." />
      <Input label={"Üye E-posta"} placeholder="Üyenin e-posta adresini giriniz..." />

      <Button text="Kaydı tamamla" onPress={null} />
    </View>
  )
}

export default MemberSign