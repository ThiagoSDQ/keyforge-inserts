import Component from '@glimmer/component';

export default class BoxInsertComponent extends Component {

  get sideShowSet() {
    return this.args.printOptions.get('side_showSet');
  }

  get houseBarUseColor() {
    return this.args.printOptions.get('front_HouseBarUseColor');
  }
  get showHouseBar() {
    return this.args.printOptions.get('front_ShowHouseBar');
  }
}