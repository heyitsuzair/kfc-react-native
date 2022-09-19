import * as React from 'react';
import {List} from 'react-native-paper';
import DrinkItem from './DrinkItem';
import {Text, View} from 'react-native';
import colors from '../../../colors';

const MyComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  // selected drink state
  const [selectedDrink, setSelectedDrink] = React.useState({
    value: 'Pepsi',
    index: '1',
    quantity: 1,
  });

  // handle when someone clicks on radio button
  const handleOnPressDrink = (index, value, quantity) => {
    // set the incoming drink as active
    setSelectedDrink({value, index, quantity});
    setExpanded(false);
  };

  return (
    <List.Section title="">
      <List.Accordion
        right={props => (
          <View
            style={{flexDirection: 'row', alignItems: 'center', height: 25}}>
            <Text style={{color: colors.primary, fontWeight: '700'}}>
              {selectedDrink.value}
            </Text>
            <List.Icon
              icon={`chevron-${expanded === true ? 'up' : 'down'}`}
              color="black"
            />
          </View>
        )}
        title="Select Drink"
        expanded={expanded}
        titleStyle={{fontFamily: 'Poppins-Light', color: 'black'}}
        style={{backgroundColor: 'white'}}
        onPress={handlePress}>
        <DrinkItem
          index="1"
          selectedDrink={selectedDrink}
          handleOnPressDrink={handleOnPressDrink}
        />
        <DrinkItem
          index="2"
          selectedDrink={selectedDrink}
          handleOnPressDrink={handleOnPressDrink}
        />
        <DrinkItem
          index="3"
          selectedDrink={selectedDrink}
          handleOnPressDrink={handleOnPressDrink}
        />
        <DrinkItem
          index="4"
          selectedDrink={selectedDrink}
          handleOnPressDrink={handleOnPressDrink}
        />
        <DrinkItem
          index="5"
          selectedDrink={selectedDrink}
          handleOnPressDrink={handleOnPressDrink}
        />
        <DrinkItem
          index="6"
          selectedDrink={selectedDrink}
          handleOnPressDrink={handleOnPressDrink}
        />
      </List.Accordion>
    </List.Section>
  );
};

export default MyComponent;
