import * as React from 'react';
import {List} from 'react-native-paper';
import DrinkItem from './DrinkItem';
import {Text, View} from 'react-native';
import colors from '../../../colors';

const index = ({softDrinks}) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  // selected drink state
  const [selectedDrink, setSelectedDrink] = React.useState(null);

  // handle when someone clicks on radio button
  const handleOnPressDrink = (index, drink, quantity) => {
    // set the incoming drink as active
    setSelectedDrink({drink: drink, index, quantity});
    setExpanded(false);
  };

  React.useEffect(() => {
    if (softDrinks.length < 1) {
      return;
    } else {
      setSelectedDrink({drink: softDrinks[0], index: 0, quantity: 1});
    }
  }, [softDrinks]);

  return (
    <List.Section title="">
      <List.Accordion
        right={props => (
          <View
            style={{flexDirection: 'row', alignItems: 'center', height: 25}}>
            <Text style={{color: colors.primary, fontWeight: '700'}}>
              {selectedDrink === null ? 'Loading...' : selectedDrink.drink.name}
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
        {softDrinks.map((drink, index) => {
          return (
            <DrinkItem
              index={index}
              drink={drink}
              key={index}
              selectedDrink={selectedDrink}
              handleOnPressDrink={handleOnPressDrink}
            />
          );
        })}
      </List.Accordion>
    </List.Section>
  );
};

export default index;
