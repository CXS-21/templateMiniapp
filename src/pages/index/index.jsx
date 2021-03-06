import { Component } from "react";
import { View, Text, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { connect } from "react-redux";
import "./index.less";
@connect(({ user }) => ({
  userInfo: user.userInfo,
}))
export default class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      list: [
        {
          id: 1,
          info: "资源预约",
          url: "/pages/appointment/index",
        },
        {
          id: 2,
          info: "一键切换中英文",
          url: "/pages/changeLanguage/index",
        },
        {
          id: 3,
          info: "自定义顶部导航栏",
          url: "/pages/navigationBar/index",
        },
        {
          id: 4,
          info: "周历",
          url: "",
        },
        {
          id: 5,
          info: "左滑删除",
          url: "/pages/moveLeftDel/index",
        },
        {
          id: 6,
          info: "列表局部加载",
          url: "",
        },
        {
          id: 7,
          info: "视频播放",
          url: "/pages/video/index",
        },
      ],
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  handleNav = (item) => {
    Taro.navigateTo({
      url: item.url,
    });
  };
  render() {
    const { list } = this.state;
    return (
      <View className="container">
        <View className="content">
          {list &&
            list.length > 0 &&
            list.map((item) => {
              return (
                <Button
                  key={item.id}
                  className={"item"}
                  onClick={() => {
                    this.handleNav(item);
                  }}
                >
                  <Text>{item.info}</Text>
                </Button>
              );
            })}
        </View>
      </View>
    );
  }
}
