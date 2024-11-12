
// //================= Exercise 1 ===================
// const Exercise1 = () => {
//   return(
//     <View>
//       <Text style = {{fontSize:24}}> RP values</Text>
//       <Text style = {{color:'green'}}> Excellence</Text>
//       <Text style = {{backgroundColor:'yellow'}}> Customer-Centric</Text>
//       <Text style = {{fontStyle: 'italic'}}> Integrity </Text>
//       <Text style = {{textAlign: "center"}}> Teamwork </Text>
//       <Text style = {{backgroundColor:'black', color:'white'}}> Enterprising </Text>
//     </View>
//   );
// };
//
// export default Exercise1;

// // ================= Exercise 2 ===================
//  import React from 'react';
//  import {View, Text, StyleSheet} from 'react-native';
//  const styles = StyleSheet.create({
//    greenBox: {
//      width: 100,
//      height: 100,
//      marginTop: 20,
//      backgroundColor: 'green',
//      borderWidth: 1,
//      borderColor: 'black'
//    },
//    boxTest: {
//      textAlign: 'center',
//      color: 'white'
//    },
//    title: {
//      fontWeight: 'bold'
//    }
//  });
//  const Exercise2 =() => {
//    return (
//        <View>
//          <View style={styles.greenBox}>
//            <Text style={[styles.boxTest, styles.title]}> Who we are </Text>
//          </View>
//
//          <View style={styles.greenBox}>
//            <Text style={styles.boxTest}> Our People </Text>
//          </View>
//
//          <View style={styles.greenBox}>
//            <Text style={styles.boxTest}> Our Campus </Text>
//          </View>
//        </View>
//    );
//  };
//
//  export default Exercise2;


// // ================= Exercise 3A ===================
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create ({
//   parent: {
//     flexDirection: 'row',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5
//   },
//   child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24
//   }
// });
//
// const Exrcise3A = ()=> {
//   return (
//       <View style={[styles.parent, {marginTop: 50}]}>
//         <Text style={[styles.child, {backgroundColor: 'powderblue'}]}> Child One </Text>
//         <Text style={[styles.child, {backgroundColor: 'skyblue'}]}> Child Two </Text>
//         <Text style={[styles.child, {backgroundColor: 'steelblue'}]}> Child Three </Text>
//       </View>
//   );
// };
//
// export default Exrcise3A;

// // ================= Exercise 3B ===================
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create ({
//   parent: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5
//   },
//   child: {
//     flex: 1,
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24
//   }
// });
//
// const Exrcise3B = ()=> {
//   return (
//       <View style={[styles.parent, {marginTop: 50}]}>
//         <Text style={[styles.child, {backgroundColor: 'powderblue'}]}> Child One </Text>
//         <Text style={[styles.child, {backgroundColor: 'skyblue'}]}> Child Two </Text>
//         <Text style={[styles.child, {backgroundColor: 'steelblue'}]}> Child Three </Text>
//       </View>
//   );
// };
//
// export default Exrcise3B;

// // ================= Exercise 3C ===================
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create ({
//   parent: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5
//   },
//   child: {
//     flex: 1,
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24
//   }
// });
//
// const Exrcise3C = ()=> {
//   return (
//       <View style={[styles.parent, {marginTop: 50}]}>
//         <Text style={[styles.child, {backgroundColor: 'powderblue', maxWidth: 90}]}> Child One </Text>
//         <Text style={[styles.child, {backgroundColor: 'skyblue'}]}> Child Two </Text>
//         <Text style={[styles.child, {backgroundColor: 'steelblue', maxHeight: 120}]}> Child Three </Text>
//       </View>
//   );
// };
//
// export default Exrcise3C;

// // ================= Exercise 3D ===================
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create ({
//   parent: {
//     flexDirection: 'row',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5
//   },
//   child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24
//   }
// });
//
// const Exrcise3D = ()=> {
//   return (
//       <View style={[styles.parent, {marginTop: 50}]}>
//         <Text style={[styles.child, {backgroundColor: 'powderblue', flex: 1}]}> Child One </Text>
//         <Text style={[styles.child, {backgroundColor: 'skyblue', flex: 2}]}> Child Two </Text>
//         <Text style={[styles.child, {backgroundColor: 'steelblue', flex: 3}]}> Child Three </Text>
//       </View>
//   );
// };
//
// export default Exrcise3D;

// // ================= Exercise 3E ===================
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create ({
//   parent: {
//     flex: 1,
//     //justifyContent:'space-between',
//     //justifyContent:'flex-start',
//     //justifyContent:'flex-end',
//     justifyContent:'space-around',
//     flexDirection: 'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5
//   },
//   child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24
//   }
// });
//
// const Exrcise3E = ()=> {
//   return (
//       <View style={[styles.parent, {marginTop: 50}]}>
//         <Text style={[styles.child, {backgroundColor: 'powderblue'}]}> Child One </Text>
//         <Text style={[styles.child, {backgroundColor: 'skyblue'}]}> Child Two </Text>
//         <Text style={[styles.child, {backgroundColor: 'steelblue'}]}> Child Three </Text>
//       </View>
//   );
// };
//
// export default Exrcise3E;

// ================= Exercise 4 ===================
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
  parent: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: 'whitesmoke',
    marginTop: 3,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  child: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

const Exrcise4 = ()=> {
  return (
      <View style={[styles.parent, {marginTop: 50}]}>
        <View style={[styles.child, {backgroundColor: 'powderblue'}]}>
          <Text> Square 1 </Text>
        </View>

        <View style={[styles.child, {backgroundColor: '#C3E5C2'}]}>
          <Text> Square 2 </Text>
        </View>

        <View style={[styles.child, {backgroundColor: '#F2B8B5'}]}>
          <Text> Square 3 </Text>
        </View>
      </View>
  );
};

export default Exrcise4;
