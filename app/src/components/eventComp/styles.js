import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  rootContainer: {
    height: 0.2 * height,
    width,
    flexDirection: 'row',
    backgroundColor: '#f5f5f5'
  },
  dateContainer: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  day: {
    color: `#8E8E8E`,
  },
  date: {
    color: '#4A4A4A',
    textAlign: 'right',
  },
  iconContainer: {
    flex: 0.15,
    alignItems: 'center'
  },
  deviceName: {
  },
  verticalLine: {
    flex: 1,
    width:2,
    backgroundColor: '#a1a1a1ff'
  },
  circleContainer: {
    flex: 1,
    flexDirection: 'row',
    aspectRatio: 1
  },
  circle: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 30,
    padding: 2,
    borderColor: '#a1a1a1ff',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageWrapper: {
    flex: 1,
    alignItems: 'center',
    aspectRatio:1,
    overflow: 'hidden',
    justifyContent: 'center',
    borderRadius: 30
  },
  messageContainer: {
    flex: 0.7,
    alignItems: 'center',
    flexDirection: 'row',
  },
  messageSubContainer: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 3,
    justifyContent: 'center',
    marginVertical: 5
  },
  textContainer: {
    flex: 0.7,
    flexWrap: 'wrap',
    padding: 2,
    paddingLeft: 5
  },
  imageContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  time: {
  },
  status: {
    paddingBottom: 2,
  },
  middleContainer: {

  },
  bottomContainer: {
    paddingTop: 10,
    justifyContent: 'flex-end'
  },
  description: {
    // color: commonStyles.colors.black,
    color: '#605F5F',

    // opacity: 0.6
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 11,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#fff',
    transform: [
      {rotate: '-90deg'}
    ]
  },
  statusMsg: {
    color: 'black',
  },
  statusBanner: {
    marginBottom: 5,
    marginRight: 5,
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  countContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  deviceCount: {
    width: 30,
    height: 27,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D1CECF',
    borderRadius: 5
  },
  devicesText: {
    fontSize: 8,
    color: '#929292'
  },
  countText: {
    fontSize: 20,
    color: '#000'
  }
});

module.exports = styles;
