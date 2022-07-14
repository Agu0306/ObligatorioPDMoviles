import { StyleSheet, Text, View, SafeAreaView, FlatList, Alert } from 'react-native'
import React, { useEffect } from 'react'
import MyText from '../components/MyText'
import { Alert } from 'bootstrap';
import DatabaseConnection from "../database/database-connection";

const db = DatabaseConnection.getConnection();

const ViewAllVehiculos = () => {
  const [vehiculo, setVehiculo] = useState([]);

  useEffect(()=> {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM vehiculo',
        [],
        (tx, results) => {
          console.log("results", results);
          if (results.rows.length>0){
            setVehiculo(results.rows);
          }
          else{
            Alert.alert("No hay vehiculos");
          }
        }
      )
    })
  }, [])

  const listItemView = ({item}) =>{
    return(
      <View
      key={item.id}
      style={styles.listItemView}>
        <MyText text="Matricula"/>
        <MyText text={item.userName}/>
        <MyText/>
        <MyText/>
      </View>
    )
  }
  return (
    <SafeAreaView>
      <View>
        <View>
          <FlatList
          contentContainerStyle={{paddingHorizontal:20}}/>
          data={vehiculo}
          keyExtractor={(item, index)=> index.toString()}
          renderItem={({item})=> listItemView(item)}
        </View>
      </View>
    </SafeAreaView>
    
  )
}

export default ViewAllVehiculos

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  viewContainer: {
    flex:1,
    backgroundColor: 'white',
  },
  generalView:{
    flex:1,
  },
  listView: {
    marginTop: 30,
  },
  listItemView:{
    backgroundColor: 'blue',
    marign:10,
  }
})