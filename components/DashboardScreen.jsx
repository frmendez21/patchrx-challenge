import React, { useEffect } from 'react';
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

const checkmark = '\u2713';
const star = <Text style={{color: 'gold'}}>{'\u2605'}</Text>;
const styles = StyleSheet.create({
  head: {
    borderBottomColor: 'lightgray', 
    borderBottomWidth: 1, 
    padding: 10
  },
  hr: {
    borderColor: 'lightgray',
    borderWidth: 1,
    width: '80%',
    marginLeft: '10%'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    padding: 10,
    borderColor: 'lightgray', 
    borderWidth: 1, 
    borderRadius: 5
  },
  sectionContainer: {
    padding: 5,
    margin: 10,
    backgroundColor: 'white'
  },
  sectionHeadView: {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  sectionHeadText: {
    fontSize: 16, 
    fontWeight: 'bold'
  },
  sectionHeadBtn: {
    fontSize: 12, 
    fontWeight: 'bold',
    color: 'blue'
  },
  smallSection: { 
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    height: 75, 
    width: '95%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgray', 
    borderRadius: 5, 
    margin: 10
   },
  circleContainer: {
    flexDirection: 'row',
  },
  openCircle: {
    marginRight: 15,
    height: 15,
    width: 15,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'blue'
  },
  filledCircle: {
    marginRight: 15,
    height: 15,
    width: 15,
    borderRadius: 100,
    backgroundColor: 'lightskyblue'
  },
  innerSection: {
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    display: 'flex', 
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  takeBtn: {
    marginTop: 20,
    width: 100,
    height: 35,
    borderRadius: 5, 
    borderWidth: 1, 
    borderColor: 'lightgray',
    backgroundColor: 'dodgerblue',
    shadowOffset: {width: 2, height: -2},
    shadowColor: 'lightgray', 
    shadowOpacity: 1,
  },
  takeBtnText: {
    color: 'white',
    paddingTop: 5,
    fontWeight: '600',
    textAlign: 'center'
  },
  barContainer: {
    height: 10,
    width: '100%',
    backgroundColor: 'navajowhite'
  },
  buddy: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10, 
    borderRadius: 5, 
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  historyCircle: {
    backgroundColor: 'white',
    padding: 5,
    borderColor: 'navajowhite',
    borderWidth: 5,
    borderRadius: 50, 
    borderTopColor: 'transparent', 
    transform: [{rotate: "320deg"}]
  },
  historyFullCircle: {
    transform: [{ rotate: "320deg" }],
    padding: 5, 
    borderRadius: 50, 
    borderWidth: 5,
    borderColor: 'orange',
    backgroundColor: 'orange'
  },
  historyText: {
    transform: [{rotate: "-320deg"}]
  }
});

function TakeMeds () {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionHeadView}>
        <Text style={styles.sectionHeadText}>Take your meds</Text>
        <Pressable>
          <Text style={styles.sectionHeadBtn}>Full Schedule &gt;</Text>
        </Pressable>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionContainer}>
          <Text>{'\u2600'}Morning Medication</Text>
          <Text style={{color: 'gray'}}>6 routine meds</Text>
          <View style={styles.circleContainer}>
            <View style={styles.filledCircle}>
              <Text style={{ textAlign: 'center', color: 'blue' }}>{checkmark}</Text>
            </View>
            <View style={styles.filledCircle}>
              <Text style={{ textAlign: 'center', color: 'blue' }}>{checkmark}</Text>
            </View>
            <View style={styles.filledCircle}>
              <Text style={{ textAlign: 'center', color: 'blue' }}>{checkmark}</Text>
            </View>
            <View style={styles.openCircle}></View>
            <View style={styles.openCircle}></View>
            <View style={styles.openCircle}></View>
          </View>
        </View>
        <View style={styles.innerSection}>
          <View style={{paddingBottom: 20}} >
            <Text style={{color: 'gray'}}>6:00 AM {'\u2600'}</Text>
            <Text style={{fontWeight: 'bold'}}>Vitamin C</Text>
            <Text>Take 1 tablet</Text>
          </View>
          <Pressable style={styles.takeBtn}>
            <Text style={styles.takeBtnText}>Take {checkmark}</Text>
          </Pressable>
        </View>
        <View style={styles.innerSection}>
          <View style={{ paddingBottom: 20 }}>
            <Text style={{ color: 'gray' }}>6:00 AM {'\u2600'}</Text>
            <Text style={{fontWeight: 'bold'}}>Magnesium</Text>
            <Text>Take 1 tablet</Text>
          </View>
          <Pressable style={styles.takeBtn}>
            <Text style={styles.takeBtnText}>Take {checkmark}</Text>
          </Pressable>
        </View>
        <View style={styles.innerSection}>
          <View style={{ paddingBottom: 20 }}>
            <Text style={{ color: 'gray' }}>6:00 AM {'\u2600'}</Text>
            <Text style={{fontWeight: 'bold'}}>Prednisolone</Text>
            <Text>Take 1 pill</Text>
          </View>
          <Pressable style={styles.takeBtn}>
            <Text style={styles.takeBtnText}>Take {checkmark}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

function AsNeeded () {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.smallSection}>
        <View>
          <Text style={{ fontWeight: 'bold', padding: 5 }}>As-needed medication</Text>
          <Text style={{padding: 5, color: 'green'}}> {checkmark} 3 of 5 meds okay to take</Text>
        </View>
        <Button title="View" />
      </View>
    </View>
  )
}

