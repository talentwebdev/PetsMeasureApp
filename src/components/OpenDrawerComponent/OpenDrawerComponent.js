import React, {Component} from 'react';

class OpenDrawerComponent extends Component {
  constructor(props) {
    super(props);

    const {navigation} = props;
    console.log('openDrawerComponent', navigation.getParam('page'));
    if (
      navigation.getParam('page') !== null &&
      navigation.getParam('page') !== undefined
    ) {
      if (navigation.getParam('page') === 'MeasureStepsScreen') {
        console.log('step', navigation.getParam('step'));
        navigation.navigate(navigation.getParam('page'), {
          step: navigation.getParam('step'),
        });
        return;
      }
      navigation.navigate(navigation.getParam('page'));
    }
  }
}

export default OpenDrawerComponent;
