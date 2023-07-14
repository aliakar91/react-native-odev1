import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const jobIcon = require('./images/jobIcon.jpg');
const notificationIcon = require('./images/notificationIcon.png');
const menuIcon = require('./images/menuIcon.png');
const dateIcon = require('./images/dateIcon.png');
const starIcon = require('./images/starIcon.png');
const searchIcon = require('./images/searchIcon.png');
const doctorImage = require('./images/doctor.jpg');
const calendarIcon = require('./images/calendarIcon.png');
const timeIcon = require('./images/timeIcon.png');
const rightArrowIcon = require('./images/rightArrowIcon.png');


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          
          <View style={styles.image}>
            <Image style={styles.imageUrl} source={{ uri: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg' }} >
            </Image>
          </View>
          <Text style={styles.name}>Ali AKAR</Text>
          <View style={styles.rightHeader}>
            <TouchableOpacity style={styles.button}>
              <Image style={styles.headerIcon} source={searchIcon}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image style={styles.headerIcon} source={notificationIcon}></Image>
            </TouchableOpacity>

          </View>
        </View>

      </View>

      <View style={styles.cardContainer}>
        <View style={styles.userCard}>
          <View style={styles.cardHeader}>
            <Image style={styles.doctorImage} source={doctorImage}></Image>
            <View style={styles.cardMiddle}>
              <Text style={styles.name}>Ali AKAR</Text>
              <Text style={styles.name}>Therapist</Text>
              <View style={styles.rateCard}>
                <Image style={styles.starIcon} source={starIcon}>
                </Image>
                <Text style={styles.name}>4.8</Text>
              </View>
            </View>

            <Image style={styles.cardLastIcon} source={menuIcon} ></Image>
          </View>
          <View style={styles.userCard2}>
            <View style={styles.userCard2Row}>
              <Image style={styles.menuIcon} source={calendarIcon} ></Image>
              <Text style={styles.dateTimeText, { color: 'white', fontSize: 13, }}>Today,September 2</Text>
              <View style={styles.timeIcon}></View>
              <Image style={styles.menuIcon} source={timeIcon} ></Image>
              <Text style={styles.dateTimeText, { color: 'white', fontSize: 13, }}>10:00-11:00 AM</Text>
            </View>
          </View>
        </View>

        <View style={styles.marginConstant}>
        <Text style={{fontSize:22,fontWeight:'500'}}>Today's medicines</Text>
        </View>



        <View style={styles.marginConstantCard}>

          <View style={styles.cardRightHeader}>

            <View style={styles.listCard}>
              <Image style={styles.cardImage} source={{ uri: 'https://cdn.create.vista.com/api/media/small/331693470/stock-vector-medicine-isolated-vector-icon-which' }}></Image>
              <Text style={styles.name}>Coldact</Text>
              <Text style={styles.name}>3 capsules/day</Text>
              <View style={styles.middleBottomCard}>

                <Text style={styles.name}>Taken </Text>
                <Image style={styles.starIcon} source={starIcon}>
                </Image>
              </View>

            </View>
            <View style={styles.listCard}>

              <Image style={styles.cardImage} source={{ uri: 'https://as2.ftcdn.net/v2/jpg/01/76/01/11/1000_F_176011174_HO4sOFv9nF4gh34RRvN20BvooHN7PUHW.jpg' }}></Image>
              <Text style={styles.name}>Ibuprofen</Text>
              <Text style={styles.name}>1 tablet/day</Text>
              <View style={styles.middleBottomCard}>

                <Text style={styles.name}>02:00 PM </Text>
                <Image style={styles.starIcon} source={timeIcon}>
                </Image>
              </View>

            </View>

          </View>


        </View>
        <View style={styles.marginConstant}>
          <View style={styles.userCard2Row}>


            <Text style={{fontSize:23,fontWeight:'500'}}>Medical tests</Text>
            <View style={styles.allTextPadding}>
              <Text style={styles.name}>All</Text>
            </View>
          </View>
        </View>
        <View style={styles.lastCard}>
          <View style={styles.cardHeader}>
            <Image style={styles.lastContainer}></Image>
            <View style={styles.cardMiddle}>
              <Text style={styles.name}>Biochemical blood test</Text>
              <View style={styles.lastCardRow}>
              <Text style={{fontSize: 16,color:'red',paddingRight:5,}} >Deviation</Text>
              <View style={styles.rateCard}>
                <Image style={styles.starIcon} source={starIcon}>
                </Image>
                <Text style={styles.name}>4.8%</Text>
              </View>
              
              </View>
            </View>
            <Image style={styles.cardLastIcon} source={rightArrowIcon}>
                </Image>
          </View>
          
        </View>

        

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'start',
    // justifyContent: 'start',

  },

  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 50,
  },

  leftHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#bbb',
    marginRight: 10,
    marginLeft: 10,
    overflow: 'hidden',

  },
  name: {
    fontSize: 15,
    fontWeight: '700',
  },

  rightHeader: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },

  imageUrl: {
    width: 50,
    height: 56,
  },
  button: {
    width: 40,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  card: {
    width: 45,
    height: 45,
    color: 'red',
  },
  userContent: {
    width: '100%',
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 16,
  },
  userCard: {
    flexDirection: 'column',
    marginLeft: 35,
    marginTop:20,
    width: '80%',
    height: 130,
    backgroundColor: '#6495ED',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

  cardHeader: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
  },
  photo: {
    margin: 18,
    width: 56,
    height: 56,
    backgroundColor: 'yellow',
  },

  cardMiddle: {
    marginTop: 9,
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-start',
  },
  rateCard: {
    flexDirection: 'row',
    //margin:18,
    width: 50,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 18,
  },
  starIcon: {
    width: 16,
    height: 16,
    marginTop: 3,

  },
  photoRight: {
    margin: 18,
    width: 56,
    height: 56,
    backgroundColor: 'blue',
  },
  rateRow: {
    marginTop: 9,
    flexDirection: 'row',
    flex: 1,
    //justifyContent: 'flex-start',
  },

  menuIcon: {
    width: 25,
    height: 25,
    //backgroundColor: 'tra',
  },
  doctorImage: {
    margin: 18,
    width: 56,
    height: 56,
    borderRadius: 10
  },
  cardContainer: {
    flexDirection: 'column',
    flex: 1,

    // alignItems: 'start',
    // justifyContent: 'start',

  },
  headerBottomCard: {
    margin: 18,
    width: '80%',
    height: 56,
    backgroundColor: 'yellow',
  },
  userBottomCard: {
    flexDirection: 'column',
    marginLeft: 35,
    width: '80%',
    height: '40%',
    backgroundColor: '#4e42f5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  userCard2: {
    flexDirection: 'column',
    marginBottom: 10,
    width: '90%',
    height: '25%',
    backgroundColor: '#0F52BA',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },

  userCard2Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateTimeText: {
    fontSize: 12,
    fontWeight: '700',
  },
  timeIcon: {
    marginLeft: 18,
  },
  marginConstant: {
    marginLeft: 35,
    marginTop: 20,
  },
  listCard: {
    flexDirection: 'column',
    width: '40%',
    height: 150,
    backgroundColor: '#D5D8DC',
    marginRight: 10,
    justifyContent: 'space-evenly',
    //alignItems: 'center',
    //justifyContent: 'center',
    borderRadius: 20,
    paddingLeft: 15,
  },
  cardRightHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  marginConstantCard: {
    marginLeft: 10,
    marginTop: 20,

  },
  cardImage: {
    marginTop: 10,
    width: 40,
    height: 40,
    borderRadius: 10
  },
  middleBottomCard: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    //margin:18,
    width: 120,
    height: 25,
    backgroundColor: '#6495ED',
    borderRadius: 18,
  },
  lastText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  allTextPadding: {
    paddingRight: 40,
  },
  lastCardRow: {
    flexDirection: 'row',
    // //margin:18,
    // width: 50,
    // height: 20,
    // backgroundColor: 'white',
    // borderRadius: 18,
  },
  lastCard: {
    flexDirection: 'row',
    marginLeft: 35,
    marginTop:20,
    width: '80%',
    height: 60,
    backgroundColor: '#D5D8DC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  lastContainer: {
    margin: 18,
    width: 20,
    height: 20,
    borderRadius: 5,
   backgroundColor:'red'
  },
  cardLastIcon: {
    width: 30,
    height: 30,
    marginTop: 10,

  },
});
