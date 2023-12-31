import {StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity, StatusBar,ScrollView} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import { Image, SearchBar } from 'react-native-elements';
import { SafeAreaView } from 'react-native';
import styles from '../../Styles_holder';



const { width} = Dimensions.get("window");

const POST_WIDTH = width * 0.825;
const POST_HEIGHT = 0.5*width; 

const Paid = ({navigation}) => {

  const postData = [
    {
      id: 1,
      title: 'Tree Plantation in Sanepa',
      image:require('../../assets/img/recyclerview/post-image.jpg'),
      location: 'Patan Municipality',
     },
     {
       id: 2,
       title: 'Bagmati Cleaning Program',
       image:require('../../assets/img/recyclerview/post-image.jpg'),
       location: 'Patan Municipality',
      },
      {
       id: 3,
       title: 'Taking care of the Zoo',
       image:require('../../assets/img/recyclerview/post-image.jpg'),
       location: 'Patan Municipality',
      },
      {
       id: 4,
       title: 'Cleaning Program in Pulchowk',
       image:require('../../assets/img/recyclerview/post-image.jpg'),
       location: 'Patan Municipality',
      },
      {
       id: 5,
       title: 'Tree Plantation in Sanepa',
       image:require('../../assets/img/recyclerview/post-image.jpg'),
       location: 'Patan Municipality',
      },
      {
        id: 6,
        title: 'Bagmati Cleaning Program',
        image:require('../../assets/img/recyclerview/post-image.jpg'),
        location: 'Patan Municipality',
       },
       {
        id: 7,
        title: 'Bagmati Cleaning Program',
        image:require('../../assets/img/recyclerview/post-image.jpg'),
        location: 'Patan Municipality',
       },
       {
        id: 8,
        title: 'Bagmati Cleaning Program',
        image:require('../../assets/img/recyclerview/post-image.jpg'),
        location: 'Patan Municipality',
       },
       {
        id: 9,
        title: 'Bagmati Cleaning Program',
        image:require('../../assets/img/recyclerview/post-image.jpg'),
        location: 'Patan Municipality',
       }
  ];
  
const PostItem = ({title, image, location}) => (
  <TouchableOpacity onPress={() => navigation.navigate('PostDetail')} >
  <View
  style={styles.PostDetail_main_view}> 
    <View style={{
      height: 0.57 * POST_HEIGHT,
    }}>
       <Image source={image} style={styles.PostDetail_image}/>
    </View>
  <View style={{
    marginTop: 0.082*POST_HEIGHT,
    flexDirection: 'column',
  }}>

  <Text style={styles.PostDetail_title_text}>{title}</Text>

  <View style={{
    display:'flex',
    flexDirection: 'row',
  }}>
  <Text style={styles.PostDetail_location_text}>{location}</Text>

 <Image source ={require('../../assets/icons/location.png')}
        resizeMode = 'contain'
        style = {styles.PostDetail_location_icon}/>
  </View>

  </View>
</View>
</TouchableOpacity>
);



postgaps  = () => {
   return <View style= {{
     height: 8,
     width: '100%',
   }}/>
  }

  return (
    <SafeAreaView style={styles.inner_page_parent_container}>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor={COLORS.bgColor} barStyle = "light-content"  />
      
      
      <View style={styles.search_bar_container}>
        <SearchBar 
            placeholder="Search..  "
            inputStyle={{ backgroundColor: '#34363A',}}
            inputContainerStyle ={{height: 38, }}
            bgColor ={'#34363A'}    
            containerStyle ={styles.search_bar} 
            searchIcon = {null}
            round
           />
      </View>
       
       
       
      <View style={{ 
        flexDirection: 'row',
        justifyContent: 'space-around',
     }}>

          <TouchableOpacity onPress={() => navigation.navigate('CreatePost')}>
              <View style={styles.paidpage_button}> 
                <Text style={styles.paidpage_button_text}>{'Post a Task'}</Text>
              </View>
          </TouchableOpacity>
              <View style={styles.paidpage_button}> 
                <Text style={styles.paidpage_button_text}>{'Placeholder'}</Text>
              </View>       
      
      </View>
       
      <Text style= {styles.scrollview_heading}>Type of Tasks</Text>
     

      <View style={{
          flexDirection: 'row',
          marginBottom: 8,}}> 
               <ScrollView
                  horizontal={true}
                  alwaysBounceHorizontal={true}
                  style={{
                  marginHorizontal: 20,
                  flex: 1, 
                  }}>

                  <View
                      style={{
                      position: "relative",
                      width: 105,
                      height: 105,
                      marginVertical: 10,
                      marginBottom: 2,
                      marginHorizontal: 10,
                      backgroundColor: '#7DAD2F',
                      borderRadius: 18,
                      alignItems: 'center',
                    }}> 

                    <Image source={require('../../assets/icons/walk.png')} style={{
                      height: 50,
                      width: 50,
                    marginTop: 18 
                    }}/>
                    <Text style={{
                      color:'#fff',
                      fontSize: 12,
                      justifyContent:'center',
                      textAlign: 'center',
                      alignContent: 'center',
                      paddingLeft:13,
                      paddingRight:13,

                    }}>{'Outdoor Active'}</Text>
                  </View>

                  <View
                      style={{
                      position: "relative",
                      width: 105,
                      height: 105,
                      marginVertical: 10,
                      marginBottom: 2,
                      marginHorizontal: 10,
                      backgroundColor: '#2FAD97',
                      borderRadius: 18,
                      alignItems: 'center',
                    }}> 

                    <Image source={require('../../assets/icons/walk.png')} style={{
                      height: 50,
                      width: 50,
                    marginTop: 18 
                    }}/>
                    <Text style={{
                      color:'#fff',
                      fontSize: 12,
                      justifyContent:'center',
                      textAlign: 'center',
                      alignContent: 'center',
                      paddingLeft:13,
                      paddingRight:13,

                    }}>{'Outdoor Mundane'}</Text>
                  </View>

                  <View
                      style={{
                      position: "relative",
                      width: 105,
                      height: 105,
                      marginVertical: 10,
                      marginBottom: 2,
                      marginHorizontal: 10,
                      backgroundColor: '#2F80AD',
                      borderRadius: 18,
                      alignItems: 'center',
                    }}> 

                    <Image source={require('../../assets/icons/walk.png')} style={{
                      height: 50,
                      width: 50,
                    marginTop: 18 
                    }}/>
                    <Text style={{
                      color:'#fff',
                      fontSize: 12,
                      justifyContent:'center',
                      textAlign: 'center',
                      alignContent: 'center',
                      marginTop: 10,
                      paddingLeft:13,
                      paddingRight:13,

                    }}>{'Babysitting'}</Text>
                  </View>

                  <View
                      style={{
                      position: "relative",
                      width: 105,
                      height: 105,
                      marginVertical: 10,
                      marginBottom: 2,
                      marginHorizontal: 10,
                      backgroundColor: '#ADA82F',
                      borderRadius: 18,
                      alignItems: 'center',
                    }}> 

                    <Image source={require('../../assets/icons/walk.png')} style={{
                      height: 50,
                      width: 50,
                    marginTop: 18 
                    }}/>
                    <Text style={{
                      color:'#fff',
                      fontSize: 12,
                      justifyContent:'center',
                      textAlign: 'center',
                      alignContent: 'center',
                      paddingLeft:13,
                      paddingRight:13,

                    }}>{'Maintenance Skills'}</Text>
                  </View>

                  <View
                      style={{
                      position: "relative",
                      width: 105,
                      height: 105,
                      marginVertical: 10,
                      marginBottom: 2,
                      marginHorizontal: 10,
                      backgroundColor: '#2F52AD',
                      borderRadius: 18,
                      alignItems: 'center',
                    }}> 

                    <Image source={require('../../assets/icons/walk.png')} style={{
                      height: 50,
                      width: 50,
                    marginTop: 18 
                    }}/>
                    <Text style={{
                      color:'#fff',
                      fontSize: 12,
                      justifyContent:'center',
                      textAlign: 'center',
                      alignContent: 'center',
                      paddingLeft:13,
                      paddingRight:13,

                    }}>{'Photoshop Skills'}</Text>
                  </View>

                  <View
                      style={{
                      position: "relative",
                      width: 105,
                      height: 105,
                      marginVertical: 10,
                      marginBottom: 2,
                      marginHorizontal: 10,
                      backgroundColor: '#A659CA',
                      borderRadius: 18,
                      alignItems: 'center',
                    }}> 
                  <TouchableOpacity onPress={() => navigation.navigate('MoreCategories')}>
                
                    <Image source={require('../../assets/icons/walk.png')} style={{
                      marginLeft:18,
                      height: 50,
                      width: 50,
                    marginTop: 18 
                    }}/>

                    <Text style={{
                      color:'#fff',
                      fontSize: 12,
                      justifyContent:'center',
                      textAlign: 'center',
                      alignContent: 'center',
                      paddingLeft:13,
                      paddingRight:13,

                    }}>{'More Categories'}</Text>
                       </TouchableOpacity>
                  </View>
                  

              </ScrollView>
      </View>

      <View style={{
          marginTop: 5,
          height: width *1.05,
      }}>

          <Text style = {styles.flatlist_heading}>Posts</Text>
          <FlatList
                data={postData}
                        renderItem={({item}) => <PostItem title={item.title} image={item.image} location={item.location} />}
                        keyExtractor={item => item.id}
                ListEmptyComponent = {<Text>This is where post regarding various volunteering opportunities are kept</Text>} 
                ItemSeperatorComponent = {postgaps}    
          />
         
        </View>
    </SafeAreaView>
    
  );
};

export default Paid;
