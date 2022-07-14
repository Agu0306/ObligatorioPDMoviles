import { StyleSheet, Text, View, SafeAreaView, FlatList, Alert } from 'react-native'
import React, { useEffect } from 'react'
import MyText from '../components/MyText'
import { Alert } from 'bootstrap';
import DatabaseConnection from "../database/database-connection";

const db = DatabaseConnection.getConnection();

const ViewAllInsumos = () => {
  const [insumos, setInsumos] = useState([]);

  useEffect(()=> {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM insumos',
        [],
        (tx, results) => {
          console.log("results", results);
          if (results.rows.length>0){
            setInsumos(results.rows);
          }
          else{
            Alert.alert("No hay insumos");
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
        <MyText text="Nombre de Insumo"/>
        <MyText text={item.insumoName}/>
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
          data={insumos}
          keyExtractor={(item, index)=> index.toString()}
          renderItem={({item})=> listItemView(item)}
        </View>
      </View>
    </SafeAreaView>
    
  )
}

export default ViewAllInsumos

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