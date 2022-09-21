import * as React from 'react';
import {List} from 'react-native-paper';
import AddonItem from './AddonItem';
import {View} from 'react-native';

const index = ({addons}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="">
      <List.Accordion
        right={props => (
          <View
            style={{flexDirection: 'row', alignItems: 'center', height: 25}}>
            <List.Icon
              icon={`chevron-${expanded === true ? 'up' : 'down'}`}
              color="black"
            />
          </View>
        )}
        title="Add-Ons"
        expanded={expanded}
        titleStyle={{fontFamily: 'Poppins-Light', color: 'black'}}
        style={{backgroundColor: 'white'}}
        onPress={handlePress}>
        {addons.map((addon, index) => {
          return <AddonItem key={index} addon={addon} index={index} />;
        })}
      </List.Accordion>
    </List.Section>
  );
};

export default index;
