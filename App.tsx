/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
 import React from 'react';
 import type {PropsWithChildren} from 'react';
 import {
   Dimensions,
   InputAccessoryView,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Image,
   TextInput,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 // type SectionProps = PropsWithChildren<{
 //   title: string;
 // }>;
 
 function App(): JSX.Element {
   // const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: 'white',
     flex: 1,
     borderWidth: 4,
     borderColor: 'green',
   };
 
   return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.rootContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>My timer</Text>
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.first_text_middle}>להתחברות לאפליקציית טיימר אנא הזינו את מספר הטלפון והמייל שלכם</Text>
          <TextInput style={styles.input_email} placeholder="הקלד אימייל"></TextInput>
          <TextInput style={styles.input_email} placeholder="הקלד מספר"></TextInput>
        </View>
        <View style={styles.footerContainer}>
            <Image
          source={require('./arrow.png')}
          style={styles.image_arrow}
          />
              <Text style={styles.footer_text}>צריך עזרה? יצירת קשר עם התמיכה</Text>
        </View>

      </View>
    </SafeAreaView>
  );
  
 }
 const windowsHight = Dimensions.get('window').height;
 const styles = StyleSheet.create({
   rootContainer: {
     flex: 1,
     height: windowsHight * 0.1,
     backgroundColor: 'yellow',
   },
   headerContainer: {
     width: '100%',
     flexDirection: 'row',
     alignItems:'center',
     justifyContent:'center',
     elevation: 2,
     flex:0.5,
     shadowColor: '#000',
     shadowOffset: {width: 0, height: 1},
     shadowOpacity: 0.1,
     shadowRadius: 10,
     borderColor: 'black',
     backgroundColor: 'white',
   },
   middleContainer: {
    width: '100%',
    flex:2,
    flexDirection:"column",
    alignItems:'center',
    justifyContent:'center'
  },
   title: {
    color:"red",
    fontFamily:"arial",
    fontSize: 30,
    textAlign:'center'
  },
  leftImage: {
    alignSelf:'center',
    flexDirection:'row-reverse'
  },
  first_text_middle: {
    width:'60%'
  },
  input_email: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    backgroundColor:'white'
  },
  footerContainer: {
    flexDirection:'row',

    width: '100%',
    alignItems:'center',
    justifyContent:'space-around',
    flex:3,

    alignContent: 'flex-end'
  },
  footer_text : {
      width:'39%'
  },
  image_arrow: {
    width: 50,
    height: 50
  }
 });
 export default App;