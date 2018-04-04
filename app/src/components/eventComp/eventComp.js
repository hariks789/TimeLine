import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import moment from 'moment';

const Triangle = <View style={styles.triangle} />;

export default class EventComp extends Component {
  static defaultProps = {
    ...Component.defaultProps,
  }

  render() {
    const { time, title, name, imageUrl, photos, videos, description, handlePress} = this.props;
    return(
      <View style={styles.rootContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{time ? time.toString().slice(0,4) : ''}</Text>
          <Text style={styles.day}>
            {
              time ? time.toString().slice(6,8) : ''
            }
            {
              time ? moment().month(time.toString().slice(4,6)).subtract(1, 'month').format('MMM') : ''
            }
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.verticalLine}></View>
          <View style={styles.circleContainer}>
            <View style={styles.circle}>
              <View style={[styles.imageWrapper, {backgroundColor: 'green'}]}>

              </View>
            </View>
          </View>
            <View style={styles.verticalLine}></View>
        </View>
        <TouchableOpacity style={styles.messageContainer} onPress={() => this.props.handlePress()}>
          <View>
            {Triangle}
          </View>
          <View style={[styles.messageSubContainer, { justifyContent: 'center' }]}>
            <View style={styles.textContainer}>
              <View style={{ flexDirection: 'row' }}>
                {
                  imageUrl
                  ?
                  <Image
                    style={{width: 30, height: 30, marginRight: 10}}
                    source={{uri: imageUrl}}
                    resizeMode="cover"
                    borderRadius={15}
                  />
                  :
                  <View
                    style={{width: 30, height: 30, borderRadius: 15, backgroundColor: 'grey'}}
                  />
                }
                <Text style={{ fontSize: 12, color: 'black', paddingVertical: 5 }}>{name}</Text>
              </View>
              <Text style={{ fontSize: 12, color: 'grey', paddingVertical: 5 }}>{title}</Text>
              <Text style={{ fontSize: 12, color: 'grey', paddingVertical: 5 }}>{description.length > 50 ? `${description.slice(0,50)}...` : description}</Text>
            </View>
            <View style={styles.imageContainer}>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
