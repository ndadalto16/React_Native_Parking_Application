import React from 'react';
import { Alert, View, StyleSheet, Text, TextInput } from 'react-native';
import { MapView } from 'expo';
import { Button } from 'react-native-elements';
import { markerCreate } from './MarkerActions';



export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Buy',
  };
  state = {
    region: {
      longitude: -117.891867,
      latitude: 34.130565,
      longitudeDelta: 0.004,
      latitudeDelta: 0.004
    }
  }

  constructor(props) {
  super(props);
}

  onPress=()=>{
      Alert.alert('You bought a parking spot!')
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
              coordinate={{longitude: -117.891867,latitude: 34.130565,}}
              onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}


              >

                  <MapView.Callout>
                      <View>
                          <Text> Price </Text>
                          <TextInput
                          style={{ padding: 5}}
                          value= "10,000"

                          />
                          <Text> Spot Number: </Text>
                          <TextInput
                          style={{ padding: 5}}
                          value= "K123"
                          />

                          <Text> Phone Number: </Text>
                          <TextInput
                          style={{ padding: 5}}
                          value= "111-111-1111"

                          />
                          <Button
                          onPress={()=> this.onPress()}
                          backgroundColor="white"
                          title="Buy"
                          color="#007AFF"
                          paddingTop="10"
                          >

                          </Button>
                      </View>
                  </MapView.Callout>


              </MapView.Marker>

              <MapView.Marker
                title = "spot"
                coordinate={{longitude: -117.891977,latitude: 34.130975,}}
                onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
                draggable
                >

                    <MapView.Callout>
                        <View>
                            <Text> Price </Text>
                            <TextInput
                            style={{ padding: 5}}
                            value= "5.00"

                            />
                            <Text> Spot Number: </Text>
                            <TextInput
                            style={{ padding: 5}}
                            value= "P123"
                            />

                            <Text> Phone Number: </Text>
                            <TextInput
                            style={{ padding: 5}}
                            value= "111-111-1111"

                            />
                            <Button
                            onPress={()=> this.onPress()}
                            backgroundColor="white"
                            title="Buy"
                            color="#007AFF"
                            paddingTop="10"
                            >

                            </Button>
                        </View>
                    </MapView.Callout>


                </MapView.Marker>

                <MapView.Marker
                  title = "spot"
                  coordinate={{longitude: -117.891057,latitude: 34.130955,}}
                  onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
                  draggable
                  >

                      <MapView.Callout>
                          <View>
                              <Text> Price </Text>
                              <TextInput
                              style={{ padding: 5}}
                              value= "20.00"

                              />
                              <Text> Spot Number: </Text>
                              <TextInput
                              style={{ padding: 5}}
                              Value= "ZZZ"
                              />

                              <Text> Phone Number: </Text>
                              <TextInput
                              style={{ padding: 5}}
                              value= "111-111-1111"

                              />
                              <Button
                              onPress={()=> this.onPress()}
                              backgroundColor="white"
                              title="Buy"
                              color="#007AFF"
                              paddingTop="10"
                              >

                              </Button>
                          </View>
                      </MapView.Callout>


                  </MapView.Marker>

                  <MapView.Marker
                    title = "spot"
                    coordinate={{longitude: -117.891264,latitude: 34.133565,}}
                    onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
                    draggable
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
                                value= "111-111-1111"

                                />
                                <Button
                                onPress={()=> this.onPress()}
                                backgroundColor="white"
                                title="Buy"
                                color="#007AFF"
                                paddingTop="10"
                                >

                                </Button>
                            </View>
                        </MapView.Callout>


                    </MapView.Marker>

                    <MapView.Marker
                      title = "spot"
                      coordinate={{longitude: -117.892869,latitude: 34.131566,}}
                      onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
                      draggable
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
                                  value= "111-111-1111"

                                  />
                                  <Button
                                  onPress={()=> this.onPress()}
                                  backgroundColor="white"
                                  title="Buy"
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