function Rewards () {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionHeadView}>
        <Text style={styles.sectionHeadText}>Earn Rewards</Text>
        <Pressable>
          <Text style={styles.sectionHeadBtn}>All Rewards &gt;</Text>
        </Pressable>
      </View>
      <View style={styles.section}>
        <Text>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>80</Text>
          {star}
          <Text style={{color: 'gray', fontWeight: 'bold'}}>Points</Text>
        </Text>
        <View style={styles.barContainer}>
          <View style={{ backgroundColor: 'orange', position: 'absolute', width: '20%', height: '100%' }} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.filledCircle}><Text>{checkmark}</Text></View>
          <Text>{star}5 Stars earned</Text>
          <Text> Open the app once a day</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.filledCircle}><Text>{checkmark}</Text></View>
          <Text>{star}15 Stars earned</Text>
          <Text> 3 meds taken</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.openCircle} />
          <Text>{star}0 Stars earned</Text>
          <Text> Daily health survey</Text>
        </View>
        <Text style={{color: 'blue', textAlign:'center'}}>Expand &#8964;</Text>

      </View>
    </View>
  )
}

function buddyItem ({item: buddy}) {
  return (
    <View key={buddy.id} style={styles.buddy}>
      <View style={{display: 'flex', flexDirection: 'row' }}>
        <Image source={{uri: buddy.avatarUrl}} style={{ height: 40, width: 40 }} />
        <View style={{paddingLeft: 5}}>
          <Text>{buddy.name}</Text>
          <Text style={{color: 'gray'}}>All-time adherence</Text>
        </View>
      </View>
      <View>
        <Text style={{color: 'green'}}>{String(buddy.adherence).slice(0, 2)}%</Text>
      </View>
    </View>
  )
}

function Buddies () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'FETCH_BUDDIES' })
  }, [])
  const buddyList = useSelector(state => state.buddies)

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionHeadView}>
        <Text style={styles.sectionHeadText}>Check on buddies</Text>
        <Pressable>
          <Text style={styles.sectionHeadBtn}>All Buddies &gt;</Text>
        </Pressable>
      </View>
        <FlatList
          data={buddyList.slice(0,3)}
          renderItem={buddyItem}
          keyExtractor={buddy => String(buddy.id)}
        />
    </View>
  )
}

function RecentHistory () {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionHeadView}>
        <Text style={styles.sectionHeadText}> Past 7 days</Text>
        <Pressable>
          <Text style={styles.sectionHeadBtn}>Medication history &gt;</Text>
        </Pressable>
      </View>
      <View style={styles.section}>
        <Text>Medication Progress</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.historyDay}>
            <Text>Th</Text>
            <View style={styles.historyCircle}>
              <Text style={styles.historyText}>12</Text>
            </View>
          </View>
          <View style={styles.historyDay}>
            <Text>Fri</Text>
            <View style={styles.historyFullCircle}>
              <Text style={styles.historyText}>13</Text>
            </View>
          </View>
          <View style={styles.historyDay}>
            <Text>Sat</Text>
            <View style={styles.historyFullCircle}>
              <Text style={styles.historyText}>14</Text>
            </View>
          </View>
          <View style={styles.historyDay}>
            <Text>Sun</Text>
            <View style={styles.historyCircle}>
              <Text style={styles.historyText}>15</Text>
            </View>
          </View>
          <View style={styles.historyDay}>
            <Text>Mon</Text>
            <View style={styles.historyCircle}>
              <Text style={styles.historyText}>16</Text>
            </View>
          </View>
          <View style={styles.historyDay}>
            <Text>Tues</Text>
            <View style={styles.historyCircle}>
              <Text style={styles.historyText}>17</Text>
            </View>
          </View>
          <View style={styles.historyDay}>
            <Text>Wed</Text>
            <View style={styles.historyCircle}>
              <Text style={styles.historyText}>18</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

function DashboardScreen () {
  return (
    <ScrollView style={{marginTop: 20, backgroundColor: 'white'}}>
      <View style={styles.head}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Dashboard {'\u2600'}</Text>
      </View>
      <TakeMeds />
      <AsNeeded />
      <Rewards />
      <Buddies />
      <RecentHistory />
    </ScrollView>
  );
}

export default DashboardScreen