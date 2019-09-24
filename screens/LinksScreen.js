import React from 'react';
import { Alert, View, StyleSheet, Text, TextInput } from 'react-native';
import { MapView } from 'expo';
import { Button } from 'react-native-elements';


export default class LinkScreen extends React.Component {
  static navigationOptions = {
    title: 'Sell',
  };
  constructor(props) {
    super(props);

    this.state = {
      latitude: 0,
      longitude: 0,
      error:null,
    };
  }

  onPress=()=>{
      Alert.alert('Your spot is up for sale')
  }


  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
       (position) => {
          this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
           region: {
             longitude: -117.891867,
             latitude: 34.130565,
             longitudeDelta: 0.004,
             latitudeDelta: 0.004
           },
         });
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );
   }

  render() {

        return (
          <View style={styles.container}>
            <MapView
            style={{ flex: 1 }}
            region={this.state.region}
                >

                <MapView.Marker
                  title = "spot"
                  coordinate={{ longitude: this.state.longitude ,latitude: this.state.latitude, }}
                >

                      <MapView.Callout>
                          <View>
                              <Text> Price </Text>
                              <TextInput
                              style={{ padding: 5}}
                              placeholder= "Ex: 5.00"

                              />
                              <Text> Spot Number: </Text>
                              <TextInput
                              style={{ padding: 5}}
                              placeholder= "Ex: 123"
                              />

                              <Text> Phone Number: </Text>
                              <TextInput
                              style={{ padding: 5}}
                              placeholder= "111-111-1111"
                              />

                              <Button
                              onPress={()=> this.onPress()}
                              backgroundColor="white"
                              title="Sell"
                              color="#007AFF"
                              paddingTop="10"
                              >

                              </Button>
                          </View>
                      </MapView.Callout>


                  </MapView.Marker>

                </MapView>
          </View>
        );
      }
    }



const styles = StyleSheet.create({
  container:
  {
  flex: 1,
  paddingTop: 15,
  backgroundColor: '#fff',
  },
});
